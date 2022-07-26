import React, { useState } from 'react';

function App()
{
    const color = "#8e44ad";
    const [bg , setbg ] = useState(color);

    const [btncol , setbtnbg ] = useState('#9b59b6');

    const [txt , settxt ] = useState('Click Me');

    const onClk = () =>{
        const color = "#008080";
        setbg(color);
        setbtnbg('#2c3e8b');
        settxt('Hello 😃');
    }

    return (
        <>
            <div className='div' style={{backgroundColor: bg}}>
                <button className='ac' onClick={onClk} style={{backgroundColor:btncol}}>{txt}</button>
            </div>
        </>
    );
}

export default App;