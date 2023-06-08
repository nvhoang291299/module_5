
import { Field, Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormSubmit() {
  return (
    <div className="container">
      <h1>Form Contact</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("field is not empty"),
          phone: Yup.string().required("field is not empty"),
          email: Yup.string()
            .email()
            .required("field is not empty")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
        })}
        onSubmit={(values) => {
          toast.success("Submit success!");
          console.log(values);
        }}
      >
        {
          <Form className="w-500">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="name"
              />
              <ErrorMessage
                name="name"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <Field
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                name="email"
              />
              <ErrorMessage
                name="email"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone
              </label>
              <Field
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                name="phone"
              />
              <ErrorMessage
                name="phone"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        }
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default FormSubmit;
