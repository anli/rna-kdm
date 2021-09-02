import {mockedUseRoute, showdowns} from '@mocks';
import {render} from '@testing-library/react-native';
import {Screen} from '@tests';
import React from 'react';
import {ShowdownScreen} from './showdown-screen';
import {mocks} from './showdown-screen.mocks';

describe('Showdown Screen', () => {
  beforeEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
    mockedUseRoute.mockReturnValue({params: {showdownId: showdowns[0].id}});
  });

  afterEach(() => {
    jest.useFakeTimers();
  });

  it('Scenario: Stats is loaded', async () => {
    const {findByText, getByText} = render(
      <Screen
        mocks={mocks}
        component={ShowdownScreen.Component}
        options={ShowdownScreen.options}
      />,
    );

    expect(
      await findByText(`${showdowns[0].monsterLevel.movement}`),
    ).toBeDefined();
    expect(getByText(`${showdowns[0].monsterLevel.toughness}`)).toBeDefined();
    expect(
      getByText(`${showdowns[0].monsterLevel.damageModifier}`),
    ).toBeDefined();
    expect(
      getByText(`${showdowns[0].monsterLevel.speedModifier}`),
    ).toBeDefined();
  });
});
