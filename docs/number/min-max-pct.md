# Number

## @MinMaxPct

> Checks if a value is in a range of values with two decimal places.

```typescript
import { MinMaxPct } from "@nestjsi/class-validator/number/min-max-pct";

class Class {
  @MinMaxPct(0.0, 100.0)
  public charge: number = 55.55;
}
```
