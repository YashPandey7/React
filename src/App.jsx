import React from 'react';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

function ncard(val)
{
    return( 
        <>
            <div class="col-md-4">
                    <Card fname={val.fname} imgsrc={val.imgsrc} />
            </div>
        </>
    );
}

function App() {
    return (
        <>
            <div class="row">
                {Sdata.map(ncard)}
            </div>
        </>
    );
}

export default App;