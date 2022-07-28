import React, { useState } from 'react';

const App = () => 
{
    const [name , setname]= useState('');
    const [clkname , setclk ] =useState('');

    const inputevent1 = (event) => {
        setname(event.target.value);
    }

    const [email ,setemail] = useState('');
    const [clkemail , setclkemail] = useState('');
    const inputevent2 = (event) => {
        setemail(event.target.value);
    }

    const onclk = (a) =>{
        a.preventDefault();
        setclk(name);
        setclkemail(email);
    }

    return(
        <>
        <div style={{textAlign:'center'}}>
        <form onSubmit={onclk}>
            <h1>
                {`Hi ${clkname}`} <br/> {`Your email Id is ${clkemail}`}
            </h1>
            <input type='text' placeholder='Enter your name...' onChange={inputevent1} value={name}/>
            <br/><br/>
            <input type='text' placeholder='Enter your email...' onChange={inputevent2} value={email}/>
            <br/><br/>
            <button type='submit'>Submit</button>
        </form>
        </div>                        
        </>
    );
}

export default App;