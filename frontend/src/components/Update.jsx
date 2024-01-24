import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [error, setError] = useState();
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  //receving single user data
  const getSingleData = async () => {
    const response = await fetch(`https://backend-252y.onrender.com/${id}`);
    const result = await response.json();

    if (response.ok) {
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    }
  };

  //passing edited data to backend
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { fname, email, age };
    console.log(updatedUser);
    const response = await fetch(`https://backend-252y.onrender.com/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    const result = await response.json();
    if (response.ok) {
      console.log("updated result..", result);
      setError("");
      navigate("/read");
    }
    if (!response.ok) {
      console.log(response.error);
      setError(response.error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <div className="container my-2" style={{"width":"40%","border": "1px solid #000","margin-bottom":"1em","background-color":"#eeeeee"}}>
      <h1 className="h1 text-center">Edit User Data</h1>

      {error && <div className="alert alert-danger"> {error} </div>}
      <form className="form" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={fname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Make Changes
        </button>
      </form>
    </div>
  );
};

export default Update;
