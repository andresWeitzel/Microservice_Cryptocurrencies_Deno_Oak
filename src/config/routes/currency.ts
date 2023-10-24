import { Router } from "https://deno.land/x/oak/mod.ts";
import { getCurrencyTypeController } from "../../controllers/currency";


const router = new Router();

router
  .get("/currency/type/:symbol", getCurrencyTypeController);

export default router;