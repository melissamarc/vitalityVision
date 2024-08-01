import React from 'react';
import './dashboard.css'
import DisplayDate from './date/DisplayDate';
import { useUser } from '@clerk/clerk-react';
import ExerciseCounter from './exercise/ExerciseCounter';
import Chart from './grafic/Chart';




const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="dashboard">
      <div className="main">

        <div className="left">
          <div className="welcome-section">
             <DisplayDate />
         
             <p>Olá {user?.username}, Bem-vindo (a) de volta!</p>
     
          </div>   
           <img src="/header.png" className='img'/>
           <div className='content'>
             <Chart/>
           <ExerciseCounter/>
           </div>
          
        </div>

        <div className="right">
          <div className='profile-section'>
        
      
          
            
             </div>
        </div>



      </div>
    </div>

  );
}

export default Dashboard;