import {useAuthentication} from '@authentication';
import React from 'react';
import {AuthenticatedNavigator} from './authenticated-navigator';
import {PublicNavigator} from './public-navigator';

export const RootNavigator = () => {
  const {initializing, user} = useAuthentication();

  if (initializing) {
    return null;
  }

  if (!user) {
    return <PublicNavigator />;
  }

  return <AuthenticatedNavigator />;
};
