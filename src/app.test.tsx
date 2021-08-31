import {MockedProvider} from '@apollo/client/testing';
import {mockedOnAuthStateChanged} from '@mocks';
import {render} from '@testing-library/react-native';
import React from 'react';
import {App} from './app';

jest.mock('@api', () => ({
  ...jest.requireActual('@api'),
  ApiProvider: ({children}: any) => <MockedProvider>{children}</MockedProvider>,
}));

describe('App', () => {
  it('Scenario: User is logged in', () => {
    const {getByText} = render(<App />);
    expect(getByText('Home')).toBeDefined();
  });

  it('Scenario: User is logged out', () => {
    mockedOnAuthStateChanged.mockImplementation(cb => cb(null));
    const {getByTestId} = render(<App />);
    expect(getByTestId('LoginScreen')).toBeDefined();
  });
});
