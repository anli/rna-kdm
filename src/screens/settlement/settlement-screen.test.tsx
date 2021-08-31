import {render} from '@testing-library/react-native';
import {Screen} from '@tests';
import React from 'react';
import {SettlementScreen} from './settlement-screen';

describe('Settlement Screen', () => {
  it('Scenario: screen is loaded', async () => {
    const screen = render(
      <Screen
        component={SettlementScreen.Component}
        options={SettlementScreen.options}
      />,
    );
    expect(screen).toBeDefined();
  });
});
