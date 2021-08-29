import * as Types from '@api';
import * as Apollo from '@apollo/client';
import {gql} from '@apollo/client';

const defaultOptions = {};
export type MonsterLevelsScreenQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type MonsterLevelsScreenQuery = {
  __typename?: 'Query';
  monsterLevels: Array<{__typename?: 'MonsterLevel'; id: string; name: string}>;
};

export const MonsterLevelsScreenDocument = gql`
  query MonsterLevelsScreen {
    monsterLevels {
      id
      name
    }
  }
`;

/**
 * __useMonsterLevelsScreenQuery__
 *
 * To run a query within a React component, call `useMonsterLevelsScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useMonsterLevelsScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMonsterLevelsScreenQuery({
 *   variables: {
 *   },
 * });
 */
export function useMonsterLevelsScreenQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MonsterLevelsScreenQuery,
    MonsterLevelsScreenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    MonsterLevelsScreenQuery,
    MonsterLevelsScreenQueryVariables
  >(MonsterLevelsScreenDocument, options);
}
export function useMonsterLevelsScreenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MonsterLevelsScreenQuery,
    MonsterLevelsScreenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    MonsterLevelsScreenQuery,
    MonsterLevelsScreenQueryVariables
  >(MonsterLevelsScreenDocument, options);
}
export type MonsterLevelsScreenQueryHookResult = ReturnType<
  typeof useMonsterLevelsScreenQuery
>;
export type MonsterLevelsScreenLazyQueryHookResult = ReturnType<
  typeof useMonsterLevelsScreenLazyQuery
>;
export type MonsterLevelsScreenQueryResult = Apollo.QueryResult<
  MonsterLevelsScreenQuery,
  MonsterLevelsScreenQueryVariables
>;
