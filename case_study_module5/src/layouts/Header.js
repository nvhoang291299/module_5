import { Routes, Route, Link } from "react-router-dom";
import TypeRoom from "../components/TypeRoom";

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-furama color-white">
        <div className="container">
            <a className="navbar-brand" href="#">
            <img
                src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
                alt="" style={{width: "65%"}}
            />
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                    Giới thiệu
                </a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/typeRoom">
                        Loại phòng
                    </Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Ẩm thực
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Hội nghị & Sự kiện
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    SPA
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    giải trí
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Điểm đến
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Ưu đãi
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <Routes>
            <Route path="/typeRoom" element={<TypeRoom />} />
        </Routes>
    </>
        
  );
}
export default Header;
