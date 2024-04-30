import { getAllProducts } from "../services/productService.js";

const listAllProducts = async () => {
    const products = await getAllProducts();

    return products
}

export { listAllProducts }