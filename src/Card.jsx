import React from 'react';

function Card(props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} />
                    <div className='info' style={{ padding: '10px' }}>
                        <span style={{ fontSize: '20px' }}><b>{props.name} - A Netflix original Series</b></span>
                        <div class="content" style={{ padding: '8px' }}>
                            {props.content}
                        </div>
                        <a href={props.link} target="_blank">
                            <button>
                                Watch Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;