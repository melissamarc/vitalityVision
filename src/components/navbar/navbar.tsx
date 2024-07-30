// Navbar.tsx
import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import './navbar.css';



const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
     <img src="logo.png" alt="Triage"  width={"25vh"} height={"25vh"}/>
  
      </div>

<div className="navbar-buttons">

        <SignedOut>
           <SignInButton>
        <button className='sign-in-button'>Entrar</button>
      </SignInButton>

          <SignUpButton>
        <button className='sign-up-button'>
          Cadastrar
        </button>
      </SignUpButton>

        </SignedOut>


        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
