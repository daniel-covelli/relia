import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
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

export class InvalidParametersError extends HttpGraphQLError {
  constructor(message?: string) {
    super(message || "InvalidParametersError", 400, {
      extensions: { code: "INVALID_PARAMETERS" },
    });
  }
}

export const convertToPrismaError = (error: unknown) => {
  if (!(error instanceof PrismaClientKnownRequestError)) {
    return undefined;
  }
  return error;
};
