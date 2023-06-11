import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteBook, getList } from "../service/Service";
import { useNavigate } from "react-router-dom";
import ModalConfirm from "./ModalConfirm";
import { ToastContainer, toast } from "react-toastify";


function ListBook() {
  const navigate = useNavigate();
  const [isShowModal, setShowModal] = useState(false); 
  const [list, setList] = useState([]);

  const handleClose = () => {
    setShowModal(false);
  }

  const handleDelete = async (book) => {
      await deleteBook(book, book.id);
      toast.success("xóa thành công")
      navigate('/');
  }

  useEffect(() => {
    const getListBook = async () => {
      const res = await getList();
      setList(res);
    };
    getListBook();
  }, []);

  return (
    <div className="container">
        <div className="my-5">
            <h1 className="float-start">List book</h1>
            <Link to="/createBook" className="btn btn-success float-end">Add new book</Link>
        </div>
      
      <table className="table w-500">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
               list && list.map((book) => (
                <tr key={book.id}>
                    <th scope="row">{book.id}</th>
                    <td>{book.title}</td>
                    <td>{book.quantity}</td>
                    <td>
                        <Link to={"/updateBook/"+ book.id} className="btn btn-secondary mx-3">Update</Link>
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(book)}>Delete</button>
                    </td>
                </tr>
              ))   
            }
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default ListBook;
