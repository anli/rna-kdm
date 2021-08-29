import {MockedProvider, MockedResponse} from '@apollo/client/testing';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export const Screen = ({
  component,
  options,
  mocks,
}: {
  component: React.ComponentType<any>;
  options: any;
  mocks: ReadonlyArray<MockedResponse>;
}) => {
  const Stack = createStackNavigator();

  return (
    <MockedProvider mocks={mocks}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen" component={component} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
    </MockedProvider>
  );
};
