import { ApolloError } from '@apollo/client';

export enum Errors {
  InvalidCredentials = 'INVALID_CREDENTIALS',
}

export const isInvalidCredentialsError = (error: ApolloError) => {
  return error.graphQLErrors[0]?.extensions?.code === Errors.InvalidCredentials;
};
