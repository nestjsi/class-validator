import { buildMessage, isNumber, max, min, ValidateBy } from "class-validator";

import type { ValidationArguments, ValidationOptions } from "class-validator";

export const PRICE_MAX: number = 562949953421311 as const;

/**
 * @name CheckPrice
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @summary ```import { CheckPrice } from "@nestjsi/class-validator/check/check-price";```
 * @param {number=} [maxValue=562949953421311] The maximum value
 * @param {number=} [minValue=0.01] The minimum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
export function CheckPrice(
  maxValue: number = PRICE_MAX,
  minValue: number = 0.01,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [minValue, maxValue],
      name: "CheckPrice",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            `${eachPrefix}'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.`,
          validationOptions,
        ),
        validate(value: unknown, args?: ValidationArguments): boolean {
          if (!isNumber(value, { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })) {
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
