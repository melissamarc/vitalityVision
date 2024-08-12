import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Sidebar from './pages/all/dash-components/sidebar/sidebar';
import Dashboard from './pages/all/dash-components/dashboard/dashboard';
import Recipes from './pages/all/dash-components/recipes/recipes';
import Refeicoes from './pages/all/dash-components/reifs/reifs';
import Settings from './pages/all/dash-components/settings/settings';
import Help from './pages/all/dash-components/help/help';
import SignIn from './pages/SignIn/signIn';
import Permissoes from './pages/all/dash-components/settings/permissoes/permissoes';
import PrivacidadeDados from './pages/all/dash-components/settings/privacidadeDados/privacidadeDados';
import Seguranca from './pages/all/dash-components/settings/seguranca/seguranca';

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
          <Route path='/signIn' element={<SignIn />} />
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
