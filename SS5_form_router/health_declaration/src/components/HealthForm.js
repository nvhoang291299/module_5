import { Field, Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HealthForm() {
  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          idCard: "",
          dateOfBirth: "",
          gender: "",
          country: "",
          company: "",
          position: "",
          healthInsuranceCard: "",
          province: "",
          district: "",
          wards: "",
          address: "",
          numberPhone: "",
          email: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("trường này không được để trống"),
          idCard: Yup.string().required("trường này không được để trống"),
          dateOfBirth: Yup.date()
            .required("trường này không được để trống")
            .min(1900),
          country: Yup.string().required("trường này không được để trống"),
          province: Yup.string().required("trường này không được để trống"),
          district: Yup.string().required("trường này không được để trống"),
          wards: Yup.string().required("trường này không được để trống"),
          address: Yup.string().required("trường này không được để trống"),
          numberPhone: Yup.string().required("trường này không được để trống"),
          email: Yup.string()
            .email()
            .required("trường này không được để trống")
            .matches(
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
              "địa chỉ email không hợp lệ"
            ),
        })}
        onSubmit={(values) => {
          toast.success("Khai báo thành công!");
          console.log(values);
        }}
      >
        {
          <Form className="w-500">
            <h1 className="text-center">Khai báo y tế</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Họ và tên:
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
                Sổ hộ chiếu/CMND:
              </label>
              <Field
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                name="idCard"
              />
              <ErrorMessage
                name="idCard"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Năm sinh:
              </label>
              <Field
                type="date"
                className="form-control"
                id="exampleInputPassword1"
                name="dateOfBirth"
              />
              <ErrorMessage
                name="dateOfBirth"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="form-check form-check-inline">
              <Field
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio1"
                value="1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Nam
              </label>
            </div>
            <div className="form-check form-check-inline">
              <Field
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio2"
                value="0"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Nữ
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Quốc tịch:
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="country"
              />
              <ErrorMessage
                name="country"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Công ty làm việc:
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="company"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Bộ phận làm việc:
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="position"
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Có thẻ bảo hiểm y tế
              </label>
              <Field
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                name="healthInsuranceCard"
              />
            </div>
            <h3>Địa chỉ liên lạc tại Việt Nam</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Tỉnh/thành:
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="province"
              />
              <ErrorMessage
                name="province"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Quận/huyện:
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="district"
              />
              <ErrorMessage
                name="district"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phường/xã:
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="wards"
              />
              <ErrorMessage
                name="wards"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Số nhà, phố, tổ dân phố/thôn/đội:
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="address"
              />
              <ErrorMessage
                name="address"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Điện thoại:
              </label>
              <Field
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="numberPhone"
              />
              <ErrorMessage
                name="numberPhone"
                className="text-danger"
                component="span"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email:
              </label>
              <Field
                type="text"
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
            <hr />
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                <b>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào(Có thể đi qua nhiều quốc gia)</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Nộp phiếu khai báo
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

export default HealthForm;
