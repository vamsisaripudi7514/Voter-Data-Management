import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from './backgroundimage.jpg';

const Create = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var addUser = { fname, email, age };
    console.log(addUser);

    const response = await fetch("https://userdata-jb7v.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setName("");
      setEmail("");
      setAge(0);
      setError("");
      navigate("/read");
    }
  };
  const styles = {
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    "color": "black",
    "background-color":"#eeeeee"
};
  return (<>
  <div style={styles}>
    <div className="container my-2" style={{"width":"40%","border": "1px solid #000","margin-bottom":"1em","background-color":"#eeeeec"}}>
      <h1 className="h1 text-center">Fill User Data</h1>

      {error && <div className="alert alert-danger"> {error} </div>}
      <form className="form" onSubmit={handleSubmit} style={{"font-weight":"bold"}}>
        <div className="mb-3 ">
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
        <button type="submit" className="btn btn-primary m-3  " >
          Submit
        </button>
      </form>
    </div></div>
    </>
  );
};

export default Create;