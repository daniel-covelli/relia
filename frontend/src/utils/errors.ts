import { ApolloError } from '@apollo/client';

export enum Errors {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidParameters = 'INVALID_PARAMETERS',
}

export const isInvalidCredentialsError = (error: ApolloError) => {
  return error.graphQLErrors[0]?.extensions?.code === Errors.InvalidCredentials;
};

export const isInvalidParametersError = (error: ApolloError) => {
  return error.graphQLErrors[0]?.extensions?.code === Errors.InvalidParameters;
};
