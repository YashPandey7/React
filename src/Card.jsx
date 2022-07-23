import React from 'react';

function Card(props)
{
    return (
        <>
            <div className="card">
                <h1>{props.fname}</h1>
                <img src={props.imgsrc}/>
            </div>
        </>
    );
}

export default Card;