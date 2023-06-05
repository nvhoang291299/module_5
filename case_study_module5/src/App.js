
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <Header/>
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
                <a href="#" className="btn btn-success mx-2">Sửa</a>
                <a href="#" className="btn btn-success">Xóa</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng studio suite hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <a href="#" className="btn btn-success mx-2">Sửa</a>
                <a href="#" className="btn btn-success">Xóa</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng deluxe hướng biển</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <a href="#" className="btn btn-success mx-2">Sửa</a>
                <a href="#" className="btn btn-success">Xóa</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng Superior hướng hồ</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <a href="#" className="btn btn-success mx-2">Sửa</a>
                <a href="#" className="btn btn-success">Xóa</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng Superior hướng vườn</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <a href="#" className="btn btn-success mx-2">Sửa</a>
                <a href="#" className="btn btn-success">Xóa</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng Deluxe hướng vườn</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <a href="#" className="btn btn-success mx-2">Sửa</a>
                <a href="#" className="btn btn-success">Xóa</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Phòng Presidential suite</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <a href="#" className="btn btn-success mx-2">Sửa</a>
                <a href="#" className="btn btn-success">Xóa</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Biệt thự hướng biển có hồ bơi riêng</h5>
                <p class="card-text">Diện tích phòng: 85.8m2</p>
                <a href="#" className="btn btn-success mx-2">Sửa</a>
                <a href="#" className="btn btn-success">Xóa</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
