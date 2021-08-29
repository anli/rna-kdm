import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MonsterLevelsScreen} from '@screens';
import React from 'react';

export type RootParamList = {
  Home: undefined;
  MonsterLevels: undefined;
};

const Stack = createStackNavigator<RootParamList>();

export type ScreenProps = NativeStackScreenProps<RootParamList>;

export const RootNavigator = () => {
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
    </Stack.Navigator>
  );
};
