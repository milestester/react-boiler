const baseRules = {
  'no-plusplus': 'off',
  'default-case': 'off',
  'consistent-return': 'off',
  'class-methods-use-this': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'one-var': [
    'error',
    {
      initialized: 'never',
    },
  ],
  'one-var-declaration-per-line': ['error', 'initializations'],
  'no-confusing-arrow': 'off',
  'no-console': 'off',
  'arrow-parens': 'off',
  'object-curly-newline': 'off',
  'function-paren-newline': 'off',
  'import/prefer-default-export': 'off',
};

const reactRules = {
  'react/require-default-props': 'off',
  'react/jsx-filename-extension': [
    'error',
    {
      extensions: ['.js'],
    },
  ],
  'react/jsx-tag-spacing': [
    'error',
    {
      closingSlash: 'never',
      beforeSelfClosing: 'allow',
      afterOpening: 'never',
    },
  ],
  'react/jsx-uses-vars': 2,
  'arrow-parens': 'off',
  'no-unused-expressions': 'off',
  'react/jsx-uses-react': 2,
  'react/react-in-jsx-scope': 2,
};

module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['react', 'flowtype'],
  env: {
    browser: true,
    node: true,
  },
  rules: Object.assign({}, baseRules, reactRules),
  parser: 'babel-eslint',
  globals: {
    SyntheticEvent: true,
    describe: true,
    it: true,
    expect: true,
    jest: true,
    test: true,
    cy: true,
    Cypress: true,
    before: true,
    beforeAll: true,
    beforeEach: true,
    afterAll: true,
    afterEach: true,
  },
};
