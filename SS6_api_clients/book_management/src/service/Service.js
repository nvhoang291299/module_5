import axios from "axios";

export const getList = async () => {
    try {
        const res = await axios.get("http://localhost:8080/books")
        return res.data;
    } catch(error) {
        console.error("Loi he thong");
    }
}

export const createBook = async (book) => {
    try {
        const res = await axios.post("http://localhost:8080/books", book)
    } catch(error){
        console.error("loi hien thi");
    }
}
