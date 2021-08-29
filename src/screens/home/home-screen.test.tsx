import {fireEvent, render} from '@testing-library/react-native';
import {mockedNavigate, Screen} from '@tests';
import React from 'react';
import {HomeScreen} from './home-screen';

describe('Home Screen', () => {
  describe('Given I am at Home Screen', () => {
    test('Then I should see Monster Levels button', () => {
      const {getByText} = render(
        <Screen
          component={HomeScreen.Component}
          options={HomeScreen.options}
        />,
      );
      expect(getByText('Monster Levels')).toBeDefined();
    });

    test('When I press Monster Levels Button, Then I should see Monster Levels Screen', async () => {
      const {getByText} = render(
        <Screen
          component={HomeScreen.Component}
          options={HomeScreen.options}
        />,
      );
      fireEvent.press(getByText('Monster Levels'));
      expect(mockedNavigate).toHaveBeenCalledTimes(1);
      expect(mockedNavigate).toBeCalledWith('MonsterLevels');
    });
  });
});
