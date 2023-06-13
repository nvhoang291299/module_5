function CreateCustomer(params) {
    return (
        <div class="container my-5 m-auto">
        <div class="row border border-success br-10px w-500">
            <div class="form-right">
                <form class="row g-3 p-3">
                    <h2 class="text-center">Thêm khách hàng</h2>
                    <div class="col-md-12">
                        <input type="text" class="form-control" id="nameService" placeholder="Họ và tên"/>
                    </div>
                    <div class="col-md-5">
                        <input type="text" onfocus="(this.type = 'date')"  id="date" class="form-control" placeholder="Ngày sinh"/>
                    </div>
                    <div class="col-md-7">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label class="form-check-label" for="inlineRadio1">Nữ</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">Nam</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                            <label class="form-check-label" for="inlineRadio3">Khác</label>
                          </div>
                    </div>
                    <div class="col-6">
                        <input type="number" class="form-control" placeholder="Số CMND"/>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Số điện thoai"/>
                    </div>
                    <div class="col-md-12">
                        <input type="email" class="form-control" id="nameService" placeholder="Email"/>
                    </div>
                    <div class="col-md-8">
                        <input type="text" class="form-control" placeholder="Địa chỉ"/>
                    </div>
                    <div class="col-md-4">
                        <select id="inputState" class="form-select">
                            <option selected>-Loại khách-</option>
                            <option>Diamond</option>
                            <option>Platinium</option>
                            <option>Gold</option>
                            <option>Silver</option>
                            <option>Member</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-success">Lưu thông tin</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
export default CreateCustomer;