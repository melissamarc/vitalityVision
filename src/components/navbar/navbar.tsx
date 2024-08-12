
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
     <img src="logo.png" alt="Triage"  width={"35vh"} height={"35vh"}/>
  
      </div>

<div className="navbar-buttons">

        
        <Link to='/SignIn' className='sign-in-button'>Entrar</Link>
     
        <button className='sign-up-button'>
          Cadastrar
        </button>
    
      </div>
    </nav>
  );
};

export default Navbar;
