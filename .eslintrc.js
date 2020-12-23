module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    /** Only single quotes are allowed */
    'quotes': ['error', 'single'],
    
    /** Multiple empty lines are fine, increase readability. */
    'no-multiple-empty-lines': 'off',
    
    /** 
     * Disabled for testing at least for now.
     * https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/
     * 
     * TBD: Only explicit named exports, but what would be the naming convention?
     *    'CounterComponent' for React component and exported as 'Counter' with Redux?
     *    'Counter' for React component and exported as 'CounterConnected' with Redux?
     */
    'import/no-named-as-default': 'off',
    
    /** Disable to increase readability */
    'react/jsx-one-expression-per-line': 'off',
    
    /** This how it makes a sense to me */
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, minProperties: 3 },
      ObjectPattern: 'never',
      ImportDeclaration: { multiline: true, minProperties: 5 },
      ExportDeclaration: { multiline: true, minProperties: 2 },
    }],
  },
  overrides: [
    {
      files: ['**/*.spec.ts'],
      rules: {
        'jest/no-export': 'off',
        'jest/expect-expect': 'off',
      },
    },
  ],
};