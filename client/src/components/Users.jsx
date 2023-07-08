import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/count")
      .then((result) => setCount(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handelDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((res) => {
        console.log(res);
        location.reload();
      })
      .catch((errr) => {
        console.log(errr);
      });
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2 className="text-center">Users CRUD</h2>
        <Link to={"/create"} className="btn btn-success">
          Add User
        </Link>
        <h5 className="my-2">The Count Of Users is {count}</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success"
                    >
                      Update User
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handelDelete(user._id)}
                    >
                      Delete User
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
