import axios from "axios";

 const getList = async () => {
    try {
        const res = await axios.get("http://localhost:8080/books")
        return res.data;
    } catch(error) {
        console.error("Loi he thong");
    }
}

 const createBook = async (book) => {
    try {
        const res = await axios.post("http://localhost:8080/books", book)
    } catch(error){
        console.error("loi hien thi");
    }
}

 const getBookById = async (idBook) => {
    try {
        const res = await axios.get(`http://localhost:8080/books/${idBook}`)
        console.log(res.data);
        return res.data;
    } catch(error) {
        console.error("Loi he thong");
    }
}

 const updateBook = async (book, idBook) => {
    try {
        const res = await axios.put(`http://localhost:8080/books/${idBook}`, book)
    } catch(error){
        console.error("loi hien thi");
    }
}


 const deleteBook = async (book, idBook) => {
    try {
        const res = await axios.delete(`http://localhost:8080/books/${idBook}`, book)
        return res.data;
    } catch(error){
        console.error("loi hien thi");
    }
}

export {getList, createBook, updateBook, getBookById, deleteBook};