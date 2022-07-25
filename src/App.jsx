import React, { useState } from 'react';

const App = () => {
    const a = new Date().toLocaleTimeString();
    const [time , updte] = useState(a);

    
    setInterval(() => {
        const a = new Date().toLocaleTimeString();
        updte(a);
    }, 1000);

    return (
        <>
            <h1>{time}</h1>
        </>
    );
}

export default App;