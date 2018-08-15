// @flow

module.exports = {
  testMatch: ['**/__tests__/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/*', '<rootDir>/lib/*', '<rootDir>/dist/*'],
  setupTestFrameworkScriptFile: './setup-jest.js',
  transform: {
    '\\.js$': 'babel-jest',
  },
  verbose: true,
  moduleNameMapper: {},
};
