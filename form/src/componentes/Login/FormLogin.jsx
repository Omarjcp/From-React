import React, { useState } from 'react' 
import "./FormLogin.css"
import { validacionLogin } from '../Validaciones/validaciones'


export default function Form() {

    const [input, setInput] = useState({
        username: '',
        password: ''
      })
    
    const [error, setError] = useState('')

      const handleOnChange = (e) => {
          setInput({
              ...input,
              [e.target.name]: e.target.value
          })

          setError(validacionLogin({
            ...input,
            [e.target.name]: e.target.value
          }))
      }

      const handleOnSubmit = (e) => {
          e.preventDefault()
      }

    return (
        <>
            <div className="container">

                <form className="container-form" onSubmit={handleOnSubmit}>
                
                    <div className="container-username">
                        <input
                        type="text"
                        name="username"
                        className={error.username && "danger"}
                        placeholder="Username"
                        value={input.username}
                        onChange={handleOnChange}
                        />
                        {error.username && (
                            <p className="danger">* {error.username}</p>
                        )}
                    </div>
                    
                    <div className="container-password">
                        <input
                        type="password" 
                        name="password" 
                        className="password" 
                        placeholder="Password" 
                        value={input.password} 
                        onChange={handleOnChange}
                        />
                        {error.password && (
              <p className="danger">* {error.password}</p>
            )}
                    </div>

                    <div className="d-grid gap-2 col-5">
                        <button className="btn btn-primary" type="submit">Button</button>
                    </div> 

                </form>   
                
            </div>

        </>
    )
}