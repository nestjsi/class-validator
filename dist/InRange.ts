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

export const IN_RANGE = "InRange";

/**
 * Checks if a value is in a range of values.
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
      name: IN_RANGE,
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
          if (!min(value, args.constraints[0])) {
            return false;
          }
          if (!max(value, args.constraints[1])) {
            return false;
          }
          if (!isNumber(value, { maxDecimalPlaces: args.constraints[2] })) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
