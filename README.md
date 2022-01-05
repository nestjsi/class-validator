![Class Validator](https://raw.githubusercontent.com/nestjsi/class-validator/main/.github/assets/logo_128.png?raw=true "Class Validator")

# Class Validator

[NestJS](https://github.com/nestjs/nest) specific additions for [TypeStack Class Validator](https://github.com/typestack/class-validator) and [ValidatorJS](https://github.com/validatorjs/validator.js).

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]

## Reference

### @FixedLength

Checks if the string's length is not less or more than given number.

```typescript
@FixedLength(
  fixedLength, // number
  validationOptions, // ValidationOptions
)
```

### @InRange

Checks if a value is in a range of values.

```typescript
@InRange(
  minValue, // number
  maxValue, // number
  maxDecimalPlaces, // number
  validationOptions, // ValidationOptions
)
```

### @IsDiscount

Checks if a value is in a range of values with two decimal places.

```typescript
@IsDiscount(
  validationOptions, // ValidationOptions
)
```

### @IsEmailTidy

Checks if the string is an email.

```typescript
@IsEmailTidy(
  options, // ValidatorJS.IsEmailOptions
  validationOptions, // ValidationOptions
)
```

### @IsHTMLFree

Checks if the string has HTML tags.

```typescript
@IsHTMLFree(
  validationOptions, // ValidationOptions
)
```

### @IsNotBlankString

Checks if there is at least one character in the string. Removes whitespace from both ends of a string.

```typescript
@IsNotBlankString(
  validationOptions, // ValidationOptions
)
```

### @IsNotEmptyString

Checks if there is at least one character in the string. Considers the line is not empty even if it has trimmable characters.

```typescript
@IsNotEmptyString(
  validationOptions, // ValidationOptions
)
```

### @IsNotNull

Checks if given value is not null.

```typescript
@IsNotNull(
  validationOptions, // ValidationOptions
)
```

### @IsPrice

Checks if a value is in a range of values with two decimal places.

```typescript
@IsPrice(
  validationOptions, // ValidationOptions
)
```

### @IsSingleLine

Checks if there are line breaks in the text.

```typescript
@IsSingleLine(
  validationOptions, // ValidationOptions
)
```

### @IsStringDate

Is string in 'YYYY-MM-DD' format.

```typescript
@IsStringDate(
  validationOptions, // ValidationOptions
)
```

### @IsUUID4

Checks if the string is a UUID version 4.

```typescript
@IsUUID4(
  validationOptions, // ValidationOptions
)
```

### @MinMax

Checks if a value is in a range of values.

```typescript
@MinMax(
  minValue, // number
  maxValue, // number
  validationOptions, // ValidationOptions
)
```

### @MinMaxInt

Checks is value between two integers inclusive.

```typescript
@MinMaxInt(
  minimumInteger, // number
  maximumInteger, // number
  validationOptions, // ValidationOptions
)
```

### @MinMaxLength

Checks if the string's length is not less than given number.

```typescript
@MinMaxLength(
  minLen, // number
  maxLen, // number
  validationOptions, // ValidationOptions
)
```

### @MinMaxPct

Checks if a value is in a range of values with two decimal places.

```typescript
@MinMaxPct(
  minValue, // number
  maxValue, // number
  validationOptions, // ValidationOptions
)
```

### @Money

Checks if a value is in a range of values with two decimal places.

```typescript
@MinMaxPct(
  maxValue, // number = 562949953421311
  minValue, // number = 0.01
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
