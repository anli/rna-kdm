import {AuthenticatedParamList} from '@navigation';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen, Text, View} from '@ui';
import React from 'react';
import {FlatList} from 'react-native';
import {Card, List} from 'react-native-paper';
import {useShowdownScreenQuery} from './showdown-screen.generated';

type ShowdownScreenProps = NativeStackScreenProps<
  AuthenticatedParamList,
  'Showdown'
>;

type Stat = {name: string; value?: number};

const Component = () => {
  const {
    params: {showdownId},
  } = useRoute<ShowdownScreenProps['route']>();
  const {data} = useShowdownScreenQuery({variables: {showdownId}});
  const stats: Stat[] = [
    {
      name: 'MOV',
      value: data?.showdown?.monsterLevel?.movement,
    },
    {
      name: 'TGH',
      value: data?.showdown?.monsterLevel?.toughness,
    },
    {
      name: '+SPD',
      value: data?.showdown?.monsterLevel?.speedModifier,
    },
    {
      name: '+DAM',
      value: data?.showdown?.monsterLevel?.damageModifier,
    },
  ];

  const renderStat = ({item}: {item: Stat}) => {
    return (
      <View marginHorizontal="s">
        <Card>
          <View alignItems="center" padding="s">
            <Text variant="subtitle">{item.value}</Text>
            <Text variant="paragraph">{item.name}</Text>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <Screen testID="ShowdownScreen">
      <List.Section>
        <List.Subheader>Stats</List.Subheader>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={stats}
          keyExtractor={item => item.name}
          renderItem={renderStat}
        />
      </List.Section>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  title: 'Showdown',
};

export const ShowdownScreen = {Component, options};
