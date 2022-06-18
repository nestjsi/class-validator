import { buildMessage, isInt, max, min, ValidateBy } from "class-validator";

import type { ValidationArguments, ValidationOptions } from "class-validator";

/**
 * @name InRangeInt
 * @decorate
 * @description Checks if a value is in a range of integer values.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.5
 */
export function InRangeInt(
  minValue: number,
  maxValue: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [minValue, maxValue],
      name: "InRangeInt",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            "'$property' must be an integer, not be less than $constraint1, not be greater than $constraint2..",
          validationOptions,
        ),
        validate(value: unknown, args?: ValidationArguments): boolean {
          if (!isInt(value)) {
            return false;
          }
          if (!isInt(args!.constraints[0])) {
            return false;
          }
          if (!isInt(args!.constraints[1])) {
            return false;
          }
          if (!min(value, args!.constraints[0])) {
            return false;
          }
          if (!max(value, args!.constraints[1])) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
