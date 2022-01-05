export * from "./FixedLength";
export * from "./InRange";
export * from "./IsDiscount";
export * from "./IsEmailTidy";
export * from "./IsHTMLFree";
export * from "./IsNotBlankString";
export * from "./IsNotEmptyString";
export * from "./IsNotNull";
export * from "./IsPositiveInt";
export * from "./IsPrice";
export * from "./IsSingleLine";
export * from "./IsStringDate";
export * from "./IsUUID4";
export * from "./MinMax";
export * from "./MinMaxInt";
export * from "./MinMaxLength";
export * from "./MinMaxPct";
export * from "./Money";

// noinspection RegExpRedundantEscape
export const IS_STRING_DATE_PATTERN = `^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$` as const;

export const IS_STRING_TIME_OF_DAY = `(?:[01]d|2[0123]):(?:[012345]d)` as const;
