import {mockedUseRoute, settlements, showdowns} from '@mocks';
import {render} from '@testing-library/react-native';
import {Screen} from '@tests';
import React from 'react';
import {SettlementScreen} from './settlement-screen';
import {mocks} from './settlement-screen.mocks';

describe('Settlement Screen', () => {
  beforeEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useFakeTimers();
  });

  it('Scenario: screen is loaded', async () => {
    mockedUseRoute.mockReturnValue({params: {settlementId: settlements[0].id}});
    const {findByText, getByText} = render(
      <Screen
        mocks={mocks}
        component={SettlementScreen.Component}
        options={SettlementScreen.options}
      />,
    );

    expect(
      await findByText(
        `${showdowns[0].monsterLevel.monster.name} ${showdowns[0].monsterLevel.name}`,
      ),
    ).toBeDefined();
    expect(getByText('Year 0')).toBeDefined();
  });
});
