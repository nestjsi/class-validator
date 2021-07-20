import {
  //
  registerDecorator,
  ValidationOptions,
} from "class-validator";

/**
 * @name IsSingleLine
 * @decorate
 * @description Checks if there are line breaks in the text.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsSingleLine(validationOptions?: ValidationOptions) {
  return function ClassValidatorCustomIsSingleLine(object: Object, propertyName: string): void {
    registerDecorator({
      constraints: [],
      name: "IsSingleLine",
      options: {
        message: "The text should be a single line",
        ...validationOptions,
      },
      propertyName,
      target: object.constructor,
      validator: {
        validate(value: unknown): boolean {
          return typeof value === "string" && /\r?\n|\r/g.test(value);
        },
      },
    });
  };
}
