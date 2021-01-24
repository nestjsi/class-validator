import {
  //
  buildMessage,
  isString,
  ValidateBy,
  ValidationOptions,
} from "class-validator";

/**
 * @name isHTMLFree
 * @decorate
 * @description Checks if the string has HTML tags.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {Function}
 */
export function isHTMLFree(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [],
      name: "isHTMLFree",
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
