import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';

const Component = () => {
  return <Screen />;
};

const options: StackNavigationOptions = {
  title: 'Showdown',
};

export const ShowdownScreen = {Component, options};
