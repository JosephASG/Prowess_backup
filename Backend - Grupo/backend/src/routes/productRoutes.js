import { Router } from "express";
import * as productController from "../controllers/productController.js";

const router = Router();

router.get("/seller/:id", productController.getProductById);
router.post("/add", productController.postProduct); 
router.get("/", productController.getProducts);  
router.get("/slug/:slug",productController.getProductBySlug);
router.put("/update/:id", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct); 

export default router;
