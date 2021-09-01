export * from '@apollo/client';
export const useApolloClient = () => ({
  refetchQueries: jest.fn().mockResolvedValue(true),
});
