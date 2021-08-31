import {render} from '@testing-library/react-native';
import {Screen} from '@tests';
import React from 'react';
import {SettlementCreateScreen} from './settlement-create-screen';

describe('Settlement Create Screen', () => {
  it('Scenario: screen is loaded', async () => {
    const screen = render(
      <Screen
        component={SettlementCreateScreen.Component}
        options={SettlementCreateScreen.options}
      />,
    );
    expect(screen).toBeDefined();
  });
});
