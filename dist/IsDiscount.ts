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

export const IS_DISCOUNT = "IsDiscount";

/**
 * Checks if a value is in a range of values with two decimal places.
 */
export function IsDiscount(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [0.01, 99.99],
      name: IS_DISCOUNT,
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
          if (!min(value, args.constraints[0])) {
            return false;
          }
          if (!max(value, args.constraints[1])) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
