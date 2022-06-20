# Is

## @IsEmailTidy

> Checks if the string is an email.

```typescript
import { IsEmailTidy } from "@nestjsi/class-validator/is/is-email-tidy";

class Class {
  @IsEmailTidy({ allow_ip_domain: true })
  public email: string;
}
```
