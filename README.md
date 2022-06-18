![Class Validator](https://raw.githubusercontent.com/nestjsi/class-validator/main/.github/assets/logo_128.png?raw=true "Class Validator")

# Class Validator

[NestJS](https://github.com/nestjs/nest) specific additions for [TypeStack Class Validator](https://github.com/typestack/class-validator) and [ValidatorJS](https://github.com/validatorjs/validator.js).

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]

## Reference

---
### IS
#### @IsDiscount
Checks if a value is in a range of values with two decimal places.
```typescript
class Class {
  @IsDiscount()
  public discount: number = 0.01; // 0.01 - 99.99
}
```
#### @IsEmailTidy
Checks if the string is an email.
```typescript
class Class {
  @IsEmailTidy({ allow_ip_domain: true })
  public email: string;
}
```
#### @IsHTMLFree
Checks if the string has HTML tags.
```typescript
class Class {
  @IsHTMLFree()
  public plainText: string = "No HTML tags.";
}
```
#### @IsNotBlankString
Checks if there is at least one character in the string. Removes whitespace from both ends of a string.
```typescript
class Class {
  @IsNotBlankString()
  public readableText: string = "I can read this.";
}
```
#### @IsNotEmptyString
Checks if there is at least one character in the string. Considers the line is not empty even if it has trimmable characters.
```typescript
class Class {
  @IsNotEmptyString()
  public anyFilledText: string = "\t";
}
```
#### @IsNotNull
Checks if given value is not null.
```typescript
class Class {
  @IsNotNull()
  public nonNullable: any = true;
}
```
#### @IsPrice
Checks if a value is in a range of values with two decimal places.
```typescript
class Class {
  @IsPrice()
  public price: number = 99.99;
}
```
#### @IsSingleLine
Checks if there are line breaks in the text.
```typescript
class Class {
  @IsSingleLine()
  public name: string = "John Doe";
}
```
#### @IsStringDate
Is string in 'YYYY-MM-DD' format.
```typescript
class Class {
  @IsStringDate()
  public yyyymmdd: string = "2099-12-31";
}
```
#### @IsUUID4
Checks if the string is a UUID version 4.
```typescript
class Class {
  @IsUUID4()
  public id: any = "5bfadf81-5f39-4034-8fb8-afd78f1241ff";
}
```
---
### NUMBER
#### @InRange
Checks if a value is in a range of values.
```typescript
class Class {
  @InRange(0.00, 100.00, 2)
  public percentage: number = 55.55;
}
```
#### @InRangeInt
Checks if a value is in a range of integer values.
```typescript
class Class {
  @InRange(0, 100)
  public percentage: number = 55;
}
```
#### @MinMax
Checks if a value is in a range of values.
```typescript
class Class {
  @MinMax(-100.0, 100.0)
  public percentage: number = -55.55;
}
```
#### @MinMaxInt
Checks is value between two integers inclusive.
```typescript
class Class {
  @MinMaxInt(0, 360)
  public angle: number = 90;
}
```
#### @MinMaxPct
Checks if a value is in a range of values with two decimal places.
```typescript
class Class {
  @MinMaxPct(0.0, 100.0)
  public charge: number = 55.55;
}
```
#### @Money
Checks if a value is in a range of values with two decimal places.
```typescript
class Class {
  @Money(562_949_953_421_311.00, 0.01)
  public price: number = 10.99;
}
```
---
### STRING
#### @FixedLength
Checks if the string's length is not less or more than given number.
```typescript
class Class {
  @FixedLength(2)
  public countryCode: string = "US";
}
```
#### @MinMaxLength
Checks if the string's length is not less than given number.
```typescript
class Class {
  @MinMaxLength(1, 255)
  public dictionary: string = "ADBCDEF";
}
```
---

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
