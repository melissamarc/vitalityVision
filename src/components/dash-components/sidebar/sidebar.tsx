import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUtensils, FaPlus, FaCog } from 'react-icons/fa';
import './sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <ul>
          <li>
            <Link to="/dashboard">
              <FaTachometerAlt />
              Painel
            </Link>
          </li>
          <li>
            <Link to="/recipes">
              <FaUtensils />
              Receitas
            </Link>
          </li>
          <li>
            <Link to="/reifs">
              <FaPlus />
              Adicionar Alimentos
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog />
              Configurações
            </Link>
          </li>
        </ul>


<div className='bottom'>
  
        <Link to='/help'>
        Ajuda </Link>
</div>

      </div>
    </div>
  );
}

export default Sidebar;
