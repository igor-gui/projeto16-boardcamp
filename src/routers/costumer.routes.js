import { Router } from "express";
import { getCostumerById, getCostumers, postCustomer, updateCustomer } from "../controllers/costumersControllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import customerSchema from "../schemas/costumer.Schema.js";
import checkCostumer from "../middlewares/checkUser.js";


const router = Router();

router.get('/custpmers', getCostumers);
router.get('/custpmers/:id', getCostumerById);
router.post('/custpmers', validateSchema(customerSchema), checkCostumer ,postCustomer);
router.put('/customers/:id', validateSchema(customerSchema), updateCustomer);

export default router;
