import Refeicoes from '../../components/dash-components/reifs/reifs';
import Dashboard from '../../components/dash-components/dashboard/dashboard';
import Settings from '../../components/dash-components/settings/settings';
import Sidebar from '../../components/dash-components/sidebar/sidebar';
import Recipes from '../../components/dash-components/recipes/recipes';
import Help from '../../components/dash-components/help/help';
import Notificacoes from '../../components/dash-components/settings/notificoes/notificacoes';
import Permissoes from '../../components/dash-components/settings/permissoes/permissoes';
import PrivacidadeDados from '../../components/dash-components/settings/privacidadeDados/privacidadeDados';
import Seguranca from '../../components/dash-components/settings/seguranca/seguranca';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import React from 'react';
import Navbar from '../../components/navbar/navbar';
import "./signed-in.css"

const SignedInView: React.FC = () => {
  return (
    <div>
      <Navbar />

       <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/reifs" element={<Refeicoes />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/help" element={<Help />} />
          
          // configurações do app 
          <Route path="/settings" element={<Settings />} />
              <Route path="/notificacoes" element={<Notificacoes />} />
              <Route path="/permissoes" element={<Permissoes />} />
              <Route path="/privacidadeDados" element={<PrivacidadeDados />} />
              <Route path="/seguranca" element={<Seguranca />} />


          </Routes>
        </div>
      </div>
    </Router>
 </div>
  );
};

export default SignedInView;
