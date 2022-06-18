import type { ValidationOptions } from "class-validator";
/**
 * @name IsSingleLine
 * @decorate
 * @description Checks if there are line breaks in the text.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function IsSingleLine(validationOptions?: ValidationOptions): PropertyDecorator;
