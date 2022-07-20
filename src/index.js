import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const name = "Dark Batman";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/400/300";
const link = "https://yashpandey.netlify.app/"

ReactDOM.render(
    <>
        <h1 className='a'>Hi It's {name}</h1>

        <div className='b'>
            <a href={link} target="_blank">
                <img src={img1} />
            </a>
            <img src={img2} />
            <img src={img3} />
        </div>
    </>,
    document.getElementById('root')
);