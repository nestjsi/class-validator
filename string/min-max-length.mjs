import { buildMessage, maxLength, minLength, ValidateBy } from "class-validator";
export function MinMaxLength(minLen, maxLen, validationOptions) {
  return ValidateBy(
    {
      constraints: [minLen, maxLen],
      name: "MinMaxLength",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix + "$property must be longer than $constraint1 characters or equal to $constraint2 characters",
          validationOptions,
        ),
        validate: (value, args) => {
          if (!minLength(value, args.constraints[0])) {
            return false;
          }
          if (!maxLength(value, args.constraints[1])) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
