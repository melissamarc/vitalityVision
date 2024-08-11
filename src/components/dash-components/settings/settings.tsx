import React from 'react';
import './settings.css'
import { Link } from 'react-router-dom';

const Settings: React.FC = () => {
  return (
 <>
        {/* Título */}
        <div className='Title'>
          <h1>configurações</h1>
        </div>

        {/* Link para Configurações */}
        <div className='navbarmenu'>
          <Link to='/privacidadeDados'> Privacidade de Dados </Link>
          <Link to='/permissoes'> Permissoes </Link>
          <Link to='/seguranca'> Segurança </Link>

      
    </div>
   </>
  );
}

export default Settings;

