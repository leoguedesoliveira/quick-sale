import express from 'express'
import { getAllProducts, createProduct, getProductByBarCode, updateProduct, deleteProductById } from '../controllers/productController.js';

const router = express.Router();

router.get('/produtos', async (req, res) => {
    return res.status(200).send(await getAllProducts())
});

router.get('/produtos/:id', async (req, res) => {
    const id = req.params.id
    
    return res.status(200).send(await getProductByBarCode(id))
});

router.post('/produtos', (req, res) => {
    
    const product = req.body
    
    try {
        createProduct(product);
        return res.status(201).send('Produto criado com sucesso!')
    } catch (error) {
        return res.status(500).send(error)
    }
});

router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const product = req.body
    
    try {
        updateProduct(id, product);
        return res.status(201).send('Produto alterado com sucesso!')
    } catch (error) {
        return res.status(500).send(error)
    }
});

router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id

    deleteProductById(id);

    return res.status(204).send('Excluído com sucesso!')
});

export { router }