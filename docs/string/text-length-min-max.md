# String

## @TextLengthMinMax

> Checks if the string's length is not less than given number.

_Since `0.2.1`_

```typescript
import { TextLengthMinMax } from "@nestjsi/class-validator/string/text-length-min-max";

class Class {
  @TextLengthMinMax(1, 255)
  public dictionary: string = "ADBCDEF";
}
```
