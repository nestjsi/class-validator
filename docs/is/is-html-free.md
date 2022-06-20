# Is

## @IsHTMLFree

> Checks if the string has HTML tags.

```typescript
import { IsHTMLFree } from "@nestjsi/class-validator/is/is-html-free";

class Class {
  @IsHTMLFree()
  public plainText: string = "No HTML tags.";
}
```
