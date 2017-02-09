module.exports = {
  extends: [
    'airbnb'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'no-console': ['error', {
      'allow': ['warn', 'error', 'info']
    }]
  }
};
