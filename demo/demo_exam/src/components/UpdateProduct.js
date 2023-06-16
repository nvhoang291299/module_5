import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { updateProduct, getListProduct, findByProductById } from "../http-common/http-request";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListTypeProduct } from "../http-common/http-request";


function UpdateProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [types, setTypes] = useState([]);


    const param = useParams();
    console.log(param.id);

    const getProduct = async () => {
        const res = await findByProductById(param.id);
        console.log(res);
        setProduct(res);
    }
    useEffect(() => {
        getProduct()
    }, [])

    const getListType = async () => {
        const res = await getListTypeProduct();
        setTypes(res);
    }

    useEffect(() => {
        getListType()
    }, [])

console.log(product);

    return (
       <>
        <Formik 
            enableReinitialize={true}
            initialValues={{
                codeProduct: product.codeProduct,
                nameProduct: product.nameProduct,
                price: product.price,
                typeId: product.typeId,
                date: product.date
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
                const editProduct = async () => {
                    await updateProduct(values, product.id);
                    navigate('/');
                }
                editProduct()
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
                <label>date</label>
                <Field type="date" name="date" />
                <ErrorMessage name="date" component='span' className="text-danger"/>
                <button type="submit">save</button>
            </Form>
        </Formik>
       </>
    )
}

export default UpdateProduct;