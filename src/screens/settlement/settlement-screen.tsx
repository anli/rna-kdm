import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';

const Component = () => {
  return <Screen testID="SettlementScreen" />;
};

const options: StackNavigationOptions = {
  title: 'Settlement',
};

export const SettlementScreen = {Component, options};
