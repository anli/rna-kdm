import {player, settlement, settlements, showdown, user} from '@mocks';
import faker from 'faker';
import {
  firstStoryMonsterLevelId,
  firstStorySettlementName,
  firstStorySurvivors,
  firstStoryYear,
} from './home-screen';
import {
  CreateSettlementDocument,
  HomeScreenDocument,
  PublishCreateSettlementDocument,
} from './home-screen.generated';

const mockHomeScreenDocument = {
  request: {
    query: HomeScreenDocument,
    variables: {
      userId: user.uid,
    },
  },
  result: {
    data: {
      player: {
        settlements,
      },
    },
  },
};

const mockCreateSettlementDocument = {
  request: {
    query: CreateSettlementDocument,
    variables: {
      data: {
        name: firstStorySettlementName,
        players: {connect: [{userId: user.uid}]},
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
  },
  result: {
    data: {
      createSettlement: {
        ...settlement,
        showdowns: [showdown],
      },
    },
  },
};

const mockPublishCreateSettlementDocument = {
  request: {
    query: PublishCreateSettlementDocument,
    variables: {
      settlementId: settlement.id,
      userId: user.uid,
      showdownId: showdown.id,
    },
  },
  result: {
    data: {
      publishSettlement: {
        id: settlement.id,
      },
      publishPlayer: {
        id: player.id,
      },
      publishShowdown: {
        id: showdown.id,
      },
      publishManySurvivorsConnection: {
        edges: [{node: {id: faker.datatype.uuid}}],
      },
    },
  },
};

export const mocks = [
  mockHomeScreenDocument,
  mockCreateSettlementDocument,
  mockPublishCreateSettlementDocument,
];
