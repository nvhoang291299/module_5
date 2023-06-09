import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getList } from "../service/Service";

function ListBook() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getListBook = async () => {
      const res = await getList();
      setList((state) => (state = res));
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
                list.map((book) => (
                <tr key={book.id}>
                    <th scope="row">{book.id}</th>
                    <td>{book.title}</td>
                    <td>{book.quantity}</td>
                    <td>
                        <button className="btn btn-secondary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
                ))   
            }
        </tbody>
      </table>
    </div>
  );
}

export default ListBook;
