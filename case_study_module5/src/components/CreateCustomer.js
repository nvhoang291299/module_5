import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function CreateCustomer() {
    return (
        <Formik
            initialValues={{
                fullName: "",
                dateOfBirth: "",
                gender: "",
                idCard: "",
                numberPhone: "",
                email: "",
                address: "",
                typeCustomer: ""
            }}
            validationSchema={Yup.object().shape({
                fullName: Yup.string().required("trường không bỏ trống"),
                dateOfBirth: Yup.date().required("trường không bỏ trống"),
                gender: Yup.string().required("trường không bỏ trống"),
                idCard: Yup.string().required("trường không bỏ trống"),
                numberPhone: Yup.string().required("trường không bỏ trống"),
                email: Yup.string().required("trường không bỏ trống"),
                address: Yup.string().required("trường không bỏ trống"),
                typeCustomer: Yup.string().required("trường không bỏ trống")
            })}

            onSubmit={(values) => {
                const createCustomer = async () => {
                    await createCustomer(values)
                }
                createCustomer();
            }}
        >
            {
                <div class="container my-5 m-auto">
                <div class="row border border-success br-10px w-500">
                    <div class="form-right">
                        <form class="row g-3 p-3">
                            <h2 class="text-center">Thêm khách hàng</h2>
                            <div class="col-md-12">
                                <Field type="text" class="form-control" id="nameService" placeholder="Họ và tên"/>
                                
                            </div>
                            <div class="col-md-5">
                                <Field type="text" id="date" class="form-control" placeholder="Ngày sinh"/>
                            </div>
                            <div class="col-md-7">
                                <div class="form-check form-check-inline">
                                    <Field class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="nữ"/>
                                    <label class="form-check-label" for="inlineRadio1">Nữ</label>
                                  </div>
                                  <div class="form-check form-check-inline">
                                    <Field class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="nam"/>
                                    <label class="form-check-label" for="inlineRadio2">Nam</label>
                                  </div>
                                  <div class="form-check form-check-inline">
                                    <Field class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="khác"/>
                                    <label class="form-check-label" for="inlineRadio3">Khác</label>
                                  </div>
                            </div>
                            <div class="col-6">
                                <Field type="number" class="form-control" placeholder="Số CMND"/>
                            </div>
                            <div class="col-md-6">
                                <Field type="text" class="form-control" placeholder="Số điện thoai"/>
                            </div>
                            <div class="col-md-12">
                                <Field type="email" class="form-control" id="nameService" placeholder="Email"/>
                            </div>
                            <div class="col-md-8">
                                <Field type="text" class="form-control" placeholder="Địa chỉ"/>
                            </div>
                            <div class="col-md-4">
                                <select id="inputState" class="form-select">
                                    <option selected>-Loại khách-</option>
                                    <option value="Diamond">Diamond</option>
                                    <option value="Platinium">Platinium</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Member">Member</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-success">Lưu thông tin</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            }
        </Formik>
        
    )
}
export default CreateCustomer;