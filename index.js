module.exports = {
  extends: [
    'airbnb',
    'prettier'
  ],
  rules: {
    'comma-dangle': ['error', 'only-multine'],
    'function-paren-newline': ['error', 'consistent'],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'object-curly-newline': ['error', { multiline: true }],
    'import/extensions': ['error', { js: 'never', jsx: 'never' }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'import/no-unresolved': ['error', {
      commonjs: true,
      amd: true,
      caseSensitive: true,
    }],
    'jsx-a11y/anchor-is-valid': 'error',
    'react/forbid-prop-types': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
  }
};
