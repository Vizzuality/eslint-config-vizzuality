# eslint-config-vizzuality

This package provides Vizzuality's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

## Install

Unsing npm:

```bash
npx install-peerdeps --dev eslint-config-vizzuality
npm install --save-dev eslint-config-vizzuality
```

Using yarn:

```bash
yarn add eslint@4.19.1 \
  eslint-config-vizzuality@latest \
  eslint-config-airbnb@17.0.0 \
  eslint-config-prettier@2.9.0 \
  eslint-plugin-import@2.12.0 \
  eslint-plugin-jsx-a11y@6.0.3 \
  eslint-plugin-react@7.9.1 \
  eslint-plugin-prettier@2.6.2 \
  --dev
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
