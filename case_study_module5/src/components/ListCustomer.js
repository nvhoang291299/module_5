import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {getCustomers} from "../service/UseServices";


function ListCustomer() {
  const [customers, setCustomers] = useState([]);

  const getList  = async () => {
    const response = await getCustomers();
    console.log(response);
    setCustomers(response.data)
  }

  useEffect(() => {
    getList()
  }, [])

    return (
        <>
             <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
                    className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className="tz-40">Danh sách khách hàng</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="content container my-4">
        
        <table className="table border border-success">
            <thead>
              <tr className="bg-success text-white">
                <th scope="col">#</th>
                <th scope="col">Họ và tên</th>
                <th scope="col">Ngày sinh</th>
                <th scope="col">Giới tính</th>
                <th scope="col">Số CMND</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Loại khách hàng</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                customers.map((customer) => (
                  <tr>
                    <th scope="row">{customer.id}</th>
                    <td>{customer.fullname}</td>
                    <td>{customer.dateOfBirth}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.idCard}</td>
                    <td>{customer.phoneNumber}</td>
                    <td>{customer.email}</td>
                    <td>{customer.address}</td>
                    <td><p className="badge rounded-pill bg-success text-white">{customer.typeCustomer}</p></td>
                    <td>
                        <Link to="/editCustomer" className="btn btn-success mx-2">Sửa</Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
    </div>
        </>
    )
}

export default ListCustomer;