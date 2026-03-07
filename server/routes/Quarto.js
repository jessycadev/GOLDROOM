import express from "express";
import { Quarto } from "../controllers/Quarto.js";

const router = express.Router();

router.post("/cadastroQuarto", Quarto);

export default router;







