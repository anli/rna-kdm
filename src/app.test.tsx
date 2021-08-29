import {render} from '@testing-library/react-native';
import React from 'react';
import {App} from './app';

jest.mock('@api', () => ({
  ...jest.requireActual('@api'),
  ApiProvider: ({children}: any) => <>{children}</>,
}));

describe('App', () => {
  it('Scenario: App can load', () => {
    const app = render(<App />);
    expect(app).toBeDefined();
  });
});
