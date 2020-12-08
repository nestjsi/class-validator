"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDiscount = exports.IS_DISCOUNT = void 0;
var class_validator_1 = require("class-validator");
exports.IS_DISCOUNT = "IsDiscount";
/**
 * Checks if a value is in a range of values with two decimal places.
 */
function IsDiscount(validationOptions) {
    return class_validator_1.ValidateBy({
        constraints: [0.01, 99.99],
        name: exports.IS_DISCOUNT,
        validator: {
            defaultMessage: class_validator_1.buildMessage(function (eachPrefix) {
                return eachPrefix +
                    "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.";
            }, validationOptions),
            validate: function (value, args) {
                if (!class_validator_1.isNumber(value, { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })) {
                    return false;
                }
                if (!class_validator_1.min(value, args.constraints[0])) {
                    return false;
                }
                if (!class_validator_1.max(value, args.constraints[1])) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
exports.IsDiscount = IsDiscount;
