import {mockedOnAuthStateChanged, mockedSignOut} from '@mocks';
import {fireEvent, render} from '@testing-library/react-native';
import {mockedNavigate, Screen} from '@tests';
import faker from 'faker';
import React from 'react';
import {HomeScreen} from './home-screen';
import {HomeScreenDocument} from './home-screen.generated';

const settlements = Array.from({length: 1}, () => {
  return {
    __typename: 'Settlement',
    id: faker.datatype.uuid(),
    name: faker.lorem.word(),
  };
});

const user = {
  uid: faker.datatype.uuid(),
};

const mocks = [
  {
    request: {
      query: HomeScreenDocument,
      variables: {
        userId: user.uid,
      },
    },
    result: {
      data: {
        player: {
          settlements,
        },
      },
    },
  },
];

describe('Home Screen', () => {
  beforeEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useFakeTimers();
  });

  it('Scenario: Press Monster Levels Button', async () => {
    const {getByText} = render(
      <Screen component={HomeScreen.Component} options={HomeScreen.options} />,
    );
    fireEvent.press(getByText('Monster Levels'));
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toBeCalledWith('MonsterLevels');
  });

  it('Scenario: Press Logout Button', async () => {
    const {getByText} = render(
      <Screen component={HomeScreen.Component} options={HomeScreen.options} />,
    );
    fireEvent.press(getByText('Logout'));
    expect(mockedSignOut).toHaveBeenCalledTimes(1);
  });

  it('Scenario: Press create settlement', async () => {
    1;
    const {getByText} = render(
      <Screen component={HomeScreen.Component} options={HomeScreen.options} />,
    );
    fireEvent.press(getByText('Create Settlement'));
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toBeCalledWith('SettlementCreate');
  });

  it('Scenario: Press existing settlement', async () => {
    mockedOnAuthStateChanged.mockImplementation(cb => cb(user));
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
