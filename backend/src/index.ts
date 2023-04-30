import "reflect-metadata";
import * as tq from "type-graphql";

import { ApolloServer } from "apollo-server";
import { DateTimeResolver } from "graphql-scalars";
import { context } from "./context";
import { GraphQLScalarType } from "graphql";
import GeneralResolver from "./resolvers/GeneralResolver";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [GeneralResolver],
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
    validate: { forbidUnknownValues: false },
  });

  const PORT = process.env.PORT || 4000;

  const server = new ApolloServer({
    schema,
    context: context,
    cors: {
      origin: [
        "https://relia-backend.herokuapp.com",
        "https://studio.apollographql.com",
      ],
    },
    // TODO: correct this by the time we go live
    introspection: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  server.listen({ port: PORT }, () =>
    console.log(`
🚀 Server ready at: http://localhost:${PORT}
⭐️  See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`)
  );
};

app();
