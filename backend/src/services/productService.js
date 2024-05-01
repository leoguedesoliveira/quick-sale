// LAYER THAT WILL MAKE CONTACT WITH THE DATABASE
import { conn } from "../dbConfig.js";

const getAll = async () => {
    const [products] = await conn.execute('SELECT * FROM T_PRODUTO')
    
    return products
};

const getByBarCode = async (id) => {
    const [product] = await conn.execute('SELECT * FROM T_PRODUTO WHERE COD_BARRAS = ?', [id]);
    return product
};

const save = async (product) => {
    const { name, barCode, price } = product

    const [result] = await conn.execute('INSERT INTO T_PRODUTO (NM_PRODUTO, COD_BARRAS, VL_PRODUTO) VALUES (?, ?, ?)', [name, barCode, price]);

    return result
};

const update = async (id, product) => {
    const { name, price } = product

    const [result] = await conn.execute('UPDATE T_PRODUTO SET NM_PRODUTO = ?, VL_PRODUTO = ? WHERE ID_PRODUTO = ?', [name, price, id]);

    return result
};

const deleteProduct = async (id) => {
    conn.execute('DELETE FROM T_PRODUTO WHERE ID_PRODUTO = ?', [id]);
};


export { getAll, save, getByBarCode, update, deleteProduct }