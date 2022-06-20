# Is

## @IsNotBlankString

> Checks if there is at least one character in the string. Removes whitespace from both ends of a string.

```typescript
import { IsNotBlankString } from "@nestjsi/class-validator/is/is-not-blank-string";

class Class {
  @IsNotBlankString()
  public readableText: string = "I can read this.";
}
```
