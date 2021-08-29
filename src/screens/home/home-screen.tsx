import {useAuthentication} from '@authentication';
import {AuthenticatedScreenProps} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';
import {List} from 'react-native-paper';

const Component = () => {
  const {navigate} = useNavigation<AuthenticatedScreenProps['navigation']>();
  const {logout} = useAuthentication();

  const onPressMonsterLevels = () => navigate('MonsterLevels');

  const onLogout = () => logout();

  return (
    <Screen testID="HomeScreen">
      <List.Item
        title="Monster Levels"
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={onPressMonsterLevels}
      />
      <List.Item
        title="Logout"
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={onLogout}
      />
    </Screen>
  );
};

const options: StackNavigationOptions = {
  title: 'Home',
};

export const HomeScreen = {Component, options};
