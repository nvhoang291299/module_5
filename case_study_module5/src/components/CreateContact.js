function CreateContact() {
    return (
        <div className="container my-5 m-auto">
        <div className="row border border-success br-10px w-700">
            <div className="form-right">
                <form className="row g-3 p-3">
                    <h2 className="text-center">Hợp đồng thuê dịch vụ</h2>
                    <form>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Số hợp đồng:</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Họ tên người thuê:</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control"/>
                          </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Ngày bắt đầu:</label>
                            <div className="col-sm-4">
                              <input type="date" className="form-control"/>
                            </div>
                            <label className="col-sm-2 col-form-label">Ngày kết thúc:</label>
                            <div className="col-sm-4">
                              <input type="date" className="form-control"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Số tiền cọc trước:</label>
                            <div className="col-sm-4">
                              <input type="text" className="form-control"/>
                            </div>
                            <label className="col-sm-2 col-form-label">Tổng thanh toán:</label>
                            <div className="col-sm-4">
                              <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Tạo hợp đồng</button>
                      </form>
                </form>
            </div>
        </div>
    </div>
    )
}

export default CreateContact;