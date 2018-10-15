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
  eslint-config-vizzuality@latest \
  eslint-config-airbnb@17.1.0 \
  eslint-config-prettier@2.9.0 \
  eslint-plugin-import@2.14.0 \
  eslint-plugin-jsx-a11y@6.1.1 \
  eslint-plugin-react@7.11.0 \
  eslint-plugin-prettier@2.6.2 \
  prettier@^0.11.0 \
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

## Recommendations

### Prettier

(Prettier)[https://github.com/prettier/prettier] is an opinionated code formatter that will enforces a consistent style by parsing your code and re-printing it with its own rules.

It is already installed with this package as a devDependency and to use it just run:

```bash
prettier --single-quote --write "{app,components}/**/*.js"
```

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
    "start": "styleguidist server",
    "build": "styleguidist build",
    "deploy": "yarn run build && gh-pages -d styleguide",
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "**/*.js": [
      "prettier --single-quote --write",
      "eslint --quiet --fix",
      "git add"
    ]
  },
```
