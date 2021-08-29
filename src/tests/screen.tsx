import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export const Screen = ({
  component,
  options,
}: {
  component: React.ComponentType<any>;
  options: any;
}) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen" component={component} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
