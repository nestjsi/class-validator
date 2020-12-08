import {
  //
  buildMessage,
  maxLength,
  minLength,
  ValidateBy,
  ValidationOptions,
} from "class-validator";

export const MIN_MAX_LENGTH = "MinMaxLength";

/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function MinMaxLength(min: number, max: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [min, max],
      name: MIN_MAX_LENGTH,
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix + "$property must be longer than $constraint1 characters or equal to $constraint2 characters",
          validationOptions,
        ),
        validate: (value, args): boolean => {
          if (!minLength(value, args.constraints[0])) {
            return false;
          }
          if (!maxLength(value, args.constraints[1])) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
