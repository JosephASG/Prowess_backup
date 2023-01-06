import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLock, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import '../../pages/home/home.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Store } from '../../Store';

const Header = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo");

    const { state, dispatch:ctxDispatch } = useContext(Store);
    const {cart, wish} = state;

    const signouthandler = () => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("cartItems");
        alert("¡Tu sesión ha terminado correctamente!");
        navigate("/login");
    }

  return (
    <div className='header-row'>
        <div className="header-menu">
            <div className="header-logo">
                <Link to="/"><img className="header-logo-image" src="./assets/images/others/prowess-logo.png" alt="" /></Link>
            </div>
            <div className="header-nav">
                <NavLink to="/" activeclassname="active">Inicio</NavLink>
                <NavLink to="/shop" activeclassname="active">Tienda</NavLink>
                <NavLink to="/sellers" activeclassname="active">Vendedores</NavLink>
            </div>
            <div className="header-action">
                {userInfo && (
                    <>
                        <Link to="/account"><FontAwesomeIcon icon={faHome} /></Link>
                        <Link to="/follow"><FontAwesomeIcon icon={faUser} />{wish.wishItems.length ? (<span className='header-cart-badge'>{wish.wishItems.length}</span>) : (<span className='header-cart-badge'>0</span>)}</Link>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} />{cart.cartItems.length ? (<span className='header-cart-badge'>{cart.cartItems.length}</span>) : (<span className='header-cart-badge'>0</span>)}</Link>
                    </>
                )}
                
                {
                    userInfo ? (<span className='logout' onClick={signouthandler}><FontAwesomeIcon icon={faLock} /><span className='login'>Salir</span></span>) : (<Link to="/login"><FontAwesomeIcon icon={faLock} /><span className='login'>Iniciar sesión</span></Link>)
                }
            </div>
        </div>
    </div>
  )
}

export default Header
