import { getAll, save, getByBarCode, update, deleteProduct } from "../services/productService.js";

const getAllProducts = async () => {
    return await getAll();
}

const getProductByBarCode = async (id) => {
    return await getByBarCode(id);
}

const createProduct = async (product) => {
    return await save(product);
}

const updateProduct = async (id, product) => {
    return await update(id, product);
}

const deleteProductById = async (id) => {
    return await deleteProduct(id);
}

export { getAllProducts, createProduct, getProductByBarCode, updateProduct, deleteProductById }