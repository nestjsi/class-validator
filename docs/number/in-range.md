# Number

## @InRange

> Checks if a value is in a range of values.

```typescript
import { InRange } from "@nestjsi/class-validator/number/in-range";

class Class {
  @InRange(0.0, 100.0, 2)
  public percentage: number = 55.55;
}
```
