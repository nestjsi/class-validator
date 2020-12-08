"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUUID4 = exports.IS_UUID_4 = void 0;
var class_validator_1 = require("class-validator");
exports.IS_UUID_4 = "isUUID4";
/**
 * Checks if the string is a UUID version 4.
 * If given value is not a string, then it returns false.
 */
function IsUUID4(validationOptions) {
    return class_validator_1.ValidateBy({
        constraints: [],
        name: exports.IS_UUID_4,
        validator: {
            defaultMessage: class_validator_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an UUID"; }, validationOptions),
            validate: function (value) { return class_validator_1.isUUID(value, 4); },
        },
    }, validationOptions);
}
exports.IsUUID4 = IsUUID4;
