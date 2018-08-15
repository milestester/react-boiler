// @flow

import App from '../App';

describe('App', () => {
  test('renders correctly', () => {
    expect(App).toMatchSnapshot();
  });
});
