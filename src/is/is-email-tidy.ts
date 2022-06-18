import ValidatorJS from "validator";

import { buildMessage, isEmail, ValidateBy } from "class-validator";

import type { ValidationOptions } from "class-validator";

/**
 * @name IsEmailTidy
 * @decorate
 * @description Checks if the string is an email. If given value is not a string, then it returns false.
 * @param {ValidatorJS.IsEmailOptions=} options Is EMail options: allow_ip_domain, allow_utf8_local_part, domain_specific_validation, ignore_max_length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export function IsEmailTidy(
  options?: ValidatorJS.IsEmailOptions,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [],
      name: "IsEmailTidy",
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
