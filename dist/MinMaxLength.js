"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMaxLength = exports.MIN_MAX_LENGTH = void 0;
var class_validator_1 = require("class-validator");
exports.MIN_MAX_LENGTH = "MinMaxLength";
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function MinMaxLength(min, max, validationOptions) {
    return class_validator_1.ValidateBy({
        constraints: [min, max],
        name: exports.MIN_MAX_LENGTH,
        validator: {
            defaultMessage: class_validator_1.buildMessage(function (eachPrefix) {
                return eachPrefix + "$property must be longer than $constraint1 characters or equal to $constraint2 characters";
            }, validationOptions),
            validate: function (value, args) {
                if (!class_validator_1.minLength(value, args.constraints[0])) {
                    return false;
                }
                if (!class_validator_1.maxLength(value, args.constraints[1])) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
exports.MinMaxLength = MinMaxLength;
