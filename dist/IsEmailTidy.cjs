"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmailTidy = exports.IS_EMAIL_TIDY = void 0;
var class_validator_1 = require("class-validator");
exports.IS_EMAIL_TIDY = "isEmailTidy";
/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 */
function IsEmailTidy(options, validationOptions) {
    return class_validator_1.ValidateBy({
        constraints: [],
        name: exports.IS_EMAIL_TIDY,
        validator: {
            defaultMessage: class_validator_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an email"; }, validationOptions),
            validate: function (value) {
                return class_validator_1.isEmail(value, {
                    allow_ip_domain: false,
                    allow_utf8_local_part: false,
                    domain_specific_validation: true,
                    ignore_max_length: false,
                });
            },
        },
    }, validationOptions);
}
exports.IsEmailTidy = IsEmailTidy;
