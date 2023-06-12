import { Link } from "react-router-dom";

function ListCustomer() {
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
              <tr>
                <th scope="row">1</th>
                <td>Nguyễn Viết Hoàng</td>
                <td>02/01/2000</td>
                <td>nam</td>
                <td>18777444</td>
                <td>0987654321</td>
                <td>hoang@gmail.com</td>
                <td>Nghệ An</td>
                <td><p className="badge rounded-pill bg-success text-white">Diamond</p></td>
                <td>
                    <Link to="/editCustomer" className="btn btn-success mx-2">Sửa</Link>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
        </>
    )
}

export default ListCustomer;