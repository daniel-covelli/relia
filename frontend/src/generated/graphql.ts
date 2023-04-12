/* eslint-disable  */
import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type HealthResponse = {
  __typename?: 'HealthResponse';
  status: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft: Post;
  deletePost?: Maybe<Post>;
  incrementPostViewCount?: Maybe<Post>;
  signupUser: User;
  togglePublishPost?: Maybe<Post>;
};

export type MutationCreateDraftArgs = {
  authorEmail: Scalars['String'];
  data: PostCreateInput;
};

export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};

export type MutationIncrementPostViewCountArgs = {
  id: Scalars['Int'];
};

export type MutationSignupUserArgs = {
  data: UserCreateInput;
};

export type MutationTogglePublishPostArgs = {
  id: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  viewCount: Scalars['Int'];
};

export type PostCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostOrderByUpdatedAtInput = {
  updatedAt: SortOrder;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  draftsByUser?: Maybe<Array<Post>>;
  feed: Array<Post>;
  health: HealthResponse;
  postById?: Maybe<Post>;
};

export type QueryDraftsByUserArgs = {
  userUniqueInput: UserUniqueInput;
};

export type QueryFeedArgs = {
  orderBy?: InputMaybe<PostOrderByUpdatedAtInput>;
  searchString?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryPostByIdArgs = {
  id: Scalars['Float'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<PostCreateInput>>;
};

export type UserUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
};

export type HealthQueryVariables = Exact<{[key: string]: never}>;

export type HealthQuery = {
  __typename?: 'Query';
  health: {__typename?: 'HealthResponse'; status: boolean};
};

export const HealthDocument = gql`
  query Health {
    health {
      status
    }
  }
`;

/**
 * __useHealthQuery__
 *
 * To run a query within a React component, call `useHealthQuery` and pass it any options that fit your needs.
 * When your component renders, `useHealthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHealthQuery({
 *   variables: {
 *   },
 * });
 */
export function useHealthQuery(
  baseOptions?: Apollo.QueryHookOptions<HealthQuery, HealthQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<HealthQuery, HealthQueryVariables>(
    HealthDocument,
    options,
  );
}
export function useHealthLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<HealthQuery, HealthQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<HealthQuery, HealthQueryVariables>(
    HealthDocument,
    options,
  );
}
export type HealthQueryHookResult = ReturnType<typeof useHealthQuery>;
export type HealthLazyQueryHookResult = ReturnType<typeof useHealthLazyQuery>;
export type HealthQueryResult = Apollo.QueryResult<
  HealthQuery,
  HealthQueryVariables
>;
