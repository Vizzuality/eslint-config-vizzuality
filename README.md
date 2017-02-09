# eslint-config-vizzuality

This package provides Vizzuality's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

Install:

```bash
npm install --save-dev eslint-config-vizzuality
```

Add `"extends": "vizzuality"` to your .eslintrc

Example of `.eslint.json`:

```json
{
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "globals": {
    "config": true,
    "Stats": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "extends": [
    "vizzuality"
  ],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "config/webpack.config.js"
      }
    }
  }
}
```
