// SignedOutView.tsx
import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './signed-out.css'

const SignedOutView: React.FC = () => {
  return (
    <div>
      <Navbar />
     <header className="hero-section">
        <h1>Bem vindo a Nossa Plataforma de Saúde Online!</h1>
        <p>
          A set of solutions designed to help quickly identify coronavirus symptoms and get reliable information regarding COVID-19 concerns.
        </p>
        
      </header>

      <section className="info-section">
        <div className="info-card">
          <img src="image1.jpg" alt="Triage" />
          <h3>Triage</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed volutpat non.</p>
        </div>
        <div className="info-card">
          <img src="image2.jpg" alt="Recommendation" />
          <h3>Recommendation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed volutpat non.</p>
        </div>
        <div className="info-card">
          <img src="image3.jpg" alt="Local information" />
          <h3>Local information</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed volutpat non.</p>
        </div>
      </section>

      <section className="how-section">
        <h2>How it helps people</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta ultricies vel scelerisque vitae</p>
 
      </section>

      <section className="steps-section">
        <h2>How to use it</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta ultricies vel scelerisque vitae</p>

        <div className="steps-images">
          <img src="coronavirus.jpg" alt="Coronavirus" />
          <img src="diagnostics.jpg" alt="Diagnostics" />
          <img src="test.jpg" alt="Test" />
        </div>
      </section>

      <section className="trust-section">
        <h2>Why you can trust this tool</h2>
        <div className="trust-card">
          <h3>Based on reliable sources</h3>
          <p>
            We want our tool to be safe and reliable, so its logic is based on the official global information provided by the WHO.
          </p>
        </div>
        <div className="trust-card">
          <h3>Verified by doctors</h3>
          <p>
            The content was meticulously implemented by Infermedica's team of doctors. It is kept up to date with the latest WHO and CDC guidelines.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <div className="social-icons">
          <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
        </div>
      </footer>
    </div>
  );
};

export default SignedOutView;
