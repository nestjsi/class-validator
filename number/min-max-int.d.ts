import type { ValidationOptions } from "class-validator";
/**
 * @name MinMaxInt
 * @decorate
 * @description Checks is value between two integers inclusive.
 * @param {number} minimumInteger Minimum allowed integer
 * @param {number} maximumInteger Maximum allowed integer
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function MinMaxInt(minimumInteger: number, maximumInteger: number, validationOptions?: ValidationOptions): PropertyDecorator;
