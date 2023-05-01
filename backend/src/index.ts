import "reflect-metadata";
import * as tq from "type-graphql";

import { ApolloServer } from "@apollo/server";
import { DateTimeResolver } from "graphql-scalars";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { UserContext, userAuth, userAuthChecker } from "./context";
import { GraphQLScalarType } from "graphql";
import GeneralResolver from "./resolvers/GeneralResolver";
import session from "express-session";
import ConnectRedis from "connect-redis";
import express from "express";
import compression from "compression";
import cors, { CorsOptions } from "cors";
import http from "http";
import Redis from "ioredis";
import UserResolver from "./resolvers/UserResolver";

const PORT = process.env.PORT || 4000;
const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || "localhost";

export const app = express();

app.use(compression());

app.use(
  express.json({
    // max size 20 megabytes or mibibytes i have no idea which but it should be enough
    limit: 20 * 1024 * 1024,
    // add `bodyBuffer` (request content as buffer)
    // verify: (req, _res, buf) => (req.bodyBuffer = buf),
  })
);

const corsConfig: CorsOptions = {
  credentials: true,
  origin: (_, cb) => {
    return cb(null, [
      "https://relia-backend.herokuapp.com",
      "https://studio.apollographql.com",
    ]);
  },
};

app.use(cors(corsConfig));

const httpServer = http.createServer(app);

const schema = tq.buildSchemaSync({
  resolvers: [GeneralResolver, UserResolver],
  authChecker: userAuthChecker,
  scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
  validate: { forbidUnknownValues: false },
});

const server = new ApolloServer<UserContext>({
  schema,
  introspection: true, // TODO: correct this by the time we go live
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageLocalDefault({
      embed: true,
      includeCookies: true,
    }),
  ],
});

const RedisStore = ConnectRedis(session);
const redisClient = new Redis(
  process.env.NODE_ENV === "production"
    ? process.env.REDIS_TLS_URL!
    : process.env.REDIS_URL!,
  process.env.NODE_ENV === "production"
    ? {
        tls: {
          rejectUnauthorized: false,
        },
      }
    : {}
);

const ready = async () => {
  await server.start();

  app.use(
    "/",
    session({
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      store: new RedisStore({
        client: redisClient,
        prefix: "relia.user.",
      }),
      cookie: {
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : undefined,
        // domain: COOKIE_DOMAIN,
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      },
      name: "relia.user",
    })
  );

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => {
        const { endUser } = await userAuth(req);
        return { req, endUser };
      },
    })
  );
};

ready()
  .then(() => {
    const server = app.listen(PORT, () =>
      console.log(`
🚀 Server ready at: http://localhost:${PORT}
⭐️  See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`)
    );

    process.once("SIGTERM", async () => {
      console.log("SIGTERM received. Shutting down");
      server.close(() => {
        process.exit(0);
      });
    });

    return;
  })
  .catch((err: unknown) => {
    console.log("Failed to start server", err);
    process.exit(1);
  });
