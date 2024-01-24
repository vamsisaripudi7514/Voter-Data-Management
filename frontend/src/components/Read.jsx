import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function handleDelete(id) {
    const response = await fetch(`https://userdata-jb7v.onrender.com/${id}`, {
      method:"DELETE"
    });

    const result1 = await response.json();
    if (!response.ok) {
      setError(result1.error);
    }
    if (response.ok) {
      console.log("deleted", response.ok);
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  }

  async function getData() {
    const response = await fetch("https://userdata-jb7v.onrender.com/");
    const result = await response.json();
    console.log("result..", result);
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      setData(result);
      setError("");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2" >
      {error && <div className="alert alert-danger"> {error} </div>}
      <div className="row" >
        {data?.map(ele => (
          <div key={ele._id} className="col-3" style={{"padding-top":"1em"}}>
            <div className="card" style={{"background-color":"#eeeeef"}}>
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.age}</p>
                <Link to={`/${ele._id}`} className="card-link" style={{"cursor":"pointer"}}>Edit</Link>

                <a className="card-link" style={{"cursor":"pointer"}} onClick={() => handleDelete(ele._id)}>
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;