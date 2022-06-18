"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotBlankString = void 0;
const class_validator_1 = require("class-validator");
function IsNotBlankString(validationOptions) {
  return function IsNotBlankStringDecorator(target, propertyKey) {
    (0, class_validator_1.registerDecorator)({
      async: false,
      constraints: [],
      name: "IsNotBlankString",
      options: validationOptions,
      propertyName: propertyKey,
      target: target.constructor,
      validator: {
        defaultMessage: (validationArguments) => {
          return `[${validationArguments.property}] should not be a blank string`;
        },
        validate: (value) => {
          return (0, class_validator_1.isString)(value) && (0, class_validator_1.isNotEmpty)(value.trim());
        },
      },
    });
  };
}
exports.IsNotBlankString = IsNotBlankString;
