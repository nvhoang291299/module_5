import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteBook, getBookById, getList } from "../service/Service";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


function ListBook() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [idDel, setIdDel] = useState(0);


  const getListBook = async () => {
    const res = await getList();
    setList(res);
  };

  const handleConfirm = (book) => {
    setTitle(book.title)
    setIdDel(book.id)
    console.log(title, book);
  }

  const handleDelete = async (idDel) => {
    const bookDel = await getBookById(idDel)
    await deleteBook(bookDel, idDel);
    toast.success("xóa thành công");
    getListBook();
  }  

  useEffect(() => {
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
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"     
                          onClick={() => handleConfirm(book)}        
                          >Delete
                        </button>
                    </td>
                </tr>
              ))   
            }
        </tbody>
      </table>
      <div className="modal" tabIndex={-1} id={"exampleModal"}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger">Xác nhận</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div>Bạn có muốn xóa <span>{title}</span></div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" data-bs-dismiss="modal"
                            className="btn btn-danger" onClick={() => handleDelete(idDel)} >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
      <ToastContainer />
    </div>
  );
}

export default ListBook;
