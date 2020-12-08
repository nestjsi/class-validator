"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsStringDate = void 0;
var class_validator_1 = require("class-validator");
function IsStringDate(validationOptions) {
    return function ClassValidatorCustomIsStringDate(object, propertyName) {
        class_validator_1.registerDecorator({
            constraints: [],
            name: "IsStringDate",
            options: __assign({ message: "Date should be in [YYYY-MM-DD] format" }, validationOptions),
            propertyName: propertyName,
            target: object.constructor,
            validator: {
                validate: function (value) {
                    return typeof value === "string" && /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i.test(value);
                },
            },
        });
    };
}
exports.IsStringDate = IsStringDate;
