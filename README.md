# Low Level

Access 3Commas API.

```ts
import { getBot, getAllAccounts } from "3commas";

const bot = await getBot(123456789);
const accounts = await getAllAccounts();
```

# High Level

Use 3Commas API at a high level.

```ts
import { ThreeCommas } from "3Commas";

const threeCommas = new ThreeCommas();
await threeCommas.loadAccounts();
await threeCommas.loadBots();

const bot = threeCommas.getBot(123456789);
const account = bot.account;
```
