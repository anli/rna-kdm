import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '@screens';
import React from 'react';

export type PublicParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<PublicParamList>();

export type PublicScreenProps = NativeStackScreenProps<PublicParamList>;

export const PublicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen.Component}
        options={LoginScreen.options}
      />
    </Stack.Navigator>
  );
};
