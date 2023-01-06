import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler =  async (e) => {
        e.preventDefault();

        try {

            const {data} = await axios.post("/api/users/login", {
                email,
                password
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            alert("Has iniciado sesión correctamente!");
            navigate('/');

        } catch(error) {
            alert("Contraseña o Email inválido!");
            //console.log("Contraseña o Email inválido");
        }
    }

    useEffect(() => {
        if(localStorage.getItem("userInfo")) {
            localStorage.getItem("userInfo");
            navigate('/');
        }
    })

  return (
    <div className='form-row'>
        <div className="form">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-btn">
                    <button><FontAwesomeIcon icon={faLock} /> Acceder</button>
                </div>
                <div className="form-footer">
                    <Link to="/register">Registrarse</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn
