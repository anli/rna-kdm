import {render} from '@testing-library/react-native';
import {Screen} from '@tests';
import faker from 'faker';
import React from 'react';
import {MonsterLevelsScreen} from './monster-levels-screen';
import {MonsterLevelsScreenDocument} from './monster-levels-screen.generated';

const monsterLevels = Array.from({length: 1}, () => {
  return {
    __typename: 'MonsterLevel',
    id: faker.datatype.uuid(),
    name: faker.lorem.word(),
    monster: {name: faker.lorem.word()},
  };
});

const mocks = [
  {
    request: {
      query: MonsterLevelsScreenDocument,
    },
    result: {
      data: {
        monsterLevels,
      },
    },
  },
];

describe('Monster Levels Screen', () => {
  describe('API data is loaded', () => {
    describe('Given I am at Monster Levels Screen', () => {
      test('When API data is loaded, Then I should see data', async () => {
        jest.useRealTimers();
        const {findByText, getByText} = render(
          <Screen
            mocks={mocks}
            component={MonsterLevelsScreen.Component}
            options={MonsterLevelsScreen.options}
          />,
        );
        expect(await findByText(monsterLevels[0].name)).toBeDefined();
        expect(getByText(monsterLevels[0].monster.name)).toBeDefined();
        jest.useFakeTimers();
      });
    });
  });
});
