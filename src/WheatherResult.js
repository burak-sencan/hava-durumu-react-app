import React from 'react'
import "./Wheather.css";

function WheatherResult({date,mintemp,maxtemp,condition,icon}) {
    return (
        <div className="result">
            <h2>{date}</h2>
            <ul>
                <li> <img src={icon} alt="" /> </li>
                <li> {condition}</li>
                <li> {mintemp}/ {maxtemp} C</li>
            </ul>
        </div>        

    )
}

export default WheatherResult
