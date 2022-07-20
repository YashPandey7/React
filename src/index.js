import React from 'react';
import ReactDOM from 'react-dom';

const name = "Dark Batman";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/400/300";
const link = "https://yashpandey.netlify.app/"

ReactDOM.render(
    <>
        <h1 contentEditable="true">Hii Its {name}</h1>
        <a href={link} target="_blank">
            <img src={img1} />
        </a>
            <img src={img2} />
            <img src={img3} />
        
    </>,
    document.getElementById('root')
);