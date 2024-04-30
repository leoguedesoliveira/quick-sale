// LAYER THAT WILL MAKE CONTACT WITH THE DATABASE
import { conn } from "../dbConfig.js";

const getAllProducts = async () => {
    const [products] = await conn.execute('SELECT * FROM T_PRODUTO')
    
    return products
}

export { getAllProducts }