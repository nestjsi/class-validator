"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedLength = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name FixedLength
 * @decorate
 * @description Checks if the string's length is not less or more than given number. Removes whitespace from both ends of a string. If given value is not a string, then it returns false.
 * @param {number} fixedLength The minimum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
function FixedLength(fixedLength, validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [fixedLength],
        name: "FixedLength",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix + "$property must be equal to $constraint1 characters", validationOptions),
            validate: (value, args) => {
                const valueTrimmed = String(value).trim();
                if (!(0, class_validator_1.minLength)(valueTrimmed, args.constraints[0]) || !(0, class_validator_1.maxLength)(valueTrimmed, args.constraints[0])) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
exports.FixedLength = FixedLength;
