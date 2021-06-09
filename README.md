![Class Validator](https://raw.githubusercontent.com/corefunc/nestjsi/class-validator/.github/assets/logo_128.png?raw=true "Class Validator")

# Class Validator

Additions for [typestack/class-validator](https://github.com/typestack/class-validator) and [validator.js](https://github.com/validatorjs/validator.js).

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]

## Reference

```typescript
// Checks if a value is in a range of values.
@InRange(
  minValue, // number
  maxValue, // number
  maxDecimalPlaces, // number
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks if a value is in a range of values with two decimal places.
@IsDiscount(
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks if the string is an email.
@IsEmailTidy(
  options, // ValidatorJS.IsEmailOptions
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks if the string has HTML tags.
@IsHTMLFree(
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks if a value is in a range of values with two decimal places.
@IsPrice(
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks if there are line breaks in the text.
@IsSingleLine(
  validationOptions, // ValidationOptions
)
```

```typescript
// Is string in 'YYYY-MM-DD' format.
@IsStringDate(
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks if the string is a UUID version 4.
@IsUUID4(
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks if a value is in a range of values.
@MinMax(
  minValue, // number
  maxValue, // number
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks is value between two integers inclusive.
@MinMaxInt(
  minimumInteger, // number
  maximumInteger, // number
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks if the string's length is not less than given number.
@MinMaxLength(
  minLen, // number
  maxLen, // number
  validationOptions, // ValidationOptions
)
```

```typescript
// Checks if a value is in a range of values with two decimal places.
@MinMaxPct(
  minValue, // number
  maxValue, // number
  validationOptions, // ValidationOptions
)
```

## See also

[💾 My other projects](https://r37r0m0d3l.icu/open_source_map)

<img alt="Open Source" src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">


<!-- Badges -->

[npm-version-url]: https://npmjs.com/package/@nestjsi/class-validator
[npm-version-img]: https://badgen.net/npm/v/@nestjsi/class-validator?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/@nestjsi/class-validator
[npm-downloads-img]: https://badgen.net/npm/dt/@nestjsi/class-validator?&icon=terminal&label=downloads&color=009688
[ts-url]: https://github.com/nestjsi/class-validator/blob/main/dist/index.d.ts
[ts-img]: https://badgen.net/npm/types/@nestjsi/class-validator?&icon=typescript&label=types&color=1E90FF