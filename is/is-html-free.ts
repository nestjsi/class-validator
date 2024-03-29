import { buildMessage, isString, ValidateBy } from "class-validator";

import type { ValidationOptions } from "class-validator";

/**
 * @name IsHTMLFree
 * @decorate
 * @description Checks if the string has HTML tags.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsHTMLFree(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [],
      name: "IsHTMLFree",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + "$property must be a string without HTML tags",
          validationOptions,
        ),
        validate(value: unknown): boolean {
          if (!isString(value)) {
            return false;
          }
          return /(<([^>]+)>)/g.test(value);
        },
      },
    },
    validationOptions,
  );
}
