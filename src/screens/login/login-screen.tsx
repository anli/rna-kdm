import {useAuthentication} from '@authentication';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen, View} from '@ui';
import React from 'react';
import {Alert} from 'react-native';

const Component = () => {
  const {login} = useAuthentication();
  const onLogin = async () => {
    try {
      await login();
    } catch {
      return Alert.alert('Something Went Wrong', 'Please try again later.');
    }
  };

  return (
    <Screen testID="LoginScreen">
      <View flex={1} alignItems="center" justifyContent="center">
        <GoogleSigninButton onPress={onLogin} />
      </View>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const LoginScreen = {Component, options};
