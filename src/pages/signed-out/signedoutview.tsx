import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './signed-out.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Card: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};


const SignedOutView: React.FC = () => {
  return (
    <div>
      <Navbar />


      <header className="hero-section">
        <h1 className="title">Bem vindo a Nossa Plataforma de Saúde Online!</h1>
        <p className='subtitle'>Acompanhe, monitore e gerencie sua saúde de forma rápida e eficiente.
        </p>
        <button className='botao-inicio'> iniciar </button>
        
   </header>

      {/* fim da header */}
           <div className="half-circle"></div>
        <img src="/header.png" alt="Header" className="overlay-image" />   
 

    {/*fim do circulo */}


    <div className="cards-container">
      <Card title="Card 1" description="Este é o texto do primeiro card." />
      <Card title="Card 2" description="Este é o texto do segundo card." />
      <Card title="Card 3" description="Este é o texto do terceiro card." />
      <Card title="Card 4" description="Este é o texto do quarto card." />
    </div>


{/* sessao de serviços*/}
      <section className="services-section">
        <h2></h2>
        <div className="service-details">
          <img src="doctor.jpg" alt="Doctor" />
          <div className="service-info">
            <h3>ovo  </h3>
            <p></p>
            <button className="learn-more-button"></button>
          </div>
        </div>
      </section>

       {/* sessão com fotos */}
      <section className="info-section">
        <div className="info-card">
          <img src="/patins.jpg"/>
          <h3>Leve uma vida mais saúdavel acompanhando seu metabolismo.</h3>
          <p></p>
        </div>
        <div className="info-card">
              <img src="/pulandocorda.jpg" />
          <h3>pulando bb</h3>
          <p></p>
        </div>
      </section>
{/* fim da sessao de fotos*/}















      <section className="speciality-section">
        <h2>drtg</h2>
        <div className="speciality-details">
          <img src="online-appointment.jpg" alt="Online Appointment" />
          <div className="speciality-info">
            <h3>dgd</h3>
            <p>cvgfg</p>
            <button className="learn-more-button"></button>
          </div>
        </div>
      </section>

      <section className="appointment-section">
        <h2>fghfh</h2>
        <div className="appointment-details">
          <img src="appointment-schedule.jpg" alt="Appointment Schedules" />
          <div className="appointment-info">
            <p>kgjnfdk</p>
            <button className="learn-more-button"></button>
          </div>
        </div>
      </section>

      <section className="doctors-section">
        <h2></h2>
        <div className="doctor-cards">
          <div className="doctor-card">
            <img src="doctor1.jpg" alt="Doctor 1" />
            <h3>fdokjghfdjl</h3>
          </div>
          <div className="doctor-card">
            <img src="doctor2.jpg" alt="Doctor 2" />
            <h3>ekjratgjkdsf</h3>
          </div>
          <div className="doctor-card">
            <img src="doctor3.jpg" alt="Doctor 3" />
            <h3>jgfdsaf</h3>
          </div>
        </div>
      </section>

      <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer-icon facebook" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer-icon twitter" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon instagram" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon linkedin" />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Vitality Vision. Todos os direitos reservados.</p>
          <p>Contato: <a href="mailto:contato@empresa.com">vitalityvisionn@gmail.com</a></p>
        </div>
      </div>
    </footer>







    </div>
  );
};

export default SignedOutView;
