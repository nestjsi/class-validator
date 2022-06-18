import type { ValidationOptions } from "class-validator";
export declare const MAX_SAFE_FLOAT: 562949953421311;
/**
 * @name Money
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {number=} [maxValue=562949953421311] The maximum value
 * @param {number=} [minValue=0.01] The minimum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.4
 */
export declare function Money(maxValue?: number, minValue?: number, validationOptions?: ValidationOptions): PropertyDecorator;
