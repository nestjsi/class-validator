# Check

## @CheckPrice

> Checks if a value is in a range of values with two decimal places.

_Since `0.2.1`_

```typescript
import { CheckPrice } from "@nestjsi/class-validator/check/check-price";

class Class {
  @CheckPrice(562_949_953_421_311.0, 0.01)
  public price: number = 10.99;
}
```
