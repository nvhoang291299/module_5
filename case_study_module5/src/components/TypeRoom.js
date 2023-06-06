
import { Link } from "react-router-dom";

function TypeRoom() {
  return (
    <>
      {/* <div className='container'>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433" class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
      </div> */}
      <div className='container-fluid' style={{paddingLeft: 0, paddingRight: 0}}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433" class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
      </div>
      <div className='container'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng suite hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng studio suite hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng deluxe hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng deluxe hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng deluxe hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng deluxe hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng deluxe hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng deluxe hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng deluxe hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng deluxe hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <Link href="/editservices" className="btn btn-success mx-2">Sửa</Link>
                <Link href="#" className="btn btn-success">Xóa</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeRoom;
