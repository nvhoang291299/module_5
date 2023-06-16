

function ListContact() {
  
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
                    class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="tz-40">Danh sách hợp đồng</h5>
                </div>
            </div>
        </div>
    </div>
    <div class="content container my-4">
        <table class="table border border-success">
            <thead>
              <tr class="bg-success text-white">
                <th scope="col">#</th>
                <th scope="col">Số hợp đồng</th>
                <th scope="col">Họ tên người thuê</th>
                <th scope="col">Ngày bắt đầu</th>
                <th scope="col">Ngày kết thúc</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Số tiền cọc</th>
                <th scope="col">Tổng thanh toán</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Nguyễn Viết Hoàng</td>
                <td>07/06/2023</td>
                <td>10/06/2023</td>
                <td>0987654321</td>
                <td>3600000</td>
                <td>7600000</td>
                <td><p class="badge rounded-pill bg-success text-white">Đã thanh toán</p></td>
              </tr>
            </tbody>
          </table>
    </div>
        </>
    )
}

export default ListContact;