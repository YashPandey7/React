import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Dark" , lname = "Batman" ;
const d = new Date();

ReactDOM.render(
    <>
        <h1>{`My name is ${fname} ${lname}`}</h1>
        <p>{`But you can call me just "${lname}" 😂`}</p>
        <p>{`Todays Date is ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}</p>
        <p>{`Todays Time is ${d.toLocaleTimeString()}`}</p>
    </>
, document.getElementById("root"));