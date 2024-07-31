import React from 'react';
import './dashboard.css'
import WaterCounter from './water/WaterCounter';


const Dashboard: React.FC = () => {
  return (
   <div className="dashboard">
      <div className="main">
        <div className="content">

          <div className="welcome-section">
           
          
 
          </div>

      


          <div className="schedule-section">
            <div className="my-schedule">
              <h3>My Scheduled Events</h3>
              <div className="progress">
                <div className="progress-bar" style={{ width: '95%' }}></div>
                <p>25 Consultations, 10 Laboratory analyses, 3 Meetings</p>
              </div>
            </div>
            <div className="my-plans">
             <WaterCounter/>
              
              
            </div>
          </div>

              <div className="stats">
            <div className="stat-card">
              <h3>Offline Work</h3>
              <p>27 hospital patients</p>
              <p>+15% than last month</p>
            </div>
            <div className="stat-card">
              <h3>Online Work</h3>
              <p>9 online consultations</p>
              <p>+25% than average</p>
            </div>
            <div className="stat-card">
              <h3>Laboratory Work</h3>
              <p>19 laboratory analyses</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Dashboard;