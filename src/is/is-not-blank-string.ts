import { isNotEmpty, isString, registerDecorator } from "class-validator";

import type { ValidationArguments, ValidationOptions } from "class-validator";

/**
 * @name IsNotBlankString
 * @decorate
 * @description Checks if there is at least one character in the string. Removes whitespace from both ends of a string. If the given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export function IsNotBlankString(validationOptions?: ValidationOptions): PropertyDecorator {
  return function IsNotBlankStringDecorator(target: Object, propertyKey: string | symbol): void {
    registerDecorator({
      async: false,
      constraints: [],
      name: "IsNotBlankString",
      options: validationOptions,
      propertyName: propertyKey as string,
      target: target.constructor,
      validator: {
        defaultMessage: (validationArguments?: ValidationArguments): string => {
          return `[${validationArguments!.property}] should not be a blank string`;
        },
        validate: (value: any): boolean => {
          return isString(value) && isNotEmpty(value.trim());
        },
      },
    });
  };
}
