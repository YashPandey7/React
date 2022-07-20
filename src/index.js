import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let a = new Date();
let b = a.getHours();
let c = '';
let sty = {};

if (b >= 0 && b < 12) {
    c = 'Good Morning';
    sty.color = 'green';
}
else if (b >= 12 && b < 17) {
    c = 'Good Afternoon';
    sty.color = 'orange';
}
else if (b >= 17 && b <20 ) {
    c = 'Good evening';
    sty.color = 'blue';
}
else {
    c = 'Good Night';
    sty.color = 'black';
}

ReactDOM.render(
    <>
        <h1 style={{color : 'rgb(180, 100, 139)'}}>Hello sir, <span style={sty}>{c}</span> </h1>
    </>,
    document.getElementById('root')
);