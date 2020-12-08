import {
  //
  buildMessage,
  isInt,
  isNumber,
  max,
  min,
  ValidateBy,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";

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
): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [minimumInteger, maximumInteger],
      name: MIN_MAX_INT,
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            "'$property' must be an integer, not be less than $constraint1, not be greater than $constraint2.",
          validationOptions,
        ),
        validate(value: unknown, args?: ValidationArguments): boolean {
          if (!isNumber(value, { allowInfinity: false, allowNaN: false })) {
            return false;
          }
          if (!min(value, args.constraints[0])) {
            return false;
          }
          if (!max(value, args.constraints[1])) {
            return false;
          }
          if (!isInt(value)) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
