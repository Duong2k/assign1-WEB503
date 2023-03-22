import { create, get, getAll, update, remove } from "../controllers/product";
import express from 'express';

const router = express.Router();
router.get("/products/:id", get);
router.get("/products", getAll);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

export default router