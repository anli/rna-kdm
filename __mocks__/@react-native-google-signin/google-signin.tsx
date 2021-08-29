import faker from 'faker';
import React from 'react';
import {Button, ButtonProps} from 'react-native';

export const GoogleSignin = {
  configure: jest.fn(),
  hasPlayServices: jest.fn().mockResolvedValue(true),
  isSignedIn: jest.fn().mockResolvedValue(true),
  signOut: jest.fn().mockResolvedValue(true),
  signIn: jest.fn().mockResolvedValue({idToken: faker.datatype.uuid()}),
};

export const GoogleSigninButton = jest
  .fn()
  .mockImplementation(({onPress}: ButtonProps) => (
    <Button onPress={onPress} title="Sign in" />
  ));

export const statusCodes = {
  SIGN_IN_CANCELLED: 'SIGN_IN_CANCELLED',
  IN_PROGRESS: 'IN_PROGRESS',
};
