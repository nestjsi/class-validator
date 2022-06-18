import { buildMessage, maxLength, minLength, ValidateBy } from "class-validator";
export function FixedLength(fixedLength, validationOptions) {
  return ValidateBy(
    {
      constraints: [fixedLength],
      name: "FixedLength",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + "$property must be equal to $constraint1 characters",
          validationOptions,
        ),
        validate: (value, args) => {
          const valueTrimmed = String(value).trim();
          if (!minLength(valueTrimmed, args.constraints[0]) || !maxLength(valueTrimmed, args.constraints[0])) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
