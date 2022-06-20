# String

## @FixedLength

> Checks if the string's length is not less or more than given number.

Deprecated since `0.2.1`. Use [@TextLengthFixed](/string/text-length-fixed.md) instead.

```typescript
import { FixedLength } from "@nestjsi/class-validator/string/fixed-length";

class Class {
  @FixedLength(2)
  public countryCode: string = "US";
}
```