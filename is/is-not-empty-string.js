"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotEmptyString = void 0;
const class_validator_1 = require("class-validator");
function IsNotEmptyString(validationOptions) {
  return function IsNotEmptyStringDecorator(target, propertyKey) {
    (0, class_validator_1.registerDecorator)({
      async: false,
      constraints: [],
      name: "IsNotEmptyString",
      options: validationOptions,
      propertyName: propertyKey,
      target: target.constructor,
      validator: {
        defaultMessage: (validationArguments) => {
          return `[${validationArguments.property}] should not be an empty string`;
        },
        validate: (value) => {
          return (0, class_validator_1.isString)(value) && (0, class_validator_1.isNotEmpty)(value);
        },
      },
    });
  };
}
exports.IsNotEmptyString = IsNotEmptyString;
