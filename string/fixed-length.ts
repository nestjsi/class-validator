import { buildMessage, maxLength, minLength, ValidateBy } from "class-validator";

import type { ValidationOptions } from "class-validator";

/**
 * @name FixedLength
 * @decorate
 * @description Checks if the string's length is not less or more than given number. Removes whitespace from both ends of a string. If given value is not a string, then it returns false.
 * @param {number} fixedLength The minimum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 * @deprecated Since `0.2.1`. Use `@TextLengthFixed` instead.
 */
export function FixedLength(fixedLength: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      constraints: [fixedLength],
      name: "FixedLength",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + "$property must be equal to $constraint1 characters",
          validationOptions,
        ),
        validate: (value, args): boolean => {
          const valueTrimmed = String(value).trim();
          if (!minLength(valueTrimmed, args!.constraints[0]) || !maxLength(valueTrimmed, args!.constraints[0])) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}

