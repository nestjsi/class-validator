import { ValidationOptions } from "class-validator";
import ValidatorJS from "validator";

/**
 * @name FixedLength
 * @decorate
 * @description Checks if the string's length is not less or more than given number. Removes whitespace from both ends of a string. If given value is not a string, then it returns false.
 * @param {number} fixedLength The minimum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export function FixedLength(fixedLength: number, validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name InRange
 * @decorate
 * @description Checks if a value is in a range of values.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {number=} maxDecimalPlaces Max decimal places
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function InRange(
  minValue: number,
  maxValue: number,
  maxDecimalPlaces?: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator;

/**
 * @name IsDiscount
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsDiscount(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsEmailTidy
 * @decorate
 * @description Checks if the string is an email. If given value is not a string, then it returns false.
 * @param {ValidatorJS.IsEmailOptions=} options Is EMail options: allow_ip_domain, allow_utf8_local_part, domain_specific_validation, ignore_max_length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsEmailTidy(
  options?: ValidatorJS.IsEmailOptions,
  validationOptions?: ValidationOptions,
): PropertyDecorator;

/**
 * @name IsHTMLFree
 * @decorate
 * @description Checks if the string has HTML tags.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsHTMLFree(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsNotBlankString
 * @decorate
 * @description Checks if there is at least one character in the string. Removes whitespace from both ends of a string. If the given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export function IsNotBlankString(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsNotEmptyString
 * @decorate
 * @description Checks if there is at least one character in the string. Considers the line is not empty even if it has trimmable characters. If the given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export function IsNotEmptyString(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsNotNull
 * @decorate
 * @description Checks if given value is not null.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export function IsNotNull(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsPositiveInt
 * @decorate
 * @description Checks is value positive integer.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsPositiveInt(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsPrice
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsPrice(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsSingleLine
 * @decorate
 * @description Checks if there are line breaks in the text.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsSingleLine(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsStringDate
 * @decorate
 * @description Is string in 'YYYY-MM-DD' format.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsStringDate(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsUUID4
 * @decorate
 * @description Checks if the string is a UUID version 4. If given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsUUID4(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name MinMax
 * @decorate
 * @description Checks if a value is in a range of values.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function MinMax(minValue: number, maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name MinMaxInt
 * @decorate
 * @description Checks is value between two integers inclusive.
 * @param {number} minimumInteger Minimum allowed integer
 * @param {number} maximumInteger Maximum allowed integer
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function MinMaxInt(
  minimumInteger: number,
  maximumInteger: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator;

/**
 * @name MinMaxLength
 * @decorate
 * @description Checks if the string's length is not more and less than given numbers. If given value is not a string, then it returns false. Note: this function takes into account surrogate pairs.
 * @param {number} minLen The minimum length
 * @param {number} maxLen The maximum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function MinMaxLength(minLen: number, maxLen: number, validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name MinMaxPct
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function MinMaxPct(minValue: number, maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name Money
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {number=} [maxValue=562949953421311] The maximum value
 * @param {number=} [minValue=0.01] The minimum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.4
 */
export function Money(maxValue?: number, minValue?: number, validationOptions?: ValidationOptions): PropertyDecorator;

export const IS_STRING_DATE_PATTERN: "^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$";

export const IS_STRING_TIME_OF_DAY: "(?:[01]d|2[0123]):(?:[012345]d)";

export const MAX_SAFE_FLOAT: 562949953421311;
