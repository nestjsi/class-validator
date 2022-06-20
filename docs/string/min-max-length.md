# String

## @MinMaxLength

> Checks if the string's length is not less than given number.

Deprecated since `0.2.1`. Use [@TextLengthMinMax](/string/text-length-min-max.md) instead.

```typescript
import { MinMaxLength } from "@nestjsi/class-validator/string/min-max-length";

class Class {
  @MinMaxLength(1, 255)
  public dictionary: string = "ADBCDEF";
}
```