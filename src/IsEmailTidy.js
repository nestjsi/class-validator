import { 
//
buildMessage, isEmail, ValidateBy, } from "class-validator";
export const IS_EMAIL_TIDY = "isEmailTidy";
/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 */
export function IsEmailTidy(options, validationOptions) {
    return ValidateBy({
        constraints: [],
        name: IS_EMAIL_TIDY,
        validator: {
            defaultMessage: buildMessage((eachPrefix) => eachPrefix + "$property must be an email", validationOptions),
            validate: (value) => isEmail(value, {
                allow_ip_domain: false,
                allow_utf8_local_part: false,
                domain_specific_validation: true,
                ignore_max_length: false,
            }),
        },
    }, validationOptions);
}
