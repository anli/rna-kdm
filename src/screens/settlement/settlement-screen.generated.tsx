import * as Types from '@api';
import * as Apollo from '@apollo/client';
import {gql} from '@apollo/client';

const defaultOptions = {};
export type List_ShowdownFragment = {
  __typename?: 'Showdown';
  id: string;
  year: number;
  monsterLevel?: Types.Maybe<{
    __typename?: 'MonsterLevel';
    name: string;
    monster?: Types.Maybe<{__typename?: 'Monster'; name: string}>;
  }>;
};

export type SettlementScreenQueryVariables = Types.Exact<{
  settlementId: Types.Scalars['ID'];
}>;

export type SettlementScreenQuery = {
  __typename?: 'Query';
  settlement?: Types.Maybe<{
    __typename?: 'Settlement';
    showdowns: Array<{
      __typename?: 'Showdown';
      id: string;
      year: number;
      monsterLevel?: Types.Maybe<{
        __typename?: 'MonsterLevel';
        name: string;
        monster?: Types.Maybe<{__typename?: 'Monster'; name: string}>;
      }>;
    }>;
  }>;
};

export const List_ShowdownFragmentDoc = gql`
  fragment List_Showdown on Showdown {
    id
    year
    monsterLevel {
      name
      monster {
        name
      }
    }
  }
`;
export const SettlementScreenDocument = gql`
  query SettlementScreen($settlementId: ID!) {
    settlement(where: {id: $settlementId}) {
      showdowns {
        ...List_Showdown
      }
    }
  }
  ${List_ShowdownFragmentDoc}
`;

/**
 * __useSettlementScreenQuery__
 *
 * To run a query within a React component, call `useSettlementScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettlementScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettlementScreenQuery({
 *   variables: {
 *      settlementId: // value for 'settlementId'
 *   },
 * });
 */
export function useSettlementScreenQuery(
  baseOptions: Apollo.QueryHookOptions<
    SettlementScreenQuery,
    SettlementScreenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<SettlementScreenQuery, SettlementScreenQueryVariables>(
    SettlementScreenDocument,
    options,
  );
}
export function useSettlementScreenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SettlementScreenQuery,
    SettlementScreenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    SettlementScreenQuery,
    SettlementScreenQueryVariables
  >(SettlementScreenDocument, options);
}
export type SettlementScreenQueryHookResult = ReturnType<
  typeof useSettlementScreenQuery
>;
export type SettlementScreenLazyQueryHookResult = ReturnType<
  typeof useSettlementScreenLazyQuery
>;
export type SettlementScreenQueryResult = Apollo.QueryResult<
  SettlementScreenQuery,
  SettlementScreenQueryVariables
>;
