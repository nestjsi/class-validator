import { isNotEmpty, isString, registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

/**
 * @name IsNotNull
 * @decorate
 * @description Checks if given value is not null.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export function IsNotNull(validationOptions?: ValidationOptions): PropertyDecorator {
  return function IsNotNullDecorator(target: Object, propertyKey: string | symbol): void {
    registerDecorator({
      async: false,
      constraints: [],
      name: "IsNotNull",
      options: validationOptions,
      propertyName: propertyKey as string,
      target: target.constructor,
      validator: {
        defaultMessage: (validationArguments?: ValidationArguments): string => {
          return `[${validationArguments!.property}] should not be null`;
        },
        validate: (value: any): boolean => {
          return isString(value) && isNotEmpty(value);
        },
      },
    });
  };
}
