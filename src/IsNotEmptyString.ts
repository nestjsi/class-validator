import { isNotEmpty, isString, registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

/**
 * @name IsNotEmptyString
 * @decorate
 * @description Checks if there is at least one character in the string. Considers the line is not empty even if it has trimmable characters. If the given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export function IsNotEmptyString(validationOptions?: ValidationOptions): PropertyDecorator {
  return function IsNotEmptyStringDecorator(target: Object, propertyKey: string | symbol): void {
    registerDecorator({
      async: false,
      constraints: [],
      name: "IsNotEmptyString",
      options: validationOptions,
      propertyName: propertyKey as string,
      target: target.constructor,
      validator: {
        defaultMessage: (validationArguments?: ValidationArguments): string => {
          return `[${validationArguments!.property}] should not be an empty string`;
        },
        validate: (value: any): boolean => {
          return isString(value) && isNotEmpty(value);
        },
      },
    });
  };
}
