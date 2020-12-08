"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InRange = exports.IN_RANGE = void 0;
var class_validator_1 = require("class-validator");
exports.IN_RANGE = "InRange";
/**
 * Checks if a value is in a range of values.
 */
function InRange(minValue, maxValue, maxDecimalPlaces, validationOptions) {
    return class_validator_1.ValidateBy({
        constraints: [minValue, maxValue, maxDecimalPlaces],
        name: exports.IN_RANGE,
        validator: {
            defaultMessage: class_validator_1.buildMessage(function (eachPrefix) {
                return eachPrefix +
                    "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have $constraint3 max decimal places.";
            }, validationOptions),
            validate: function (value, args) {
                if (!class_validator_1.isNumber(value, { allowInfinity: false, allowNaN: false })) {
                    return false;
                }
                if (!class_validator_1.min(value, args.constraints[0])) {
                    return false;
                }
                if (!class_validator_1.max(value, args.constraints[1])) {
                    return false;
                }
                if (!class_validator_1.isNumber(value, { maxDecimalPlaces: args.constraints[2] })) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
exports.InRange = InRange;
