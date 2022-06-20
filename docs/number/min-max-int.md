# Number

## @MinMaxInt

> Checks is value between two integers inclusive.

Deprecated since `0.2.1`. Use [@IntMinMax](/number/int-min-max.md) instead.

```typescript
import { MinMaxInt } from "@nestjsi/class-validator/number/min-max-int";

class Class {
  @MinMaxInt(0, 360)
  public angle: number = 90;
}
```
