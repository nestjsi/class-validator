"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_STRING_TIME_OF_DAY = exports.IS_STRING_DATE_PATTERN = void 0;
__exportStar(require("./InRange"), exports);
__exportStar(require("./IsDiscount"), exports);
__exportStar(require("./IsEmailTidy"), exports);
__exportStar(require("./IsPrice"), exports);
__exportStar(require("./IsStringDate"), exports);
__exportStar(require("./IsUUID4"), exports);
__exportStar(require("./MinMax"), exports);
__exportStar(require("./MinMaxInt"), exports);
__exportStar(require("./MinMaxLength"), exports);
__exportStar(require("./MinMaxPct"), exports);
// noinspection RegExpRedundantEscape
exports.IS_STRING_DATE_PATTERN = "^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$";
exports.IS_STRING_TIME_OF_DAY = "(?:[01]d|2[0123]):(?:[012345]d)";
