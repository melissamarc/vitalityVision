import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './signed-out.css';



interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;  // Adiciona a prop opcional imageUrl
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl}  className="card-image" />}
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

 

    {/*fim do circulo */}

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





{/* cards */}
<div className='cards-box'>
   <h1 className='title-container'>Sua Jornada de Saúde e Bem-Estar</h1>
      <div className="cards-container">

        <Card 
          title='Monitoramento de Calorias e Nutrição' 
          description="Este é o texto do primeiro card." 
          imageUrl="/icon1.png" 
        />

        <Card 
          title="Controle de Dieta e Atividades" 
          description="Este é o texto do segundo card." 
          imageUrl="https://example.com/path/to/image2.jpg" 
        />
        <Card 
          title="Rastreamento de Alimentos e Exercícios" 
          description="Este é o texto do terceiro card." 
          imageUrl="https://example.com/path/to/image3.jpg" 
        />
      </div>
</div>


   



      <section className="appointment-section">
        <h2>fghfh</h2>
        <div className="appointment-details">
          <img src="bebenoagua.png" alt="Appointment Schedules" />
          <div className="appointment-info">
            <p>kgjnfdk</p>
            <button className="learn-more-button"></button>
          </div>
        </div>
      </section>


      <footer className="footer">
      <div className="footer-container">
  
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
