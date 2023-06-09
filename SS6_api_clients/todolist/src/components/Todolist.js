import { useEffect, useState } from "react";
import * as services from "../service/Service";
import { Formik, Form, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
    const [listTodos, setListTodos] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            const result = await services.getAll();
            setListTodos(result);
        }
        fetchApi();
    },[])

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    // completed: ""
                }}
                onSubmit = {(values) => {
                    // if (values.completed === "true") {
                    //     values.completed = true;
                    // } else if (values.completed === "false") {
                    //     values.completed = false;

                    // }
                    const create = async () => {
                        await services.createWork(values);
                        toast.success("thêm mới thành công")
                        console.log(values);
                    }
                    create();
                }}>{
                    <Form>
                        <Field type="text" name="title"/>
                        {/* <Field type="text" name="completed"/> */}
                        <button className="btn btn-primary" type="submit">add</button>
                    </Form>
                }
            </Formik>
            <ul>
                {
                    listTodos.map((listTodo, index) => (
                        <li key={index}>{listTodo.title}</li>
                    ))
                }
            </ul>
            <ToastContainer />
        </>
    )
}

export default TodoList;