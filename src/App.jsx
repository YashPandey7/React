import React, { useState } from 'react';

function App (){
    const time = new Date().toLocaleTimeString();
    const [exacttime ,updatetime] = useState(time);

    const onclick = () =>{
        const time = new Date().toLocaleTimeString();
        updatetime(time);
    }
    
    setInterval(onclick , 1000);

    return(
        <>
            <div>
                <h1>Time {exacttime}</h1>
                {/* <button onClick={onclick}>Get Time</button> */}
            </div>
        </>
    );
}

export default App;