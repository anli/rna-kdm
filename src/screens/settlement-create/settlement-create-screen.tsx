import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';

const Component = () => {
  return <Screen testID="SettlementCreateScreen" />;
};

const options: StackNavigationOptions = {
  title: 'Create Settlement',
};

export const SettlementCreateScreen = {Component, options};
