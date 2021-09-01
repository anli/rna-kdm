import {
  mockedNavigate,
  mockedOnAuthStateChanged,
  mockedSignOut,
  settlement,
  settlements,
  user,
} from '@mocks';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Screen} from '@tests';
import React from 'react';
import {HomeScreen} from './home-screen';
import {mocks} from './home-screen.mocks';

describe('Home Screen', () => {
  beforeEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
    mockedOnAuthStateChanged.mockImplementation(cb => cb(user));
  });

  afterEach(() => {
    jest.useFakeTimers();
  });

  it('Scenario: Press Monster Levels Button', async () => {
    const {getByText, findByText} = render(
      <Screen
        mocks={mocks}
        component={HomeScreen.Component}
        options={HomeScreen.options}
      />,
    );
    expect(await findByText(settlements[0].name)).toBeDefined();

    fireEvent.press(getByText('Monster Levels'));

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toBeCalledWith('MonsterLevels');
  });

  it('Scenario: Press Logout Button', async () => {
    const {getByText, findByText} = render(
      <Screen
        mocks={mocks}
        component={HomeScreen.Component}
        options={HomeScreen.options}
      />,
    );
    expect(await findByText(settlements[0].name)).toBeDefined();

    fireEvent.press(getByText('Logout'));

    expect(mockedSignOut).toHaveBeenCalledTimes(1);
  });

  it('Scenario: Press create settlement', async () => {
    const {getByText, findByText} = render(
      <Screen
        mocks={mocks}
        component={HomeScreen.Component}
        options={HomeScreen.options}
      />,
    );
    expect(await findByText(settlements[0].name)).toBeDefined();

    fireEvent.press(getByText('Start New Campaign'));

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledTimes(1));
    expect(mockedNavigate).toBeCalledWith('Settlement', {
      settlementId: settlement.id,
    });
  });

  it('Scenario: Press existing settlement', async () => {
    const {findByText, getByText} = render(
      <Screen
        mocks={mocks}
        component={HomeScreen.Component}
        options={HomeScreen.options}
      />,
    );

    expect(await findByText(settlements[0].name)).toBeDefined();
    fireEvent.press(getByText(settlements[0].name));

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toBeCalledWith('Settlement', {
      settlementId: settlements[0].id,
    });
  });
});
