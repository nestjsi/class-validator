# Number

## @MinMax

> Checks if a value is in a range of values.

```typescript
import { MinMax } from "@nestjsi/class-validator/number/min-max";
class Class {
  @MinMax(-100.0, 100.0)
  public percentage: number = -55.55;
}
```
