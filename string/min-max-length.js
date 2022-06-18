"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMaxLength = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name MinMaxLength
 * @decorate
 * @description Checks if the string's length is not more and less than given numbers. If given value is not a string, then it returns false. Note: this function takes into account surrogate pairs.
 * @param {number} minLen The minimum length
 * @param {number} maxLen The maximum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
function MinMaxLength(minLen, maxLen, validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [minLen, maxLen],
        name: "MinMaxLength",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix + "$property must be longer than $constraint1 characters or equal to $constraint2 characters", validationOptions),
            validate: (value, args) => {
                if (!(0, class_validator_1.minLength)(value, args.constraints[0])) {
                    return false;
                }
                if (!(0, class_validator_1.maxLength)(value, args.constraints[1])) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
exports.MinMaxLength = MinMaxLength;
