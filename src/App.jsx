import React, { useState } from 'react';

const App = () => 
{
    const [fullname , setfullname]= useState({
        fname : '',
        lname : '',
        email : '',
        phone : ''
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
                lname : b.lname,
                email : b.email,
                phone : b.phone
               };
            }
            else if(name === 'n_lname'){
                return{
                    fname : b.fname,
                    lname : value,
                    email : b.email,
                    phone : b.phone 
                };
            }
            else if(name === 'n_email'){
                return{
                    fname : b.fname,
                    lname : b.lname ,
                    email : value,
                    phone : b.phone
                };
            }
            else if(name === 'n_number'){
                return{
                    fname : b.fname,
                    lname : b.lname,
                    email : b.email,
                    phone : value 
                };
            }
        })
    };

    const onclk = (a) =>{
        a.preventDefault();
        alert('Submitted successfully');
    };

    return(
        <>
        <div style={{textAlign:'center'}}>
        <form onSubmit={onclk}>
            <h1>
                {`Hi ${fullname.fname} ${fullname.lname}`}
            </h1>
            <p>Your Email is {fullname.email}</p>
            <p>Your Phone Number is {fullname.phone}</p>
            <input type='text' placeholder='Enter your first name...' onChange={inputevent} name='n_fname'/>
            <br/><br/>
            <input type='text' placeholder='Enter your Last name...' onChange={inputevent} name='n_lname'/>
            <br/><br/>
            <input type='email' placeholder='Enter your Email...' onChange={inputevent} name='n_email'/>
            <br/><br/>
            <input type='number' placeholder='Enter your Phone number...' onChange={inputevent} name='n_number'/>
            <br/><br/>
            <button type='submit'>Submit</button>
        </form>
        </div>                        
        </>
    );
}

export default App;