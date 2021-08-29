import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MonsterLevelsScreen, ShowdownScreen} from '@screens';
import React from 'react';

export type AuthenticatedParamList = {
  Home: undefined;
  MonsterLevels: undefined;
  Showdown: {monsterLevelId: string};
};

const Stack = createStackNavigator<AuthenticatedParamList>();

export type AuthenticatedScreenProps =
  NativeStackScreenProps<AuthenticatedParamList>;

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen.Component}
        options={HomeScreen.options}
      />
      <Stack.Screen
        name="MonsterLevels"
        component={MonsterLevelsScreen.Component}
        options={MonsterLevelsScreen.options}
      />
      <Stack.Screen
        name="Showdown"
        component={ShowdownScreen.Component}
        options={ShowdownScreen.options}
      />
    </Stack.Navigator>
  );
};
