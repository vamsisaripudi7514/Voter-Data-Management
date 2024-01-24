import React, { useState } from "react";
import backgroundImage from "../Voting.jpg";
import India from "./India";
export default function Home() {
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        "color": "white",
        "fontSize": "2em",
    };
    return (
        <>
            <div style={styles} >
                <div style={{background:'rgba(0, 0, 0, 0.272)'}} className="d-flex align-items-center - justify-content-center p-3 w-100 h-100  bg-opacity-50   ">

                <div className="w-50 p-2">

                    <h1 style={{ "font-size": "2em" }}>Voter Data Management System</h1>
                    <h2>Use the navbar to manage records</h2>
                </div>

                <India/>
                </div>
            </div>

        </>
    )
}