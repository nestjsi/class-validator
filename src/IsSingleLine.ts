import {
  //
  registerDecorator,
  ValidationOptions,
} from "class-validator";

export function IsSingleLine(validationOptions?: ValidationOptions) {
  return function ClassValidatorCustomIsSingleLine(object: unknown, propertyName: string): void {
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
