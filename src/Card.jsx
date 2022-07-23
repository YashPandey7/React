import React from 'react';
import Image from './Image';

function Card(props)
{
    return (
        <>
            <div className="card">
                <h1>{props.fname}</h1>
                <Image imgsrc={props.imgsrc}/>
            </div>
        </>
    );
}

export default Card;