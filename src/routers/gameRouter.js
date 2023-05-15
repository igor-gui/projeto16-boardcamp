import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { gameSchema } from "../schemas/game.Schema.js";
import { getGames, postGame } from "../controllers/gameControllers.js";

const router = Router()

router.get('/games', getGames);
router.post('/games', validateSchema(gameSchema), postGame);

export default router;