import { GraphQLError, GraphQLErrorOptions } from "graphql";

export class HttpGraphQLError extends GraphQLError {
  constructor(
    message: string,
    public statusCode: number,
    options: GraphQLErrorOptions
  ) {
    super(message, options);
  }
}

export class InvalidCredentialsError extends HttpGraphQLError {
  constructor() {
    super("InvalidCredentialsError", 401, {
      extensions: { code: "INVALID_CREDENTIALS" },
    });
  }
}
