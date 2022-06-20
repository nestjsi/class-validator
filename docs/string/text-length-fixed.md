# String

## @TextLengthFixed

> Checks if the string's length is not less than given number.

_Since `0.2.1`_

```typescript
import { TextLengthFixed } from "@nestjsi/class-validator/string/text-length-fixed";

class Class {
  @TextLengthFixed(2)
  public countryCode: string = "US";
}
```
