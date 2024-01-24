import React from "react";
import Age from "../Finders/Age";
import Email from "../Finders/Email";
import Name from "../Finders/Name";
// import { Navigate } from "react-router-dom";
import { useState } from "react";


export default function Find(){
    const [selectedValue, setSelectedValue] = useState('name');
    function handleChange(event){
        setSelectedValue(event.target.value)
    }
    return(
        <div >
            <div style={{"display": "flex", "justify-content": "center","align-items": "center","margin-top":"1em"}}>
                <div>Select the Method of find 
                </div>
                <div style={{"margin-left":"1em"}}>
                    <select id="dropdown" onChange={handleChange}>
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="age">age</option>
                </select>
                </div>
            </div>
            
            
             {selectedValue === 'email' && <Email/>}
             {selectedValue === 'name' && <Name/>}
             {selectedValue === 'age' && <Age/>}
        </div>
    );
};