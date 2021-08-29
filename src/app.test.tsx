import {render} from '@testing-library/react-native';
import React from 'react';
import {App} from './app';

jest.mock('@api', () => ({
  ...jest.requireActual('@api'),
  ApiProvider: ({children}: any) => <>{children}</>,
}));

describe('App', () => {
  it('App can load', () => {
    const {getByText} = render(<App />);
    expect(getByText('Home')).toBeDefined();
  });
});
