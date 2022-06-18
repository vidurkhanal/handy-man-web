import gql from "graphql-tag";
import * as Urql from "@urql/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  readonly username?: InputMaybe<Scalars["String"]>;
};

export type Mutation = {
  readonly __typename?: "Mutation";
  readonly createUser?: Maybe<User>;
};

export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};

export type Query = {
  readonly __typename?: "Query";
  readonly hello?: Maybe<Scalars["String"]>;
};

export type QueryHelloArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type User = {
  readonly __typename?: "User";
  readonly id: Scalars["ID"];
  readonly username: Scalars["String"];
};

export type HelloQueryVariables = Exact<{
  Name: Scalars["String"];
}>;

export type HelloQuery = {
  readonly __typename?: "Query";
  readonly hello?: string | null;
};

export const HelloDocument = gql`
  query Hello($Name: String!) {
    hello(name: $Name)
  }
`;

export function useHelloQuery(
  options: Omit<Urql.UseQueryArgs<HelloQueryVariables>, "query">
) {
  return Urql.useQuery<HelloQuery>({ query: HelloDocument, ...options });
}
