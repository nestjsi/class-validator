"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var a=require("class-validator");exports.IN_RANGE="InRange",exports.IS_DISCOUNT="IsDiscount",exports.IS_EMAIL_TIDY="isEmailTidy",exports.IS_PRICE="IsPrice",exports.IS_STRING_DATE_PATTERN="^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$",exports.IS_STRING_TIME_OF_DAY="(?:[01]d|2[0123]):(?:[012345]d)",exports.IS_UUID_4="isUUID4",exports.InRange=function InRange(t,e,n,s){return a.ValidateBy({constraints:[t,e,n],name:"InRange",validator:{defaultMessage:a.buildMessage(a=>a+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have $constraint3 max decimal places.",s),validate:(t,e)=>!!a.isNumber(t,{allowInfinity:!1,allowNaN:!1})&&(!!a.min(t,e.constraints[0])&&(!!a.max(t,e.constraints[1])&&!!a.isNumber(t,{maxDecimalPlaces:e.constraints[2]})))}},s)},exports.IsDiscount=function IsDiscount(t){return a.ValidateBy({constraints:[.01,99.99],name:"IsDiscount",validator:{defaultMessage:a.buildMessage(a=>a+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.",t),validate:(t,e)=>!!a.isNumber(t,{allowInfinity:!1,allowNaN:!1,maxDecimalPlaces:2})&&(!!a.min(t,e.constraints[0])&&!!a.max(t,e.constraints[1]))}},t)},exports.IsEmailTidy=function IsEmailTidy(t,e){return a.ValidateBy({constraints:[],name:"isEmailTidy",validator:{defaultMessage:a.buildMessage(a=>a+"$property must be an email",e),validate:t=>a.isEmail(t,{allow_ip_domain:!1,allow_utf8_local_part:!1,domain_specific_validation:!0,ignore_max_length:!1})}},e)},exports.IsPrice=function IsPrice(t){return a.ValidateBy({constraints:[.01,70368744177663.99],name:"IsPrice",validator:{defaultMessage:a.buildMessage(a=>a+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.",t),validate:(t,e)=>!!a.isNumber(t,{allowInfinity:!1,allowNaN:!1,maxDecimalPlaces:2})&&(!!a.min(t,e.constraints[0])&&!!a.max(t,e.constraints[1]))}},t)},exports.IsStringDate=function IsStringDate(t){return function ClassValidatorCustomIsStringDate(e,n){a.registerDecorator({constraints:[],name:"IsStringDate",options:{message:"Date should be in [YYYY-MM-DD] format",...t},propertyName:n,target:e.constructor,validator:{validate:a=>"string"==typeof a&&/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i.test(a)}})}},exports.IsUUID4=function IsUUID4(t){return a.ValidateBy({constraints:[],name:"isUUID4",validator:{defaultMessage:a.buildMessage(a=>a+"$property must be an UUID",t),validate:t=>a.isUUID(t,4)}},t)},exports.MIN_MAX="MinMax",exports.MIN_MAX_INT="MinMaxInt",exports.MIN_MAX_LENGTH="MinMaxLength",exports.MIN_MAX_PCT="MinMaxPct",exports.MinMax=function MinMax(t,e,n){return a.ValidateBy({constraints:[t,e],name:"MinMax",validator:{defaultMessage:a.buildMessage(a=>a+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2.",n),validate:(t,e)=>!!a.isNumber(t,{allowInfinity:!1,allowNaN:!1})&&(!!a.min(t,e.constraints[0])&&!!a.max(t,e.constraints[1]))}},n)},exports.MinMaxInt=function MinMaxInt(t,e,n){return a.ValidateBy({constraints:[t,e],name:"MinMaxInt",validator:{defaultMessage:a.buildMessage(a=>a+"'$property' must be an integer, not be less than $constraint1, not be greater than $constraint2.",n),validate:(t,e)=>!!a.isNumber(t,{allowInfinity:!1,allowNaN:!1})&&(!!a.min(t,e.constraints[0])&&(!!a.max(t,e.constraints[1])&&!!a.isInt(t)))}},n)},exports.MinMaxLength=function MinMaxLength(t,e,n){return a.ValidateBy({constraints:[t,e],name:"MinMaxLength",validator:{defaultMessage:a.buildMessage(a=>a+"$property must be longer than $constraint1 characters or equal to $constraint2 characters",n),validate:(t,e)=>!!a.minLength(t,e.constraints[0])&&!!a.maxLength(t,e.constraints[1])}},n)},exports.MinMaxPct=function MinMaxPct(t,e,n){return a.ValidateBy({constraints:[t,e],name:"MinMaxPct",validator:{defaultMessage:a.buildMessage(a=>a+"'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.",n),validate:(t,e)=>!!a.isNumber(t,{allowInfinity:!1,allowNaN:!1,maxDecimalPlaces:2})&&(!!a.min(t,e.constraints[0])&&!!a.max(t,e.constraints[1]))}},n)};
//# sourceMappingURL=index.cjs.map
