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

export type CreateSettlementMutationVariables = Types.Exact<{
  data: Types.SettlementCreateInput;
}>;

export type CreateSettlementMutation = {
  __typename?: 'Mutation';
  createSettlement?: Types.Maybe<{
    __typename?: 'Settlement';
    id: string;
    showdowns: Array<{__typename?: 'Showdown'; id: string}>;
  }>;
};

export type PublishCreateSettlementMutationVariables = Types.Exact<{
  settlementId: Types.Scalars['ID'];
  userId: Types.Scalars['String'];
  showdownId: Types.Scalars['ID'];
}>;

export type PublishCreateSettlementMutation = {
  __typename?: 'Mutation';
  publishSettlement?: Types.Maybe<{__typename?: 'Settlement'; id: string}>;
  publishPlayer?: Types.Maybe<{__typename?: 'Player'; id: string}>;
  publishShowdown?: Types.Maybe<{__typename?: 'Showdown'; id: string}>;
  publishManySurvivorsConnection: {
    __typename?: 'SurvivorConnection';
    edges: Array<{
      __typename?: 'SurvivorEdge';
      node: {__typename?: 'Survivor'; id: string};
    }>;
  };
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
export const CreateSettlementDocument = gql`
  mutation CreateSettlement($data: SettlementCreateInput!) {
    createSettlement(data: $data) {
      id
      showdowns {
        id
      }
    }
  }
`;
export type CreateSettlementMutationFn = Apollo.MutationFunction<
  CreateSettlementMutation,
  CreateSettlementMutationVariables
>;

/**
 * __useCreateSettlementMutation__
 *
 * To run a mutation, you first call `useCreateSettlementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSettlementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSettlementMutation, { data, loading, error }] = useCreateSettlementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSettlementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSettlementMutation,
    CreateSettlementMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    CreateSettlementMutation,
    CreateSettlementMutationVariables
  >(CreateSettlementDocument, options);
}
export type CreateSettlementMutationHookResult = ReturnType<
  typeof useCreateSettlementMutation
>;
export type CreateSettlementMutationResult =
  Apollo.MutationResult<CreateSettlementMutation>;
export type CreateSettlementMutationOptions = Apollo.BaseMutationOptions<
  CreateSettlementMutation,
  CreateSettlementMutationVariables
>;
export const PublishCreateSettlementDocument = gql`
  mutation PublishCreateSettlement(
    $settlementId: ID!
    $userId: String!
    $showdownId: ID!
  ) {
    publishSettlement(where: {id: $settlementId}, to: PUBLISHED) {
      id
    }
    publishPlayer(where: {userId: $userId}, to: PUBLISHED) {
      id
    }
    publishShowdown(where: {id: $showdownId}, to: PUBLISHED) {
      id
    }
    publishManySurvivorsConnection(where: {settlement: {id: $settlementId}}) {
      edges {
        node {
          id
        }
      }
    }
  }
`;
export type PublishCreateSettlementMutationFn = Apollo.MutationFunction<
  PublishCreateSettlementMutation,
  PublishCreateSettlementMutationVariables
>;

/**
 * __usePublishCreateSettlementMutation__
 *
 * To run a mutation, you first call `usePublishCreateSettlementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishCreateSettlementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishCreateSettlementMutation, { data, loading, error }] = usePublishCreateSettlementMutation({
 *   variables: {
 *      settlementId: // value for 'settlementId'
 *      userId: // value for 'userId'
 *      showdownId: // value for 'showdownId'
 *   },
 * });
 */
export function usePublishCreateSettlementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PublishCreateSettlementMutation,
    PublishCreateSettlementMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    PublishCreateSettlementMutation,
    PublishCreateSettlementMutationVariables
  >(PublishCreateSettlementDocument, options);
}
export type PublishCreateSettlementMutationHookResult = ReturnType<
  typeof usePublishCreateSettlementMutation
>;
export type PublishCreateSettlementMutationResult =
  Apollo.MutationResult<PublishCreateSettlementMutation>;
export type PublishCreateSettlementMutationOptions = Apollo.BaseMutationOptions<
  PublishCreateSettlementMutation,
  PublishCreateSettlementMutationVariables
>;
