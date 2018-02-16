module.exports = {
  extends: [
    'airbnb'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'import/extensions': 'never',
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [2, {
      commonjs: true,
      amd: true,
      caseSensitive: true
    }],
    'jsx-a11y/anchor-is-valid': 2,
    'no-console': ['error', {
      allow: ['warn', 'error', 'info']
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],
    'react/prefer-stateless-function': [true, {
      ignorePureComponents: true
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
    'react/forbid-prop-types': [true, {
      checkChildContextTypes: true
    }],
    'object-curly-newline': ['error', { multiline: true }]
  }
};
