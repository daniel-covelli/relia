import "reflect-metadata";
import * as tq from "type-graphql";
import {
  PostCreateInput,
  PostResolver,
  SortOrder,
} from "./resolvers/PostResolver";
import { UserResolver } from "./resolvers/UserResolver";
import { ApolloServer } from "apollo-server";
import { DateTimeResolver } from "graphql-scalars";
import { context } from "./context";
import { GraphQLScalarType } from "graphql";
import HealthResolver from "./resolvers/HealthResolver";

const app = async () => {
  tq.registerEnumType(SortOrder, {
    name: "SortOrder",
  });

  const schema = await tq.buildSchema({
    resolvers: [PostResolver, UserResolver, PostCreateInput, HealthResolver],
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
    validate: { forbidUnknownValues: false },
  });

  const PORT = process.env.PORT || 4000;
  new ApolloServer({ schema, context: context }).listen({ port: PORT }, () =>
    console.log(`
🚀 Server ready at: http://localhost:${PORT}
⭐️  See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`)
  );
};

app();
