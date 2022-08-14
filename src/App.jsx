import React, { useState } from 'react';
import './index.css';

const App = () => {
    const a = new Date().toLocaleTimeString();
    const [Time, setTime] = useState(a);

    const onclk = () => {
        const a = new Date().toLocaleTimeString();
        setTime(a);
    }

    setInterval(onclk,1000);

    return (
        <>
            <div style={{fontSize:'28px'}}>{Time}</div>
            <br/>
            {/* <button onClick = {onclk}>Update</button> */}
        </>
    );
}

export default App;