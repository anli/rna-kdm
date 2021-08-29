import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';
import {FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {
  List_MonsterLevelFragment,
  useMonsterLevelsScreenQuery,
} from './monster-levels-screen.generated';

const Component = () => {
  const {data} = useMonsterLevelsScreenQuery();

  const renderItem = ({item}: {item: List_MonsterLevelFragment}) => {
    const {name, monster} = item;
    return (
      <List.Item
        title={name}
        description={monster?.name}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
    );
  };

  return (
    <Screen>
      <FlatList
        data={data?.monsterLevels}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
};

const options: StackNavigationOptions = {
  title: 'Monster Levels',
};

export const MonsterLevelsScreen = {Component, options};
