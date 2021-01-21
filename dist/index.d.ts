import { ValidationOptions } from "class-validator";
import ValidatorJS from "validator";

export const IN_RANGE = "InRange";
/**
 * Checks if a value is in a range of values.
 */
export function InRange(
  minValue: number,
  maxValue: number,
  maxDecimalPlaces?: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator;
export const IS_DISCOUNT = "IsDiscount";
/**
 * Checks if a value is in a range of values with two decimal places.
 */
export function IsDiscount(validationOptions?: ValidationOptions): PropertyDecorator;
export const IS_EMAIL_TIDY = "isEmailTidy";
/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 */
export function IsEmailTidy(
  options?: ValidatorJS.IsEmailOptions,
  validationOptions?: ValidationOptions,
): PropertyDecorator;

export const IS_PRICE = "IsPrice";
/**
 * Checks if a value is in a range of values with two decimal places.
 */
export function IsPrice(validationOptions?: ValidationOptions): PropertyDecorator;

export function IsStringDate(validationOptions?: ValidationOptions): PropertyDecorator;

export function IsSingleLine(validationOptions?: ValidationOptions): PropertyDecorator;

export const IS_UUID_4 = "isUUID4";
/**
 * Checks if the string is a UUID version 4.
 * If given value is not a string, then it returns false.
 */
export function IsUUID4(validationOptions?: ValidationOptions): PropertyDecorator;

export const MIN_MAX = "MinMax";
/**
 * Checks if a value is in a range of values.
 */
export function MinMax(minValue: number, maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator;

export const MIN_MAX_INT = "MinMaxInt";
/**
 * Checks if a value is in a range of integer values.
 */
/**
 * @name MinMaxInt
 * @decorate
 * @description Checks is value between two integers inclusive
 * @param {Number} minimumInteger - Minimum allowed integer
 * @param {Number} maximumInteger - Maximum allowed integer
 * @param {Object=} validationOptions
 * @constructor
 */
export function MinMaxInt(
  minimumInteger: number,
  maximumInteger: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator;

export const MIN_MAX_LENGTH = "MinMaxLength";
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function MinMaxLength(min: number, max: number, validationOptions?: ValidationOptions): PropertyDecorator;

export const MIN_MAX_PCT = "MinMaxPct";
/**
 * Checks if a value is in a range of values with two decimal places.
 */
export function MinMaxPct(minValue: number, maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator;

export const IS_STRING_DATE_PATTERN: "^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$";
export const IS_STRING_TIME_OF_DAY: "(?:[01]d|2[0123]):(?:[012345]d)";
