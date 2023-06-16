import axios from "axios"


const getListProduct = async () => {
    const res = await axios.get('http://localhost:8080/product')
    return res.data
}

const getListType = async () => {
    const res = await axios.get('http://localhost:8080/typeProduct')
    return res.data
}

const postProduct = async (product) => {
    await axios.post('http://localhost:8080/product/create', product)
}

const searchProduct = async (nameProduct, idType) => {
    const res = await axios.get(`http://localhost:8080/product/search?nameProduct=${nameProduct}&typeId=${idType}`)
    return res.data
}

const updateProduct = async (product, id) => {
    await axios.put(`http://localhost:8080/product/${id}`, product);
    
}

const findByProductById = async (id) => {
    const response = await axios.get(`http://localhost:8080/product/${id}`);
    return response.data
}

const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/product/delete/${id}`);
}

export {
    getListProduct,
    getListType,
    postProduct,
    searchProduct,
    deleteProduct,
    findByProductById,
    updateProduct
}
