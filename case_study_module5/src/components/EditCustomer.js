function EditCustomer() {
    return(
        <>
            <div className="container my-5 m-auto">
        <div className="row border border-success br-10px w-500">
            <div className="form-right">
                <form className="row g-3 p-3">
                    <h2 className="text-center">Thay đổi thông tin khách hàng</h2>
                    <div className="col-md-12">
                        <input type="text" className="form-control" id="nameService" placeholder="Họ và tên"/>
                    </div>
                    <div className="col-md-5">
                        <input type="text" onfocus="(this.type = 'date')"  id="date" className="form-control" placeholder="Ngày sinh"/>
                    </div>
                    <div className="col-md-7">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label className="form-check-label" for="inlineRadio1">Nữ</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label className="form-check-label" for="inlineRadio2">Nam</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                            <label className="form-check-label" for="inlineRadio3">Khác</label>
                          </div>
                    </div>
                    <div className="col-6">
                        <input type="number" className="form-control" placeholder="Số CMND"/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Số điện thoai"/>
                    </div>
                    <div className="col-md-12">
                        <input type="email" className="form-control" id="nameService" placeholder="Email"/>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="form-control" placeholder="Địa chỉ"/>
                    </div>
                    <div className="col-md-4">
                        <select id="inputState" className="form-select">
                            <option selected>-Loại khách-</option>
                            <option>Diamond</option>
                            <option>Platinium</option>
                            <option>Gold</option>
                            <option>Silver</option>
                            <option>Member</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-success">Lưu thay đổi</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </>
    )
}

export default EditCustomer;