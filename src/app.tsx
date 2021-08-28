import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@themes';

import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
