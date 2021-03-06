import {
  //
  buildMessage,
  isUUID,
  ValidateBy,
  ValidationOptions,
} from "class-validator";

/**
 * @name IsUUID4
 * @decorate
 * @description Checks if the string is a UUID version 4. If given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function IsUUID4(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [],
      name: "IsUUID4",
      validator: {
        defaultMessage: buildMessage((eachPrefix) => eachPrefix + "$property must be an UUID", validationOptions),
        validate: (value): boolean => isUUID(value, 4),
      },
    },
    validationOptions,
  );
}
