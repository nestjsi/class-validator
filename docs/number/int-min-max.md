# Number

## @IntMinMax

> Checks is value between two integers inclusive.

_Since `0.2.1`_

```typescript
import { IntMinMax } from "@nestjsi/class-validator/number/int-min-max";

class Class {
  @IntMinMax(0, 360)
  public angle: number = 90;
}
```
