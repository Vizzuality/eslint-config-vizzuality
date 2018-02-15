# eslint-config-vizzuality

This package provides Vizzuality's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

Install:

```bash
npm install --save-dev eslint eslint-config-vizzuality
```

Add `"extends": "vizzuality"` to your .eslintrc

Example of `.eslintrc.json`:

```json
{
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "vizzuality"
  ]
}
```

Run eslint:

```bash
./node_modules/.bin/eslint --ext .js --ext .jsx .
```

Or add in your `package.json`:

```json
{
  "test": "./node_modules/.bin/eslint --ext .js --ext .jsx ."
}
```
