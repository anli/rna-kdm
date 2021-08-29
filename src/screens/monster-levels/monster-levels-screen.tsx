import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';

const Component = () => {
  return <Screen />;
};

const options: StackNavigationOptions = {
  title: 'Monster Levels',
};

export const MonsterLevelsScreen = {Component, options};
