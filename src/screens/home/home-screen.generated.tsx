import * as Types from '@api';
import * as Apollo from '@apollo/client';
import {gql} from '@apollo/client';

const defaultOptions = {};
export type List_SettlementFragment = {
  __typename?: 'Settlement';
  id: string;
  name: string;
};

export type HomeScreenQueryVariables = Types.Exact<{
  userId?: Types.Maybe<Types.Scalars['String']>;
}>;

export type HomeScreenQuery = {
  __typename?: 'Query';
  player?: Types.Maybe<{
    __typename?: 'Player';
    settlements: Array<{__typename?: 'Settlement'; id: string; name: string}>;
  }>;
};

export const List_SettlementFragmentDoc = gql`
  fragment List_Settlement on Settlement {
    id
    name
  }
`;
export const HomeScreenDocument = gql`
  query HomeScreen($userId: String) {
    player(where: {userId: $userId}) {
      settlements {
        ...List_Settlement
      }
    }
  }
  ${List_SettlementFragmentDoc}
`;

/**
 * __useHomeScreenQuery__
 *
 * To run a query within a React component, call `useHomeScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeScreenQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useHomeScreenQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HomeScreenQuery,
    HomeScreenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<HomeScreenQuery, HomeScreenQueryVariables>(
    HomeScreenDocument,
    options,
  );
}
export function useHomeScreenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeScreenQuery,
    HomeScreenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<HomeScreenQuery, HomeScreenQueryVariables>(
    HomeScreenDocument,
    options,
  );
}
export type HomeScreenQueryHookResult = ReturnType<typeof useHomeScreenQuery>;
export type HomeScreenLazyQueryHookResult = ReturnType<
  typeof useHomeScreenLazyQuery
>;
export type HomeScreenQueryResult = Apollo.QueryResult<
  HomeScreenQuery,
  HomeScreenQueryVariables
>;
