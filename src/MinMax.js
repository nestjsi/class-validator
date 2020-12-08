import { 
//
buildMessage, isNumber, max, min, ValidateBy, } from "class-validator";
export const MIN_MAX = "MinMax";
/**
 * Checks if a value is in a range of values.
 */
export function MinMax(minValue, maxValue, validationOptions) {
    return ValidateBy({
        constraints: [minValue, maxValue],
        name: MIN_MAX,
        validator: {
            defaultMessage: buildMessage((eachPrefix) => eachPrefix +
                "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2.", validationOptions),
            validate(value, args) {
                if (!isNumber(value, { allowInfinity: false, allowNaN: false })) {
                    return false;
                }
                if (!min(value, args.constraints[0])) {
                    return false;
                }
                if (!max(value, args.constraints[1])) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
