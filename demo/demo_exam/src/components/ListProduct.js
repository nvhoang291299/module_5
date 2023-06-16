import { useEffect, useState } from "react";
import { deleteProduct, getListProduct, getListTypeProduct, searchProduct,  } from "../http-common/http-request";
import {Link} from "react-router-dom";


function ListProduct() {
    const [products, setProducts] = useState([]);
    const [types, setTypes] = useState([]);
    const [idProduct, setIdProduct] = useState(0);
    const [nameProduct, setNameProduct] = useState('');


    const getList = async () => {
        const res = await getListProduct();
        setProducts(res);
    }

    const getListType = async () => {
        const res = await getListTypeProduct();
        setTypes(res);
    }

    const handleConfirm = (product) => {
        setIdProduct(product.id);
        setNameProduct(product.nameProduct);
        console.log(idProduct, nameProduct);
    }

    const handleSearch = async () => {
        let name = document.querySelector(".searchName").value;
        let type = document.querySelector(".searchType").value;
        const res = await searchProduct(name, type);
        setProducts(res);
    }

    useEffect(() => {
        getList()
    }, [])

    useEffect(() => {
        getListType()
    }, [])

   

    const handleDelete = async (id) => {
       await deleteProduct(id);
        getList();
    } 

    console.log(products);
    return (
        <>
        <form>
            <input type="search" className="searchName" />
            <select className="searchType">
                <option value="">-type product-</option>
                {
                    types.map((type) => (
                        <option value={type.typeId}>{type.name}</option>
                    ))
                }
            </select>
            <button type="button" onClick={() => handleSearch()}>search</button>
        </form>

        <Link to="/create" className="btn btn-primary">Create</Link>
            <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>giá</th>
                    <th>loại sản phẩm</th>
                    <th>ngày sản xuất</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                         products.map((product, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{product.codeProduct}</td>
                                <td>{product.nameProduct}</td>
                                <td>{product.price}</td>
                                <td>{types.map((type) => {
                                    if(type.typeId == product.typeId) {
                                        return type.name
                                    }
                                })}</td>
                                <td>{product.date}</td>
                                <td>
                                <Link to={`/update/${product.id}`} className="btn btn-primary">Update</Link>
                                <button type="button" className="btn btn-danger" 
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    onClick={() => handleConfirm(product)}
                                >Delete</button>
                                </td>
                            </tr>
                        ))
                }
            </tbody>
        </table>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {`Bạn có muốn xóa ${nameProduct}`}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={() => handleDelete(idProduct)}>Save changes</button>
      </div>
    </div>
  </div>
        </div>
        </>
        
    )
}

export default ListProduct;