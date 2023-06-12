import { Formik, Field, Form } from "formik";
import * as Services from "../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateBook() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState(0);

    let param = useParams();

    
    useEffect(() => {
      const getBookById = async () =>{
        const data = await Services.getBookById(param.id);
        setTitle(data.title)
        setQuantity(data.quantity)
      }
      getBookById()
    }, [param.id])

  return (
    <>
      <Formik
        initialValues={{
            title: title,
            quantity: quantity
        }}

        onSubmit={(values) => {
            const addNewBook = async () => {
                await Services.updateBook(values, param.id);
                navigate('/');
                console.log(values);
            }
            addNewBook();
        }}
      >
        {
          <Form>
            <div className="mb-3">
              <label>Title</label>
              <Field type="text" className="form-control" name="title" id="title"/>
            </div>
            <div className="mb-3">
              <label>Quantity</label>
              <Field type="number" className="form-control" name="quantity"/>
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </Form>
        }
      </Formik>
    </>
  );
}

export default UpdateBook;
