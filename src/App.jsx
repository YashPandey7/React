import React from 'react';
import { Else } from './Else';
import './index.css';
import { Mcu } from './Mcu';


const out = "mcu";

const Favs = () => {
if(out === "mcu")
{
    return  <Mcu/>
}
else{
    return <Else/>
}
}

function App() {
    return (
        <>
            <div class="row">
                <Favs />
            </div>
        </>
    );
}

export default App;