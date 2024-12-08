import React from 'react'
import  { useState } from 'react';

const signup = () => {
    const data = {
        name: "",
        email: "",
        password:""
    }
    const [inputData, setInputData] = useState(data)
    const [msg, setMSG] = useState(false)
    const handleInput = (event) => {
        setInputData({...inputData, [event.target.name]:event.target.value})
    }
    const submit = (event) => {
        event.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("ALL FIELDS ARE MANDATORY!")
        } else {
            setMSG(true)
            setTimeout(() => {
            setMSG(false)    
            },4000)
        }
    }
  return (
      <form onSubmit={submit} className='container'>
          <h2>{msg? inputData.name+" : Signup Sucessfully!" : null}</h2>
          <h1>Sign up</h1>  
          <div className='inputs'>
              <input type='text' placeholder='Name' value={inputData.name} onChange={handleInput} />
              <input type='email' placeholder='Email'value={inputData.email} onChange={handleInput} />
              <input type='password' placeholder='Password' value={inputData.password} onChange={handleInput} />
              <button onClick={submit}>SignUp</button>
       </div>
    </form>
      
    
  )
}

export default signup;
