"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPrice = void 0;
const class_validator_1 = require("class-validator");
function IsPrice(validationOptions) {
  return (0, class_validator_1.ValidateBy)(
    {
      constraints: [0.01, 70368744177663.99],
      name: "IsPrice",
      validator: {
        defaultMessage: (0, class_validator_1.buildMessage)(
          (eachPrefix) =>
            eachPrefix +
            "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.",
          validationOptions,
        ),
        validate(value, args) {
          if (!(0, class_validator_1.isNumber)(value, { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })) {
            return false;
          }
          if (!(0, class_validator_1.min)(value, args.constraints[0])) {
            return false;
          }
          if (!(0, class_validator_1.max)(value, args.constraints[1])) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
exports.IsPrice = IsPrice;
