import { registerDecorator } from "class-validator";

import type { ValidationOptions } from "class-validator";

/**
 * @name IsSingleLine
 * @decorate
 * @description Checks if there are line breaks in the text.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsSingleLine(validationOptions?: ValidationOptions): PropertyDecorator {
  return function ClassValidatorCustomIsSingleLine(object: Object, propertyKey: string | symbol): void {
    registerDecorator({
      async: false,
      constraints: [],
      name: "IsSingleLine",
      options: {
        message: "The text should be a single line",
        ...validationOptions,
      },
      propertyName: propertyKey as string,
      target: object.constructor,
      validator: {
        validate(value: unknown): boolean {
          return typeof value === "string" && /\r?\n|\r/g.test(value);
        },
      },
    });
  };
}
