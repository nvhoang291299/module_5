import axios from "axios";

const getListProduct = async () => {
    const response = await axios.get('http://localhost:8080/product?_sort=price&_order=desc');
    return response.data
}

const getListTypeProduct = async () => {
    const response = await axios.get('http://localhost:8080/typeProduct');
    return response.data
}

const createProduct = async (product) => {
    const response = await axios.post('http://localhost:8080/product', product);
    
}

const updateProduct = async (product, id) => {
    const response = await axios.put(`http://localhost:8080/product/${id}`, product);
    
}

const findByProductById = async (id) => {
    const response = await axios.get(`http://localhost:8080/product/${id}`);
    return response.data
}

const deleteProduct = async (id) => {
    const response = await axios.delete(`http://localhost:8080/product/${id}`);
    // return response.data
}

const searchProduct = async (nameProduct, typeProduct) => {
    const response = await axios.get(`http://localhost:8080/product?nameProduct_like=${nameProduct}&typeId_like=${typeProduct}`);
        return response.data
    
}


export {
    getListProduct,
    getListTypeProduct,
    createProduct,
    updateProduct,
    findByProductById,
    deleteProduct,
    searchProduct
}