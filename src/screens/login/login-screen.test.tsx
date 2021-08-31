import {mockedSignInWithCredential} from '@mocks';
import {statusCodes} from '@react-native-google-signin/google-signin';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Screen} from '@tests';
import React from 'react';
import {Alert} from 'react-native';
import {LoginScreen} from './login-screen';

describe('Login Screen', () => {
  beforeEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useFakeTimers();
  });

  it('Scenario: Press Login Button', async () => {
    const {getByText} = render(
      <Screen
        component={LoginScreen.Component}
        options={LoginScreen.options}
      />,
    );

    expect(getByText('Sign in')).toBeDefined();
    fireEvent.press(getByText('Sign in'));
    await waitFor(() =>
      expect(mockedSignInWithCredential).toHaveBeenCalledTimes(1),
    );
  });

  it('Scenario: User cancel login', async () => {
    jest.spyOn(Alert, 'alert');
    mockedSignInWithCredential.mockRejectedValue({
      code: statusCodes.SIGN_IN_CANCELLED,
    });
    const {getByText} = render(
      <Screen
        component={LoginScreen.Component}
        options={LoginScreen.options}
      />,
    );

    expect(getByText('Sign in')).toBeDefined();
    fireEvent.press(getByText('Sign in'));
    await waitFor(() =>
      expect(mockedSignInWithCredential).toHaveBeenCalledTimes(1),
    );
    expect(Alert.alert).toHaveBeenCalledTimes(0);
  });

  it('Scenario: Login process has error', async () => {
    jest.spyOn(Alert, 'alert');
    mockedSignInWithCredential.mockRejectedValue({
      code: 'IN_PROGRESS',
    });
    const {getByText} = render(
      <Screen
        component={LoginScreen.Component}
        options={LoginScreen.options}
      />,
    );

    expect(getByText('Sign in')).toBeDefined();
    fireEvent.press(getByText('Sign in'));
    await waitFor(() =>
      expect(mockedSignInWithCredential).toHaveBeenCalledTimes(1),
    );
    expect(Alert.alert).toHaveBeenCalledTimes(1);
    expect(Alert.alert).toHaveBeenCalledWith(
      'Something Went Wrong',
      'Please try again later.',
    );
  });
});
