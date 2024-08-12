import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from '../../../components/navbar/navbar';
import SignIn from '../../SignIn/signIn';
import Dashboard from '../dash-components/dashboard/dashboard';
import Recipes from '../dash-components/recipes/recipes';
import Sidebar from '../dash-components/sidebar/sidebar';
import Settings from '../dash-components/settings/settings';
import Permissoes from '../dash-components/settings/permissoes/permissoes';
import PrivacidadeDados from '../dash-components/settings/privacidadeDados/privacidadeDados';
import Help from '../dash-components/help/help';
import Seguranca from '../dash-components/settings/seguranca/seguranca';
import Refeicoes from '../../all/dash-components/reifs/reifs';

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
          <Route path='/signIn' element={<SignIn/>} />
         {/* Link para Configurações, porem essa tela no existe mais se caso for edd so linkar ela na pasta sidebar */}
              <Route path="/settings" element={<Settings />} />
              <Route path="/permissoes" element={<Permissoes />} />
              <Route path="/privacidadeDados" element={<PrivacidadeDados />} />
              <Route path="/seguranca" element={<Seguranca />} />
              
        {/* acaba aqui*/}

          </Routes>
        </div>
      </div>
    </Router>
 </div>
  );
};

export default SignedInView;
