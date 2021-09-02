import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  MonsterLevelsScreen,
  SettlementCreateScreen,
  SettlementScreen,
  ShowdownScreen,
} from '@screens';
import React from 'react';

export type AuthenticatedParamList = {
  Home: undefined;
  MonsterLevels: undefined;
  Showdown: {showdownId: string};
  SettlementCreate: undefined;
  Settlement: {settlementId: string};
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
      <Stack.Screen
        name="SettlementCreate"
        component={SettlementCreateScreen.Component}
        options={SettlementCreateScreen.options}
      />
      <Stack.Screen
        name="Settlement"
        component={SettlementScreen.Component}
        options={SettlementScreen.options}
      />
    </Stack.Navigator>
  );
};
