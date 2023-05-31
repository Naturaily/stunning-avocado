# @natu/jest-config

The package contains [jest](https://jestjs.io/) + [RTL](https://testing-library.com/) settings that can be imported into other packages.

## 🎯 Getting Started

1. Create file `jest.config.js` in your package and import default settings from `@natu/jest-config/jest-next`

```js
module.exports = {
  ...require('@natu/jest-config/jest-next'),
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
};
```

2. Add the appropriate scripts to your `packake.json`

```json
// packake.json

{
  "name": "my-package",
  "version": "0.0.0",
  "private": true,
  "main": "./index.ts",
  "types": "./index.ts",
  "license": "MIT",
  "files": ["index.ts"],
  "scripts": {
    "test": "jest test",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci",
    "test:watch": "jest --watch"
  }
}
```

3. Create test in you package and run the appropriate command.

```bash
  yarn test
```

The `coverage` folder will be generated along with your `package.json` file.

```bash
  yarn test:coverage
```

```bash
  yarn test:ci
```

```bash
  yarn test:watch
```

These scripts are included in the `turbo.json` file and will be cached accordingly
