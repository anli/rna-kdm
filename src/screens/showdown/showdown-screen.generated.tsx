import * as Types from '@api';
import * as Apollo from '@apollo/client';
import {gql} from '@apollo/client';

const defaultOptions = {};
export type Stats_MonsterLevelFragment = {
  __typename?: 'MonsterLevel';
  movement: number;
  toughness: number;
  speedModifier: number;
  damageModifier: number;
};

export type ShowdownScreenQueryVariables = Types.Exact<{
  showdownId: Types.Scalars['ID'];
}>;

export type ShowdownScreenQuery = {
  __typename?: 'Query';
  showdown?: Types.Maybe<{
    __typename?: 'Showdown';
    monsterLevel?: Types.Maybe<{
      __typename?: 'MonsterLevel';
      name: string;
      movement: number;
      toughness: number;
      speedModifier: number;
      damageModifier: number;
    }>;
  }>;
};

export const Stats_MonsterLevelFragmentDoc = gql`
  fragment Stats_MonsterLevel on MonsterLevel {
    movement
    toughness
    speedModifier
    damageModifier
  }
`;
export const ShowdownScreenDocument = gql`
  query ShowdownScreen($showdownId: ID!) {
    showdown(where: {id: $showdownId}) {
      monsterLevel {
        name
        ...Stats_MonsterLevel
      }
    }
  }
  ${Stats_MonsterLevelFragmentDoc}
`;

/**
 * __useShowdownScreenQuery__
 *
 * To run a query within a React component, call `useShowdownScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowdownScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowdownScreenQuery({
 *   variables: {
 *      showdownId: // value for 'showdownId'
 *   },
 * });
 */
export function useShowdownScreenQuery(
  baseOptions: Apollo.QueryHookOptions<
    ShowdownScreenQuery,
    ShowdownScreenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ShowdownScreenQuery, ShowdownScreenQueryVariables>(
    ShowdownScreenDocument,
    options,
  );
}
export function useShowdownScreenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShowdownScreenQuery,
    ShowdownScreenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<ShowdownScreenQuery, ShowdownScreenQueryVariables>(
    ShowdownScreenDocument,
    options,
  );
}
export type ShowdownScreenQueryHookResult = ReturnType<
  typeof useShowdownScreenQuery
>;
export type ShowdownScreenLazyQueryHookResult = ReturnType<
  typeof useShowdownScreenLazyQuery
>;
export type ShowdownScreenQueryResult = Apollo.QueryResult<
  ShowdownScreenQuery,
  ShowdownScreenQueryVariables
>;
