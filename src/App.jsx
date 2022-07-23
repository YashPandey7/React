import React from 'react';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';



function App() {
    return (
        <>
            <div class="row">
                {Sdata.map((val)=> {
                    return (
                        <>
                            <div class="col-md-4">
                                <Card key={val.id} fname={val.fname} imgsrc={val.imgsrc} />
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default App;