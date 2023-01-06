import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sign = () => {

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfrimPassword] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Las contraseñas no coinciden!");
            return;
        }

        try {

            const {data} = await axios.post("/api/users/register", {
                name,
                email,
                password,
                address,
                phone
            });
            //localStorage.setItem("userInfo", JSON.stringify(data));
            alert("Te has registrado con éxito!");
            navigate('/login');


        } catch(error) {

            console.log("Error!");
            alert("Regristo fallido, por favor intente de nuevo!");
        }
    }

  return (
    <div className='form-row'>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input required onChange={(e) => setName(e.target.value)} type="text" id='name' />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required onChange={(e) => setEmail(e.target.value)} type="email" id='email' />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input required onChange={(e) => setPassword(e.target.value)} type="password" id='password' />
            </div>
            <div className="form-group">
                <label htmlFor="r_password">Confirmar contraseña</label>
                <input required onChange={(e) => setConfrimPassword(e.target.value)} type="password" id='r_password' />
            </div>
            <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <input required onChange={(e) => setAddress(e.target.value)} type="text" id='address' />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input required onChange={(e) => setPhone(e.target.value)} type="text" id='phone' />
            </div>
            <div className="form-btn">
                <button type='submit'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Registrarse</button>
            </div>
            <div className="form-footer">
                <Link to="/login">Acceder</Link>
            </div>
        </form>
    </div>
  )
}

export default Sign
