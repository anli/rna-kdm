import {ScreenProps} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';
import {List} from 'react-native-paper';

const Component = () => {
  const {navigate} = useNavigation<ScreenProps['navigation']>();

  const onPressMonsterLevels = () => navigate('MonsterLevels');

  return (
    <Screen>
      <List.Item
        title="Monster Levels"
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={onPressMonsterLevels}
      />
    </Screen>
  );
};

const options: StackNavigationOptions = {
  title: 'Home',
};

export const HomeScreen = {Component, options};
