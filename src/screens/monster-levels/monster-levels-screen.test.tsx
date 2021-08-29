import {fireEvent, render} from '@testing-library/react-native';
import {mockedReplace, Screen} from '@tests';
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
  beforeEach(() => {
    jest.useRealTimers();
  });

  afterEach(() => {
    jest.useFakeTimers();
  });

  it('Scenario: API data is loaded', async () => {
    const {findByText, getByText} = render(
      <Screen
        mocks={mocks}
        component={MonsterLevelsScreen.Component}
        options={MonsterLevelsScreen.options}
      />,
    );
    expect(await findByText(monsterLevels[0].name)).toBeDefined();
    expect(getByText(monsterLevels[0].monster.name)).toBeDefined();
  });

  it('Scenario: Press a Monster Level', async () => {
    const {findByText, getByText} = render(
      <Screen
        mocks={mocks}
        component={MonsterLevelsScreen.Component}
        options={MonsterLevelsScreen.options}
      />,
    );
    expect(await findByText(monsterLevels[0].name)).toBeDefined();

    fireEvent.press(getByText(monsterLevels[0].monster.name));
    expect(mockedReplace).toHaveBeenCalledTimes(1);
    expect(mockedReplace).toBeCalledWith('Showdown', {
      monsterLevelId: monsterLevels[0].id,
    });
  });
});
