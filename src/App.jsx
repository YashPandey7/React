import React, { useState } from 'react';

const App = () => 
{
    const [fullname , setfullname]= useState({
        fname : '',
        lname : ''
    } );

    const inputevent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;
        
        setfullname((b) => {
            if(name === 'n_fname'){
               return{
                fname : value,
                lname : b.lname
               };
            }
            else if(name === 'n_lname'){
                return{
                    fname : b.fname,
                    lname : value 
                };
            }
        })
    };

    const onclk = (a) =>{
        a.preventDefault();
    };

    return(
        <>
        <div style={{textAlign:'center'}}>
        <form onSubmit={onclk}>
            <h1>
                {`Hi ${fullname.fname} ${fullname.lname}`}
            </h1>
            <input type='text' placeholder='Enter your fname...' onChange={inputevent} name='n_fname'/>
            <br/><br/>
            <input type='text' placeholder='Enter your lname...' onChange={inputevent} name='n_lname'/>
            <br/><br/>
            <button type='submit'>Submit</button>
        </form>
        </div>                        
        </>
    );
}

export default App;