import {fireEvent, render} from '@testing-library/react-native';
import {mockedNavigate, Screen} from '@tests';
import React from 'react';
import {HomeScreen} from './home-screen';

describe('Home Screen', () => {
  it('Scenario: Press Monster Levels Button', async () => {
    const {getByText} = render(
      <Screen component={HomeScreen.Component} options={HomeScreen.options} />,
    );
    fireEvent.press(getByText('Monster Levels'));
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toBeCalledWith('MonsterLevels');
  });
});
