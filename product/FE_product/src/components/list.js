import { useEffect } from "react";
import { useState } from "react";
import { getListProduct, getListType, searchProduct, deleteProduct } from "../service/service";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ReactPaginate from 'react-paginate';
import { useSearchParams } from "react-router-dom";


function List() {
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [idProduct, setIdProduct] = useState(0);
  const [nameProduct, setNameProduct] = useState('');

  const getList = async () => {
      const res = await getListProduct();
      setProducts(res);
  }

  const getType = async () => {
    const res = await getListType();
    setTypes(res);
  }

  const handleSearch = async () => {
    let nameProduct = document.querySelector(".searchName").value;
    let typeProduct = document.querySelector(".searchType").value;

    const res = await searchProduct(nameProduct, typeProduct);
    setProducts(res);
  }

  const handleConfirm = (product) => {
    setIdProduct(product.id);
    setNameProduct(product.nameProduct);
    console.log(idProduct, nameProduct);
  }

  const handleDelete = async (id) => {
    await deleteProduct(id);
     getList();
  } 

  const handlePageClick = (e) => {
    console.log(e.select);
  }

  useEffect(() => {
    getList()
  }, [])

  useEffect(() => {
    getType()
  }, [])

    return (
      <>
        <div className="container my-3">
        <div className="row">
          <div className="col-3">
            <Link className="btn btn-success" to="/create">
              Tạo sản phẩm
            </Link>
          </div>
          <div className="col-9 d-flex">
            <input
            type="search"
            className="searchName form-control w-300 mx-2"
            placeholder="tìm kiếm theo tên"
            aria-label="Search"
          />
          <select className="searchType form-control width-100 mx-2">
            <option value="">-Loại sản phẩm-</option>
            {types.map((type, index) => (
              <option value={type.id} key={index}>
                {type.nameType}
              </option>
            ))}
          </select>
          <button onClick={() => handleSearch()} className="btn btn-secondary">Tìm kiếm</button>
            </div>
          </div>
          <h1 className="text-center">Danh sách sản phẩm</h1>
          {
            products.length === 0 ? <h1>Không tìm thấy sản phẩm</h1> : <table className="table table-striped border bounded-1">
            <thead>
              <th>STT</th>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Thể loại</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Ngày nhập</th>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.code}</td>
                  <td>{product.nameProduct}</td>
                  <td>
                    {/* {types.map((type) => {
                      if (type.id == product.typeId) {
                        return type.nameType;
                      }
                    })} */}
                      {product.typeProduct.nameType}
                  </td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.dateAdded}</td>
                  <td>
                      <Link to={`/update/${product.id}`} className="btn btn-primary mx-2">Sửa</Link>
                      <button type="button" className="btn btn-danger" 
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={() => handleConfirm(product)}
                      >Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          }
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Xác nhận</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {`Bạn có muốn xóa ${nameProduct}`}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(idProduct)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={products.length}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
          <ToastContainer />
        </div>
      </>
    );
}

export default List;