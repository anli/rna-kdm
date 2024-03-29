import {AuthenticatedParamList, AuthenticatedScreenProps} from '@navigation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';
import {FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {
  List_ShowdownFragment,
  useSettlementScreenQuery,
} from './settlement-screen.generated';

type SettlementScreenProps = NativeStackScreenProps<
  AuthenticatedParamList,
  'Settlement'
>;

const Component = () => {
  const {
    params: {settlementId},
  } = useRoute<SettlementScreenProps['route']>();
  const {data} = useSettlementScreenQuery({variables: {settlementId}});
  const {navigate} = useNavigation<AuthenticatedScreenProps['navigation']>();

  const onViewShowdown = (showdownId: string) => {
    navigate('Showdown', {showdownId});
  };

  const renderShowdown = ({item}: {item: List_ShowdownFragment}) => {
    return (
      <List.Item
        description={`${item.monsterLevel?.monster?.name} ${item.monsterLevel?.name}`}
        title={`Year ${item.year}`}
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={() => onViewShowdown(item.id)}
      />
    );
  };

  return (
    <Screen testID="SettlementScreen">
      <List.Section>
        <List.Subheader>Showdowns</List.Subheader>
        <FlatList
          data={data?.settlement?.showdowns}
          keyExtractor={item => item.id}
          renderItem={renderShowdown}
        />
      </List.Section>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  title: 'Settlement',
};

export const SettlementScreen = {Component, options};
