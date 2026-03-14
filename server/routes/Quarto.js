import express from "express";
import { incluir } from "../controllers/Quarto.js";

const router = express.Router();

router.post("/incluir", incluir);

export default router;







