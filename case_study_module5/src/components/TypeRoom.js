
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {getListFacility} from "../service/UseServices";
import ReactPaginate from 'react-paginate';

function TypeRoom() {
  const [listFacility, setListFacility] = useState([]);

  const getList  = async () => {
    const response = await getListFacility();
    console.log(response);
    setListFacility(response.data)
  }

  useEffect(() => {
    getList()
  }, [])
  return (
    <>
      <div className='container-fluid' style={{paddingLeft: 0, paddingRight: 0}}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    <h1 className="tz-40">Danh sách dịch vụ</h1>
                </div>
                </div>
            </div>
        </div>
      </div>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
          {
            listFacility && listFacility.map((facility) => (
              <div className="col">
                <div className="card h-100">
                  <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{facility.nameService}</h5>
                    <p className="card-text">Diện tích phòng: {facility.area}m2</p>
                    <Link to="/editService" className="btn btn-success mx-2">Sửa</Link>
                    <Link href="#" className="btn btn-danger">Xóa</Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        // pageCount={}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        // onPageChange={}
        containerClassName="pagination"
        activeClassName="active"
        // forcePage={}
      />
      </div>
    </>
  );
}

export default TypeRoom;
