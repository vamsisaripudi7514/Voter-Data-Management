import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function handleSearch(){
    //const email = document.getElementById("textlabel");
    // if(!email.value){
    //     console.log("OK")
    //}
}

export default function Email(){
    const [email,setEmail]=useState("");
    const [data,setData] =useState([{}]);
    const[error,setError]=useState();
    function handleClick(){

    }
    function setMail(event){
        setEmail(event.target.value);
    }
    async function handleClick() {
        const response = await fetch(`http://localhost:5000/find/email/${email}`, {
          method:"GET"
        });
    
        const result1 = await response.json();
        if (!response.ok) {
          console.log(result1);
          setError(result1.error);
        }
        if (response.ok) {
            setData(result1);
        }
      }
    return(
        <div>
          {error && <div className="alert alert-danger"> {error} </div>}
          <div style={{"border": "1px solid #000","margin-top":"0.9em"}}>
          <div style={{"display": "flex", "justify-content": "center","align-items": "center","margin-top":"2em","margin-bottom":"2em"}}>
            <div style={{"margin-right":"1em"}}>
              <h5>Enter the Mail:</h5>
            </div>
            <div>
              <input type="text" id="textlabel" value={email} onChange={setMail}></input>
              <button onClick={handleClick}>SEARCH</button>
            </div>
          </div>
          </div>
             <div className="row">
        {data?.map(ele => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.age}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>

        </div>
    );
}