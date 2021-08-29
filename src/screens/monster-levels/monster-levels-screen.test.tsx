import {render} from '@testing-library/react-native';
import {Screen} from '@tests';
import React from 'react';
import {MonsterLevelsScreen} from './monster-levels-screen';

describe('Monster Levels Screen', () => {
  describe('Given I am at Monster Levels Screen', () => {
    test('Then I should see Screen', () => {
      const screen = render(
        <Screen
          component={MonsterLevelsScreen.Component}
          options={MonsterLevelsScreen.options}
        />,
      );
      expect(screen).toBeDefined();
    });
  });
});
