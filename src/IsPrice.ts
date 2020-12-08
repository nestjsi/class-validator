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

export const IS_PRICE = "IsPrice";

/**
 * Checks if a value is in a range of values with two decimal places.
 */
export function IsPrice(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [0.01, 70_368_744_177_663.99],
      name: IS_PRICE,
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
