import {
  buildMessage,
  isInt,
  isNumber,
  min,
  ValidateBy,
  ValidationArguments,
  ValidationOptions
} from "class-validator";

export const IS_POSITIVE_INT = "isPositiveInt";

/**
 * @name IsPositiveInt
 * @decorate
 * @description Checks is value positive integer.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsPositiveInt(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_POSITIVE_INT,
      validator: {
        validate(value: unknown, args?: ValidationArguments): boolean {
          if (!isNumber(value, { allowInfinity: false, allowNaN: false })) {
            return false;
          }
          if (!min(value, 1)) {
            return false;
          }
          if (!isInt(value)) {
            return false;
          }
          return true;
        },
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + "$property must be a positive integer",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
