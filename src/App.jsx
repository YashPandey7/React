import React from 'react';
import {add , sub , mult , div } from './Cal';

function App(){
    return(
        <>
        <ol>
            <li>{add(10,3)}</li>
            <li>{sub(10,3)}</li>
            <li>{mult(10,3)}</li>
            <li>{div(10,3)}</li>
        </ol>
    </>
    );
}
    
export default App;