import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { createProduct } from "../http-common/http-request";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListTypeProduct } from "../http-common/http-request";

function CreateProduct() {
    const [types, setTypes] = useState([]);
    const navigate = useNavigate();

    const getListType = async () => {
        const res = await getListTypeProduct();
        setTypes(res);
    }

    useEffect(() => {
        getListType()
    }, [])

    return (
       <>
        <Formik 
            initialValues={{
                codeProduct: "",
                nameProduct: "",
                price: "",
                typeId: "",
                date: ""
            }}

            validationSchema={
                Yup.object({
                    codeProduct: Yup.string().required("Bắt buộc nhập").matches(/^(SP)-[0-9]{4}$/, "kiểu dạng SP-XXXX"),
                    nameProduct: Yup.string().required("Bắt buộc nhập"),
                    price: Yup.number().required("Bắt buộc nhập").min(1000, "giá trị nhập phải lớn hơn 1000"),
                    typeId: Yup.number().required("Bắt buộc nhập"),
                    date: Yup.date().required("Bắt buộc nhập")

                })
            }
            onSubmit={(values) => {
                const addProduct = async () => {
                    createProduct(values);
                    navigate('/');
                }
                addProduct()
            }}
        >
            <Form>
                <label>code product:</label>
                <Field type="text" name="codeProduct" />
                <ErrorMessage name="codeProduct" component='span' className="text-danger"/>
                
                <label>name product:</label>
                <Field type="text" name="nameProduct" />
                <ErrorMessage name="nameProduct" component='span' className="text-danger"/>
                <label>price</label>
                <Field type="number" name="price" />
                <ErrorMessage name="price" component='span' className="text-danger"/>
                <label>type product</label>
                <Field as="select" name="typeId">
                <option value="">-type product-</option>
                    {
                    types.map((type) => (
                            <option value={type.typeId}>{type.name}</option>
                    ))
                }
                    
                </Field>
                <ErrorMessage name="typeProduct" component='span' className="text-danger"/>
                <label>date</label>
                <Field type="date" name="date" />
                <ErrorMessage name="date" component='span' className="text-danger"/>
                <button type="submit">save</button>
            </Form>
        </Formik>
       </>
    )
}

export default CreateProduct;