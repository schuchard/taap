# Type Assertion And Predicate (`Taap`)

A zero dependency Typescript type checking library that coerces unknown values.

<p align="center">
  <a href="#badge">
    <img alt="github-workflows" src="https://github.com/schuchard/taap/workflows/Release/badge.svg">
  </a>
  <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img alt="styled with prettier" src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg">
  </a>
</p>

<p align="center">
  <a href="https://bundlephobia.com/result?p=taap">
    <img alt="bundlephobia" src="https://img.shields.io/bundlephobia/minzip/taap">
  </a>
  <a href="https://www.npmjs.com/package/taap">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/taap/latest.svg">
  </a>
  <a href="https://www.npmjs.com/package/taap">
    <img alt="npm next version" src="https://img.shields.io/npm/v/taap/beta.svg">
  </a>
</p>

## 🛠 Getting Started

Install dependency:

```bash
npm i taap
```

Import methods:

```ts
import { isArray } from 'taap';

const maybeArray: unknown = [];

if (typeof maybeArray === 'array') {
  // typeof [] === 'object
} else if (isArray(maybeArray)) {
  maybeArray.push(1);
}
```

Optionally supply a return type:

```ts
import { isArray } from 'taap';

const maybeArray: unknown = [1, 2, 3];

if (isArray<number>(maybeArray)) {
  maybeArray.filter(x => x > 1);
}
```

## 🔭 Available Methods

Supports optional generic return type:

- `isArray()`
- `isObject()`
- `isFunction()`

Fixed return type:

- `isString()`
- `isDate()`
- `isRegExp()`
- `isBoolean()`
- `isNumber()`
- `isNull()`
- `isUndefined()`

Other:
- `getType()`