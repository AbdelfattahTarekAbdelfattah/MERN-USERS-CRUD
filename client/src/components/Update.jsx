import { useParams ,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/${id}`)
      .then((result) =>{
        console.log(result)
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age)
      })
      .catch((err) => console.log(err));
  });

  // function that get the form request
  const updateUser = (e)=>{
    e.preventDefault();
    axios
      .put("http://localhost:3001/update/" + id,{name,age,email})
      .then((result) => {
        console.log(result)
        navigate("/"); // equal to res.redirect("/")
      })
      .catch((err) => console.log(err));
  }
  // end function

  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={updateUser}>
            <h2>Update User</h2>
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter User Name"
                className="form-control"
                value={name}
                  onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter User Email"
                className="form-control"
                value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                name="age"
                id="age"
                placeholder="Enter User Age"
                className="form-control"
                value={age}
                  onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
