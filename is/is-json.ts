import { buildMessage, isBoolean, isNumber, isString, ValidateBy } from "class-validator";

import type { ValidationOptions } from "class-validator";

/**
 * @name IsJSON
 * @decorate
 * @description Checks value to the possibility to be valid JSON.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators.
 * @returns {PropertyDecorator}
 * @since 0.2.2
 */
export function IsJSON(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [],
      name: "IsJSON",
      validator: {
        defaultMessage: buildMessage((eachPrefix) => eachPrefix + "$property must be a valid JSON", validationOptions),
        validate(value: unknown): boolean {
          if (value === undefined) {
            return false;
          }
          if (value === null) {
            return true;
          }
          if (isString(value)) {
            return true;
          }
          if (isBoolean(value)) {
            return true;
          }
          if (isNumber(value)) {
            return isNumber(value, { allowInfinity: false, allowNaN: false });
          }
          try {
            JSON.stringify(value);
            return true;
          } catch {
            return false;
          }
        },
      },
    },
    validationOptions,
  );
}
