import {useAuthentication} from '@authentication';
import {AuthenticatedScreenProps} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen, View} from '@ui';
import React from 'react';
import {FlatList} from 'react-native';
import {Button, List} from 'react-native-paper';
import {
  List_SettlementFragment,
  useHomeScreenQuery,
} from './home-screen.generated';

const Component = () => {
  const {navigate} = useNavigation<AuthenticatedScreenProps['navigation']>();
  const {logout, user} = useAuthentication();
  const {data} = useHomeScreenQuery({
    variables: {
      userId: user?.uid,
    },
  });

  const onMonsterLevels = () => navigate('MonsterLevels');

  const onCreateSettlement = () => {
    navigate('SettlementCreate');
  };

  const onViewSettlement = (settlementId: string) => {
    navigate('Settlement', {settlementId});
  };

  const renderSettlement = ({item}: {item: List_SettlementFragment}) => {
    return (
      <List.Item
        title={item.name}
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={() => onViewSettlement(item.id)}
      />
    );
  };

  return (
    <Screen testID="HomeScreen">
      <List.Section>
        <List.Subheader>Settlements</List.Subheader>
        <FlatList
          data={data?.player?.settlements}
          keyExtractor={item => item.id}
          renderItem={renderSettlement}
          ListFooterComponent={
            <View margin="m">
              <Button mode="contained" onPress={onCreateSettlement}>
                Create Settlement
              </Button>
            </View>
          }
        />
        <List.Subheader>Glossary</List.Subheader>
        <List.Item
          title="Monster Levels"
          right={props => <List.Icon {...props} icon="chevron-right" />}
          onPress={onMonsterLevels}
        />
        <List.Subheader>Profile</List.Subheader>
        <List.Item
          title="Logout"
          right={props => <List.Icon {...props} icon="chevron-right" />}
          onPress={logout}
        />
      </List.Section>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  title: 'Home',
};

export const HomeScreen = {Component, options};
