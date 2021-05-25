import express from "express"
import { create, list, photo, productById, read, remove, update } from "../controller/product"

const router = express.Router()


router.post("/products", create)
router.get("/products", list)
router.get("/product/:productId", read)
router.delete("/product/:productId", remove)
router.param("productId", productById)
router.put("/product/:productId", update)
router.get("/product/photo/:productId", photo)
module.exports = router