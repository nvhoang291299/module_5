function CreateService() {
    return (
      <>
        <div class="container my-5 m-auto">
        <div class="row border border-success br-10px">
            <div class="form-left col-6 fix-padding">
                <img src="https://cdn.scb.com.vn/picture/0512_.webp" class="img-fluid img-form" alt=""/>
            </div>
            <div class="form-right col-6">
                <form class="row g-3 p-3">
                    <h2 class="text-center">Thêm mới dịch vụ</h2>
                    <div class="col-md-12">
                      <label for="nameService" class="form-label">Tên dịch vụ:</label>
                      <input type="text" class="form-control" id="nameService"/>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Diện tích sử dụng:</label>
                      <input type="password" class="form-control"/>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Chi phí thuê:</label>
                      <input type="text" class="form-control"/>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Số lượng người tối đa: </label>
                      <input type="number" class="form-control"/>
                    </div>
                    <div class="col-md-6">
                      <label for="inputState" class="form-label">Kiểu thuê:</label>
                      <select id="inputState" class="form-select">
                        <option selected></option>
                        <option>Theo năm</option>
                        <option>Theo tháng</option>
                        <option>Theo ngày</option>
                        <option>Theo giờ</option>
                      </select>
                    </div>
                    <div class="col-md-12">
                      <label for="exampleFormControlTextarea1" class="form-label">Mô tả: </label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="12"></textarea>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-success">Tạo mới</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
      </>
    );
  }
  
  export default CreateService;