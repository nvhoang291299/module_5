import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useEffect } from "react";
import { useState } from "react";
import { getListType, updateProduct, findByProductById } from "../service/service";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateProduct() {
    const [types, setTypes] = useState([]);
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const param = useParams();

    const getProduct = async () => {
        const res = await findByProductById(param.id);
        setProduct(res);
    }

    useEffect(() => {
        getProduct()
    }, [])

    const getType = async () => {
        const res = await getListType();
        setTypes(res);
      }
    
      useEffect(() => {
        getType()
      }, [])
    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    code: product.code,
                    nameProduct: product.nameProduct,
                    descriptionProduct: product.descriptionProduct,
                    typeId: product.typeId,
                    price: product.price,
                    quantity: product.quantity,
                    date: product.date
                }}

                validationSchema={
                    Yup.object({
                        code: Yup.string().required("Trường này đang bị bỏ trống").matches(/^(PROD)-[0-9]{4}$/, "mã sản phẩm phải theo dạng PROD-xxxx (x là số)"),
                        nameProduct: Yup.string().required("Trường này đang bị bỏ trống"),
                        descriptionProduct: Yup.string().required("Trường này đang bị bỏ trống"),
                        typeId: Yup.string().required("Trường này đang bị bỏ trống"),
                        price: Yup.number().required("Trường này đang bị bỏ trống"),
                        quantity: Yup.number().required("Trường này đang bị bỏ trống").min(1, "số lượng phải lớn hơn 1"),
                        date: Yup.string().required("Trường này đang bị bỏ trống").matches(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, "ngày phải theo định dạng dd/MM/yyyy"),
                    })
                }
                onSubmit={(values) => {
                    const updateProducts = async () => {
                        await updateProduct(values, product.id);
                        navigate('/');
                        toast.success("Sửa thông tin thành công");
                    }
                    updateProducts()
                }}
            >
                <Form>
                    <div className="container">
                        <h1 className="text-center">Sửa thông tin sản phẩm</h1>
                        <div className="w-500 m-auto">
                        <div className="mb-3">
                            <label for="" className="form-label">Mã sản phẩm</label>
                            <Field type="text" className="form-control" id="" placeholder="" name="code"/>
                            <ErrorMessage name="code" component='span' className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label for="" className="form-label">Tên sản phẩm</label>
                            <Field type="text" className="form-control" id="" placeholder="" name="nameProduct"/>
                            <ErrorMessage name="nameProduct" component='span' className="text-danger"/>

                        </div>
                        <div className="mb-3">
                            <label for="" className="form-label">Loại sản phẩm</label>
                            <Field as='select' className="form-control" id="" name="typeId">
                                <option value=''>-Loại sản phẩm-</option>
                                {
                                    types.map((type) => (
                                        <option value={type.id} key="">
                                            {type.nameType}
                                        </option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="typeId" component='span' className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label for="" className="form-label">Giá sản phẩm</label>
                            <Field type="number" className="form-control" id="" name="price"/>
                            <ErrorMessage name="price" component='span' className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label for="" className="form-label">Số lượng</label>
                            <Field type="number" className="form-control" id="" name="quantity"/>
                            <ErrorMessage name="quantity" component='span' className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label for="" className="form-label">Ngày nhập sản phẩm</label>
                            <Field type="text" className="form-control" id="" name="date"/>
                            <ErrorMessage name="date" component='span' className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label for="" className="form-label">Mô tả sản phẩm</label>
                            <Field type="text" className="form-control" id="" name="descriptionProduct"/>
                            <ErrorMessage name="descriptionProduct" component='span' className="text-danger"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Lưu</button>
                        </div>
                        
                    </div>
                </Form>      
        </Formik>
        </>  
    )
}

export default UpdateProduct;