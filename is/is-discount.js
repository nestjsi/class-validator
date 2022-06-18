"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDiscount = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IsDiscount
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
function IsDiscount(validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [0.01, 99.99],
        name: "IsDiscount",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix +
                "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.", validationOptions),
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
    }, validationOptions);
}
exports.IsDiscount = IsDiscount;
