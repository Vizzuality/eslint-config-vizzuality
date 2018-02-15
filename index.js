module.exports = {
  extends: [
    'airbnb'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [2, {
      commonjs: true,
      amd: true
    }],
    'jsx-a11y/anchor-is-valid': 2,
    'no-console': ['error', {
      'allow': ['warn', 'error', 'info']
    }],
    'no-plusplus': ['error', {
      'allowForLoopAfterthoughts': true
    }],
    'react/prefer-stateless-function': [true, {
      'ignorePureComponents': true
    }],
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx']
    }]
  }
};
