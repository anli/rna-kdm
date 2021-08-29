import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';
import {List} from 'react-native-paper';

const Component = () => {
  return (
    <Screen>
      <List.Item
        title="Monster Levels"
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
    </Screen>
  );
};

const options: StackNavigationOptions = {
  title: 'Home',
};

export const HomeScreen = {Component, options};
