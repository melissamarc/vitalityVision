import React from 'react';
import { Link } from 'react-router-dom';
import {  FaHome, FaUtensils, FaPlus  , FaHandsHelping } from 'react-icons/fa';
import './sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <ul>
          <li>
            <Link to="/dashboard">
              <FaHome />

            </Link>
          </li>
          <li>
            <Link to="/recipes">
              <FaUtensils />

            </Link>
          </li>
          <li>
            <Link to="/reifs">
              <FaPlus />

            </Link>
          </li>
         
        </ul>


        <div className='bottom'>

          <Link to='/help'>
            <FaHandsHelping />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
