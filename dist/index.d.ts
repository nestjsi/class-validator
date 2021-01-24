import { ValidationOptions } from "class-validator";
import ValidatorJS from "validator";

/**
 * @name InRange
 * @decorate
 * @description Checks if a value is in a range of values.
 * @param {Number} minValue The minimum value
 * @param {Number} maxValue The maximum value
 * @param {Number=} maxDecimalPlaces Max decimal places
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
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
 * @returns {Function}
 */
export function IsDiscount(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsEmailTidy
 * @decorate
 * @description Checks if the string is an email. If given value is not a string, then it returns false.
 * @param {ValidatorJS.IsEmailOptions=} options Is EMail options: allow_ip_domain, allow_utf8_local_part, domain_specific_validation, ignore_max_length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function IsEmailTidy(
  options?: ValidatorJS.IsEmailOptions,
  validationOptions?: ValidationOptions,
): PropertyDecorator;

/**
 * @name isHTMLFree
 * @decorate
 * @description Checks if the string has HTML tags.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function isHTMLFree(
  validationOptions?: ValidationOptions,
): PropertyDecorator;

/**
 * @name IsPrice
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function IsPrice(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsSingleLine
 * @decorate
 * @description Checks if there are line breaks in the text.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function IsSingleLine(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsStringDate
 * @decorate
 * @description Is string in 'YYYY-MM-DD' format.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function IsStringDate(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name IsUUID4
 * @decorate
 * @description Checks if the string is a UUID version 4. If given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function IsUUID4(validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name MinMax
 * @decorate
 * @description Checks if a value is in a range of values.
 * @param {Number} minValue The minimum value
 * @param {Number} maxValue The maximum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function MinMax(minValue: number, maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name MinMaxInt
 * @decorate
 * @description Checks is value between two integers inclusive
 * @param {Number} minimumInteger Minimum allowed integer
 * @param {Number} maximumInteger Maximum allowed integer
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function MinMaxInt(
  minimumInteger: number,
  maximumInteger: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator;

/**
 * @name MinMaxLength
 * @decorate
 * @description Checks if the string's length is not less than given number. If given value is not a string, then it returns false. Note: this function takes into account surrogate pairs.
 * @param {Number} minLen The minimum length
 * @param {Number} maxLen The maximum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function MinMaxLength(minLen: number, maxLen: number, validationOptions?: ValidationOptions): PropertyDecorator;

/**
 * @name MinMaxPct
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {Number} minValue The minimum value
 * @param {Number} maxValue The maximum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function MinMaxPct(minValue: number, maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator;

export const IS_STRING_DATE_PATTERN: "^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$";

export const IS_STRING_TIME_OF_DAY: "(?:[01]d|2[0123]):(?:[012345]d)";
