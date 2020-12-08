import {
  //
  buildMessage,
  isEmail,
  ValidateBy,
  ValidationOptions,
} from "class-validator";
import ValidatorJS from "validator";

export const IS_EMAIL_TIDY = "isEmailTidy";

/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 */
export function IsEmailTidy(
  options?: ValidatorJS.IsEmailOptions,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [],
      name: IS_EMAIL_TIDY,
      validator: {
        defaultMessage: buildMessage((eachPrefix) => eachPrefix + "$property must be an email", validationOptions),
        validate: (value): boolean =>
          isEmail(value, {
            allow_ip_domain: false,
            allow_utf8_local_part: false,
            domain_specific_validation: true,
            ignore_max_length: false,
          }),
      },
    },
    validationOptions,
  );
}
