import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen, Text} from '@ui';
import React from 'react';

const Component = () => {
  return (
    <Screen>
      <Text>App</Text>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const HomeScreen = {Component, options};
