
function EditServices() {
  return (
    <>
      <div className="container my-5 m-auto">
        <div className="row border border-success br-10px">
            <div className="form-left col-6 fix-padding overflow-visible">
                <img src="https://cdn.scb.com.vn/picture/0512_.webp" className="img-fluid img-form" alt=""/>
            </div>
            <div className="form-right col-6">
                <form className="row g-3 p-3">
                    <h1 className="text-center">Thay đổi thông tin dịch vụ</h1>
                    <div className="col-md-12">
                      <label htmlFor="nameService" className="form-label">Tên dịch vụ:</label>
                      <input type="text" className="form-control" id="nameService"/>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Diện tích sử dụng:</label>
                      <input type="password" className="form-control"/>
                    </div>
                    <div className="col-6">
                      <label className="form-label">Chi phí thuê:</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="col-6">
                      <label className="form-label">Số lượng người tối đa: </label>
                      <input type="number" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputState" className="form-label">Kiểu thuê:</label>
                      <select id="inputState" className="form-select">
                        <option selected></option>
                        <option>Theo năm</option>
                        <option>Theo tháng</option>
                        <option>Theo ngày</option>
                        <option>Theo giờ</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Mô tả: </label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" cols="12"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-success">Lưu thay đổi</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}

export default EditServices;