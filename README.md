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
yarn add eslint@5.7.0 \
  eslint-config-airbnb@17.1.0 \
  eslint-plugin-import@2.14.0 \
  eslint-plugin-jsx-a11y@6.1.1 \
  eslint-plugin-react@7.11.0 \
  eslint-config-vizzuality@latest \
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

Add script to in your `package.json`:

```json
{
  "scripts": {
    ...
    "lint": "eslint --ext .js --ext .jsx ."
  }
}
```

And execute eslint running:

```bash
yarn lint
```

## Recommendations

### Pre-commit hooks

As a good practice running eslint only in git staged files using (lint-staged)[https://github.com/okonet/lint-staged] will have quicker analysis and ensure quality in each commit.

And it is as easy as install the dependency:

```bash
npm install lint-staged
```

or

```bash
yarn add lint-staged
```

And add the following code to the `package.json`:

```json
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "**/*.js": [
      "eslint --quiet --fix",
      "git add"
    ]
  },
```
