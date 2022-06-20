# Is

## @IsNotEmptyString

> Checks if there is at least one character in the string. Considers the line is not empty even if it has trimmable characters.

```typescript
import { IsNotEmptyString } from "@nestjsi/class-validator/is/is-not-empty-string";

class Class {
  @IsNotEmptyString()
  public anyFilledText: string = "\t";
}
```
