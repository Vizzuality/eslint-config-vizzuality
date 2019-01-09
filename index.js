module.exports = {
  extends: [
    'airbnb'
  ],
  rules: {
    'comma-dangle': [2, 'only-multiline'],
    'function-paren-newline': [2, 'consistent'],
    'no-console': [2, { allow: ['warn', 'error', 'info'] }],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'object-curly-newline': [2, { consistent: true }],
    'import/extensions': [2, 'ignorePackages', { js: 'never', jsx: 'never' }],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'import/no-unresolved': [2, {
      commonjs: true,
      amd: true,
      caseSensitive: true,
    }],
    'jsx-a11y/anchor-is-valid': 2,
    'react/forbid-prop-types': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': [true, { allow: 'single-child' }],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
  }
};
