import {ApiProvider} from '@api';
import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@themes';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <ApiProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ApiProvider>
      </PaperProvider>
    </ThemeProvider>
  );
};
