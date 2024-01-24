import React from "react";
import { useState } from "react";

export default function Age(){
        const [age,setAge]=useState("");
        const [data,setData] =useState([{}]);
        const [dropValue,setdropValue] = useState("equalage");
        function setAges(event){
            setAge(event.target.value);
        }
        async function handleStrictEqualSearch(){
          const response = await fetch(`https://backend-252y.onrender.com/find/age/${age}`, {
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
        async function handleLessThanAgeSearch(){
          const response = await fetch(`https://backend-252y.onrender.com/find/lage/${age}`, {
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
        async function handleGreaterThanAgeSearch(){
          const response = await fetch(`https://backend-252y.onrender.com/find/gage/${age}`, {
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
          if(dropValue==="equalage")
            handleStrictEqualSearch();
          if(dropValue==="lessage")
            handleLessThanAgeSearch();
          if(dropValue==="greaterage")
            handleGreaterThanAgeSearch();   
        }
          function handleChange(e){
            setdropValue(e.target.value);
          }
    return(
        <div  style={{"justify-content":"center"}}>
          <div style={{"border": "1px solid #000","margin-top":"0.9em","width":"100%","margin-bottom":"0.9em"}}>
          <div style={{"display": "flex", "justify-content": "center","align-items": "center","margin-top":"1.5em"}}>
                <div>Select the type of Search
                </div>
                <div style={{"margin-left":"1em",}}>
                    <select id="dropdown" onChange={handleChange}>
                    <option value="equalage">Exact Age Search</option>
                    <option value="lessage">&lt; age Search</option>
                    <option value="greaterage">&gt; age Search</option>
                </select>
                </div>
            </div>
        <div style={{"margin-top":"2em","margin-bottom":"2em"}}>
          <div style={{"display": "flex", "justify-content": "center","align-items": "center","margin-top":"2em","margin-bottom":"2em"}}>
            <div>
              <h5>Enter Age:</h5>
            </div>
            <div style={{"margin-left":"1em"}}>
              <input type="text" id="textlabel" value={age} onChange={setAges}></input>
              <button onClick={handleClick}>SEARCH</button>
            </div>
          </div>
             
             
        </div>
        </div>
        <div style={{"margin-top":"3em"}}> 
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
        </div>
    );
}
