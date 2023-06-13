import React from "react";
import { useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {listUser, deleteUser} from '../redux/action';

function Users() {
    let users = useSelector(state => state.userState)
    const dispatch = useDispatch();

    useEffect(() => {
        users = dispatch(listUser())
    }, [])

    return (
        <>
            <h1>List User</h1>
            <div>
                    <div className="card card-body">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() =>
                                            dispatch(deleteUser(user.id))}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        </>
    );
}

export default Users;