export * from "./check/check-price";

export * from "./is/is-discount";
export * from "./is/is-email-tidy";
export * from "./is/is-html-free";
export * from "./is/is-not-blank-string";
export * from "./is/is-not-empty-string";
export * from "./is/is-not-null";
export * from "./is/is-positive-int";
export * from "./is/is-price";
export * from "./is/is-single-line";
export * from "./is/is-string-date";
export * from "./is/is-uuid4";

export * from "./number/in-range";
export * from "./number/in-range-int";
export * from "./number/int-min-max";
export * from "./number/min-max";
export * from "./number/min-max-int";
export * from "./number/min-max-pct";
export * from "./number/money";

export * from "./string/fixed-length";
export * from "./string/min-max-length";
export * from "./string/text-length-fixed";
export * from "./string/text-length-min-max";

// noinspection RegExpRedundantEscape
export const IS_STRING_DATE_PATTERN = `^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$` as const;

export const IS_STRING_TIME_OF_DAY = `(?:[01]d|2[0123]):(?:[012345]d)` as const;
