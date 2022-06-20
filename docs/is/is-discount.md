# Is

## @IsDiscount

> Checks if a value is in a range of values with two decimal places.

```typescript
import { IsDiscount } from "@nestjsi/class-validator/is/is-discount";

class Class {
  @IsDiscount()
  public discount: number = 0.01; // 0.01 - 99.99
}
```