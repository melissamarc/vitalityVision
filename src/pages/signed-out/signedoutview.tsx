import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './signed-out.css';

const SignedOutView: React.FC = () => {
  return (
    <div>
      <Navbar />
    

      <header className="hero-section">
        <h1 className="title">Bem vindo a Nossa Plataforma de Saúde Online!</h1>
        <p className='subtitle'> set of solutions designed to help quickly identify coronavirus symptoms and get reliable information regarding COVID-19 concerns.
        </p> 
      
      </header>   
        <div className="half-circle"></div>

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

      <section className="services-section">
        <h2>Our Medical Services</h2>
        <div className="service-details">
          <img src="doctor.jpg" alt="Doctor" />
          <div className="service-info">
            <h3>Dental Care Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed volutpat non.</p>
            <button className="learn-more-button">Learn more</button>
          </div>
        </div>
      </section>

      <section className="speciality-section">
        <h2>Our Speciality</h2>
        <div className="speciality-details">
          <img src="online-appointment.jpg" alt="Online Appointment" />
          <div className="speciality-info">
            <h3>Online Appointment</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed volutpat non.</p>
            <button className="learn-more-button">Learn more</button>
          </div>
        </div>
      </section>

      <section className="appointment-section">
        <h2>Appointment Schedules</h2>
        <div className="appointment-details">
          <img src="appointment-schedule.jpg" alt="Appointment Schedules" />
          <div className="appointment-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed volutpat non.</p>
            <button className="learn-more-button">Schedules</button>
          </div>
        </div>
      </section>

      <section className="doctors-section">
        <h2>Our Doctors</h2>
        <div className="doctor-cards">
          <div className="doctor-card">
            <img src="doctor1.jpg" alt="Doctor 1" />
            <h3>Mamman Bo</h3>
          </div>
          <div className="doctor-card">
            <img src="doctor2.jpg" alt="Doctor 2" />
            <h3>Reda Siana</h3>
          </div>
          <div className="doctor-card">
            <img src="doctor3.jpg" alt="Doctor 3" />
            <h3>Yaroslav Hawa</h3>
          </div>
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
