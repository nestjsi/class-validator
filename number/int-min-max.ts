import { buildMessage, isInt, isNumber, max, min, ValidateBy } from "class-validator";

import type { ValidationArguments, ValidationOptions } from "class-validator";

/**
 * @name IntMinMax
 * @decorate
 * @description Checks is value between two integers inclusive.
 * @summary ```import { IntMinMax } from "@nestjsi/class-validator/number/int-min-max";```
 * @param {number} minimumInteger Minimum allowed integer
 * @param {number} maximumInteger Maximum allowed integer
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
export function IntMinMax(
  minimumInteger: number,
  maximumInteger: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [minimumInteger, maximumInteger],
      name: "IntMinMax",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            `${eachPrefix}'$property' must be an integer, not be less than $constraint1, not be greater than $constraint2.`,
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
