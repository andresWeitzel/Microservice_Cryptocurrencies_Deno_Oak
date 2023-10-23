import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.js";
import _404 from "./controllers/404.js";
import errorHandler from "./controllers/errorHandler.js";
//Const
const APP_HOST = Deno.env.get("APP_HOST") || "127.0.0.1";
const APP_PORT = Deno.env.get("APP_PORT") || 4000;

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);