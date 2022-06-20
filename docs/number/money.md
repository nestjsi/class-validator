# Number

## @Money

> Checks if a value is in a range of values with two decimal places.

Deprecated since `0.2.1`. Use [@CheckPrice](/check/check-price.md) instead.

```typescript
import { Money } from "@nestjsi/class-validator/number/money";

class Class {
  @Money(562_949_953_421_311.0, 0.01)
  public price: number = 10.99;
}
```
