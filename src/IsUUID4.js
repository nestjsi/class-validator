import { 
//
buildMessage, isUUID, ValidateBy, } from "class-validator";
export const IS_UUID_4 = "isUUID4";
/**
 * Checks if the string is a UUID version 4.
 * If given value is not a string, then it returns false.
 */
export function IsUUID4(validationOptions) {
    return ValidateBy({
        constraints: [],
        name: IS_UUID_4,
        validator: {
            defaultMessage: buildMessage((eachPrefix) => eachPrefix + "$property must be an UUID", validationOptions),
            validate: (value) => isUUID(value, 4),
        },
    }, validationOptions);
}
