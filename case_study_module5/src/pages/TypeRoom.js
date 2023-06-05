import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433" class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
