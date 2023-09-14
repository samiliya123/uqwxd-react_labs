import React, { useState } from 'react'


export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  

  const handleSubmit = (event) => {
    console.log(`this is the email: ${email}, the password: ${password}`);
    event.preventDefault()
  }

  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <label >
                Email: <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                Password: <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button>click</button>
        </form>
    </div>
 
  )
}
