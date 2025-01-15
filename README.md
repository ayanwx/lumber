# Lumber

Simple logging utility for JS/TS

Usage:

```ts
import { Lumber } from "lumber";

const logger = new Lumber();

logger.info("starting app ...");
logger.warn("PUT THE PHONE DOWN!");
logger.error("this is for my safety!");
logger.fatal("POW POW POW");
```

- `info(message: string): void;`
- `warn(message: string): void;`
- `error(message: string | Error): void;`
- `fatal(message: string | Error): void;`

_Very well documented_
