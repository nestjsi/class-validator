# Is

## @IsStringDate

> Is string in `YYYY-MM-DD` format.

```typescript
import { IsStringDate } from "@nestjsi/class-validator/is/is-string-date";

class Class {
  @IsStringDate()
  public yyyymmdd: string = "2099-12-31";
}
```
