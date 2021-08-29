import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React from 'react';

export const ApiProvider: React.FC = ({children}) => {
  const client = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/cksczprvs3ctc01xqficr7hir/master',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
