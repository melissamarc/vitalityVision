import Refeicoes from '../../components/dash-components/reifs/reifs';
import Dashboard from '../../components/dash-components/dashboard/dashboard';
import Settings from '../../components/dash-components/settings/settings';
import Sidebar from '../../components/dash-components/sidebar/sidebar';
import Recipes from '../../components/dash-components/recipes/recipes';

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
            <Route path="/settings" element={<Settings />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/reifs" element={<Refeicoes />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />


          </Routes>
        </div>
      </div>
    </Router>
 </div>
  );
};

export default SignedInView;
