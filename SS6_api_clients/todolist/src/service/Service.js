import axios from "axios";

export const getAll = async () => {
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?userId=1")
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const createWork = async (work) => {
    try{
        const res = await axios.post("https://jsonplaceholder.typicode.com/todos?userId=1", work)
    } catch (error) {
        console.log(error);
    }
}