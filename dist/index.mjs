import{ValidateBy as t,buildMessage as a,isNumber as n,min as e,max as s,isEmail as i,isString as r,isInt as o,registerDecorator as l,isUUID as c,minLength as u,maxLength as m}from"class-validator";function InRange(i,r,o,l){return t({constraints:[i,r,o],name:"InRange",validator:{defaultMessage:a(t=>t+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have $constraint3 max decimal places.",l),validate:(t,a)=>!!n(t,{allowInfinity:!1,allowNaN:!1})&&(!!e(t,a.constraints[0])&&(!!s(t,a.constraints[1])&&!!n(t,{maxDecimalPlaces:a.constraints[2]})))}},l)}function IsDiscount(i){return t({constraints:[.01,99.99],name:"IsDiscount",validator:{defaultMessage:a(t=>t+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.",i),validate:(t,a)=>!!n(t,{allowInfinity:!1,allowNaN:!1,maxDecimalPlaces:2})&&(!!e(t,a.constraints[0])&&!!s(t,a.constraints[1]))}},i)}function IsEmailTidy(n,e){return t({constraints:[],name:"IsEmailTidy",validator:{defaultMessage:a(t=>t+"$property must be an email",e),validate:t=>i(t,{allow_ip_domain:!1,allow_utf8_local_part:!1,domain_specific_validation:!0,ignore_max_length:!1})}},e)}function IsHTMLFree(n){return t({constraints:[],name:"IsHTMLFree",validator:{defaultMessage:a(t=>t+"$property must be a string without HTML tags",n),validate:t=>!!r(t)&&/(<([^>]+)>)/g.test(t)}},n)}const d="isPositiveInt";function IsPositiveInt(s){return t({name:"isPositiveInt",validator:{validate:(t,a)=>!!n(t,{allowInfinity:!1,allowNaN:!1})&&(!!e(t,1)&&!!o(t)),defaultMessage:a(t=>t+"$property must be a positive integer",s)}},s)}function IsPrice(i){return t({constraints:[.01,70368744177663.99],name:"IsPrice",validator:{defaultMessage:a(t=>t+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.",i),validate:(t,a)=>!!n(t,{allowInfinity:!1,allowNaN:!1,maxDecimalPlaces:2})&&(!!e(t,a.constraints[0])&&!!s(t,a.constraints[1]))}},i)}function IsSingleLine(t){return function ClassValidatorCustomIsSingleLine(a,n){l({constraints:[],name:"IsSingleLine",options:{message:"The text should be a single line",...t},propertyName:n,target:a.constructor,validator:{validate:t=>"string"==typeof t&&/\r?\n|\r/g.test(t)}})}}function IsStringDate(t){return function ClassValidatorCustomIsStringDate(a,n){l({constraints:[],name:"IsStringDate",options:{message:"Date should be in [YYYY-MM-DD] format",...t},propertyName:n,target:a.constructor,validator:{validate:t=>"string"==typeof t&&/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i.test(t)}})}}function IsUUID4(n){return t({constraints:[],name:"IsUUID4",validator:{defaultMessage:a(t=>t+"$property must be an UUID",n),validate:t=>c(t,4)}},n)}function MinMax(i,r,o){return t({constraints:[i,r],name:"MinMax",validator:{defaultMessage:a(t=>t+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2.",o),validate:(t,a)=>!!n(t,{allowInfinity:!1,allowNaN:!1})&&(!!e(t,a.constraints[0])&&!!s(t,a.constraints[1]))}},o)}function MinMaxInt(i,r,l){return t({constraints:[i,r],name:"MinMaxInt",validator:{defaultMessage:a(t=>t+"'$property' must be an integer, not be less than $constraint1, not be greater than $constraint2.",l),validate:(t,a)=>!!n(t,{allowInfinity:!1,allowNaN:!1})&&(!!e(t,a.constraints[0])&&(!!s(t,a.constraints[1])&&!!o(t)))}},l)}function MinMaxLength(n,e,s){return t({constraints:[n,e],name:"MinMaxLength",validator:{defaultMessage:a(t=>t+"$property must be longer than $constraint1 characters or equal to $constraint2 characters",s),validate:(t,a)=>!!u(t,a.constraints[0])&&!!m(t,a.constraints[1])}},s)}function MinMaxPct(i,r,o){return t({constraints:[i,r],name:"MinMaxPct",validator:{defaultMessage:a(t=>t+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.",o),validate:(t,a)=>!!n(t,{allowInfinity:!1,allowNaN:!1,maxDecimalPlaces:2})&&(!!e(t,a.constraints[0])&&!!s(t,a.constraints[1]))}},o)}const g="^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$",I="(?:[01]d|2[0123]):(?:[012345]d)";export{d as IS_POSITIVE_INT,g as IS_STRING_DATE_PATTERN,I as IS_STRING_TIME_OF_DAY,InRange,IsDiscount,IsEmailTidy,IsHTMLFree,IsPositiveInt,IsPrice,IsSingleLine,IsStringDate,IsUUID4,MinMax,MinMaxInt,MinMaxLength,MinMaxPct};
//# sourceMappingURL=index.mjs.map
