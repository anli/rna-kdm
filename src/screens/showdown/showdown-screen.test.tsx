import {render} from '@testing-library/react-native';
import {Screen} from '@tests';
import React from 'react';
import {ShowdownScreen} from './showdown-screen';

describe('Showdown Screen', () => {
  it('Scenario: Screen is loaded', () => {
    const screen = render(
      <Screen
        component={ShowdownScreen.Component}
        options={ShowdownScreen.options}
      />,
    );
    expect(screen).toBeDefined();
  });
});
