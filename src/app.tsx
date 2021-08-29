import {ApiProvider} from '@api';
import {configure} from '@authentication';
import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@themes';
import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

export const App = () => {
  useEffect(() => {
    configure();
  }, []);

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
