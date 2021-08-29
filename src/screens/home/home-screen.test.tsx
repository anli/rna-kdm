import {render} from '@testing-library/react-native';
import React from 'react';
import {HomeScreen} from './home-screen';

describe('Home Screen', () => {
  describe('Given I am at Home Screen', () => {
    test('Then I should see Monster Levels button', () => {
      const {getByText} = render(<HomeScreen.Component />);
      expect(getByText('Monster Levels')).toBeDefined();
    });
  });
});
