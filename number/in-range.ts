import { buildMessage, isNumber, max, min, ValidateBy } from "class-validator";

import type { ValidationArguments, ValidationOptions } from "class-validator";

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
): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [minValue, maxValue, maxDecimalPlaces],
      name: "InRange",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have $constraint3 max decimal places.",
          validationOptions,
        ),
        validate(value: unknown, args?: ValidationArguments): boolean {
          if (!isNumber(value, { allowInfinity: false, allowNaN: false })) {
            return false;
          }
          if (!min(value, args!.constraints[0])) {
            return false;
          }
          if (!max(value, args!.constraints[1])) {
            return false;
          }
          if (!isNumber(value, { maxDecimalPlaces: args!.constraints[2] })) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
