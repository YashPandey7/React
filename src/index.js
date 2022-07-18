import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Dark" , lname = "Batman" ;

ReactDOM.render(
    <>
        <h1>{`My name is ${fname} ${lname}`}</h1>
        <p>{`But you can call me just "${lname}" 😂`}</p>
    </>
, document.getElementById("root"));