//External
import { Application } from "https://deno.land/x/oak/mod.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
//Routes
import router from "./src/config/routes/currency.ts";
//Const
const env = await load();
const APP_HOST = env["APP_HOST"] || "127.0.0.1";
const APP_PORT = env["APP_PORT"] || 4000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
