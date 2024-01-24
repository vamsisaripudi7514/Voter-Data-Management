import React from "react";
import { useState } from "react";

export default function Name(){
        const [fname,setName]=useState("");
        const [data,setData] =useState([{}]);
        const [dropValue,setdropValue]=useState("fname");
        function setMail(event){
            setName(event.target.value);
        }
        async function handleFullNameSearch(){
          const response = await fetch(`http://localhost:5000/find/name/${fname}`, {
            method:"GET"
          });
      
          const result1 = await response.json();
          if (!response.ok) {
            console.log(result1);
            
          }
          if (response.ok) {
              setData(result1);
          }
        }
        async function handlePartialNameSearch(){
          const response = await fetch(`http://localhost:5000/find/pname/${fname}`, {
            method:"GET"
          });
      
          const result1 = await response.json();
          if (!response.ok) {
            console.log(result1);
            
          }
          if (response.ok) {
              setData(result1);
          }
        }
        async function handleClick() {
          if(dropValue==="pname")
            handlePartialNameSearch();
          if(dropValue==="fname")
            handleFullNameSearch();   
        }
          function handleChange(e){
              setdropValue(e.target.value);
          }
    return(
        <div>
          <div style={{"border": "1px solid #000","margin-top":"0.9em","margin-bottom":"1em"}}>
            <div style={{"display": "flex", "justify-content": "center","align-items": "center","margin-top":"1.5em"}}>
                <div>Select the type of Search
                </div>
                <div style={{"margin-left":"1em",}}>
                    <select id="dropdown" onChange={handleChange}>
                    <option value="fname">Full Name Search</option>
                    <option value="pname">Partial Name Search</option>
                </select>
                </div>
            </div>
          <br/>
          <div style={{"display": "flex", "justify-content": "center","align-items": "center","margin-top":"2em","margin-bottom":"2em"}}>
            <div style={{"margin-right":"1em"}}>
              <h5>Enter Name:</h5>
            </div>
            <div>
              <input type="text" id="textlabel" value={fname} onChange={setMail}></input>
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