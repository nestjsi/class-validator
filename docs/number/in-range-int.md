# Number

## @InRangeInt

> Checks if a value is in a range of integer values.

```typescript
import { InRangeInt } from "@nestjsi/class-validator/number/in-range-int";

class Class {
  @InRangeInt(0, 100)
  public percentage: number = 55;
}
```
