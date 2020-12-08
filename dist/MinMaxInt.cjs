"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMaxInt = exports.MIN_MAX_INT = void 0;
var class_validator_1 = require("class-validator");
exports.MIN_MAX_INT = "MinMaxInt";
/**
 * Checks if a value is in a range of integer values.
 */
/**
 * @name MinMaxInt
 * @decorate
 * @description Checks is value between two integers inclusive
 * @param {Number} minimumInteger - Minimum allowed integer
 * @param {Number} maximumInteger - Maximum allowed integer
 * @param {Object=} validationOptions
 * @constructor
 */
function MinMaxInt(minimumInteger, maximumInteger, validationOptions) {
    return class_validator_1.ValidateBy({
        constraints: [minimumInteger, maximumInteger],
        name: exports.MIN_MAX_INT,
        validator: {
            defaultMessage: class_validator_1.buildMessage(function (eachPrefix) {
                return eachPrefix +
                    "'$property' must be an integer, not be less than $constraint1, not be greater than $constraint2.";
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
                if (!class_validator_1.isInt(value)) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
exports.MinMaxInt = MinMaxInt;
