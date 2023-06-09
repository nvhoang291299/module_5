import { Formik, Field, Form } from "formik";
import * as Services from "../service/Service";
import { useNavigate } from "react-router-dom";

function CreateBook() {
    const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
            title: "",
            quantity: 0
        }}

        onSubmit={(values) => {
            const addNewBook = async () => {
                await Services.createBook(values);
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
              <Field type="text" className="form-control" name="title"/>
            </div>
            <div className="mb-3">
              <label>Quantity</label>
              <Field type="number" className="form-control" name="quantity"/>
            </div>
            <button type="submit" className="btn btn-primary">
              Add new
            </button>
          </Form>
        }
      </Formik>
    </>
  );
}

export default CreateBook;
