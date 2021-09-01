import {SurvivalAction} from '@api';
import {useApolloClient} from '@apollo/client';
import {useAuthentication} from '@authentication';
import {AuthenticatedScreenProps} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen, View} from '@ui';
import React from 'react';
import {FlatList} from 'react-native';
import {Button, List} from 'react-native-paper';
import {
  HomeScreenDocument,
  List_SettlementFragment,
  useCreateSettlementMutation,
  useHomeScreenQuery,
  usePublishCreateSettlementMutation,
} from './home-screen.generated';

export const firstStoryMonsterLevelId = 'cksmxw8343wbo0c85f6d7kaem';
export const firstStorySettlementName = 'Unnamed settlement';
export const firstStoryYear = 0;
const firstStorySurvivor = {
  survivalPoint: 0,
  survivalActions: [SurvivalAction.Dodge],
  movement: 5,
  accuracy: 0,
  strength: 0,
  evasion: 0,
  luck: 0,
  speed: 0,
  movementModifier: 0,
  accuracyModifier: 0,
  strengthModifier: 0,
  evasionModifier: 0,
  luckModifier: 0,
  speedModifier: 0,
  insanity: 0,
  huntXp: 0,
  head: 0,
  arm: 0,
  body: 0,
  waist: 0,
  leg: 0,
  weaponProficiencyLevel: 0,
  courage: 0,
  understanding: 0,
  isRerollUsed: false,
  isSkipNextHunt: false,
  isCannotUseFightingArt: false,
  isDead: false,
};

export const firstStorySurvivors = Array.from({length: 4}, (_, index) => ({
  ...firstStorySurvivor,
  name: `Unnamed Survivor ${index + 1}`,
}));

const Component = () => {
  const {navigate} = useNavigation<AuthenticatedScreenProps['navigation']>();
  const {logout, user} = useAuthentication();
  const client = useApolloClient();
  const {data} = useHomeScreenQuery({
    variables: {
      userId: user?.uid,
    },
  });
  const [createSettlementMutation] = useCreateSettlementMutation();
  const [publishCreateSettlement] = usePublishCreateSettlementMutation();

  const onMonsterLevels = () => navigate('MonsterLevels');

  const onCreateSettlement = async () => {
    const userId = user?.uid;
    const {data: createResult} = await createSettlementMutation({
      variables: {
        data: {
          name: firstStorySettlementName,
          players: {connect: [{userId}]},
          showdowns: {
            create: [
              {
                year: firstStoryYear,
                monsterLevel: {connect: {id: firstStoryMonsterLevelId}},
              },
            ],
          },
          survivors: {
            create: firstStorySurvivors,
          },
        },
      },
    });
    const settlementId = createResult?.createSettlement?.id;
    const showdownId =
      createResult?.createSettlement?.showdowns?.find(Boolean)?.id;
    userId &&
      settlementId &&
      showdownId &&
      (await publishCreateSettlement({
        variables: {settlementId, userId, showdownId},
      }));

    await client.refetchQueries({
      include: [HomeScreenDocument],
    });
    settlementId && onViewSettlement(settlementId);
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
                Start New Campaign
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
