import {
  //
  buildMessage,
  isNumber,
  max,
  min,
  ValidateBy,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";

export const MAX_SAFE_FLOAT = 562949953421311 as const;

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
export function Money(
  maxValue: number = MAX_SAFE_FLOAT,
  minValue: number = 0.01,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [minValue, maxValue],
      name: "Money",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.",
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
