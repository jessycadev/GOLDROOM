import express from "express";
import { 
    getProducts,
    getCustomers,
    getTransactions,
    getQuartos 
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/bill", getQuartos);

export default router;