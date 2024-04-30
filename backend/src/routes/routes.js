import express from 'express'
import { listAllProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await listAllProducts();

    if(!products) {
        return res.status(200).send('lista vazia')
    } else {
        return res.status(200).send(products)
    }
})

export { router }