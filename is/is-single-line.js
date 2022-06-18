"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSingleLine = void 0;
const class_validator_1 = require("class-validator");
function IsSingleLine(validationOptions) {
  return function ClassValidatorCustomIsSingleLine(object, propertyKey) {
    (0, class_validator_1.registerDecorator)({
      async: false,
      constraints: [],
      name: "IsSingleLine",
      options: {
        message: "The text should be a single line",
        ...validationOptions,
      },
      propertyName: propertyKey,
      target: object.constructor,
      validator: {
        validate(value) {
          return typeof value === "string" && /\r?\n|\r/g.test(value);
        },
      },
    });
  };
}
exports.IsSingleLine = IsSingleLine;
