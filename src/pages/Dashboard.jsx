
import React, { useState, useEffect } from 'react';
import {
  getTotalFarmers,
  getTotalFarmlands,
  getTotalCropCycle,
  getTotalFarmlandSize,
} from '../api/summary';
import '../styles/Dashboard.css'

const Dashboard = () => {
  const [totalFarmers, setTotalFarmers] = useState(0);
  const [totalFarmlands, setTotalFarmelands] = useState(0);
  const [activeCropcycles, setActiveCropcycles] = useState(0);
  const [totalFarmlandSize, setTotalFarmelandSize] = useState(0);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmersData = await getTotalFarmers();
        const farmlandsData = await getTotalFarmlands();
        const cropcyclesData = await getTotalCropCycle();
        const farmlandSizeData = await getTotalFarmlandSize();






        setTotalFarmers(farmersData.totalFarmers);
        setTotalFarmelands(farmlandsData.totalFarmlands);
        setActiveCropcycles(cropcyclesData.activeCropCycles);
        setTotalFarmelandSize(farmlandSizeData.totalFarmlandSize);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    
    
    <>

      <div className="dashboard-container">
      
        <h2>Overview</h2>

        <div className="dashboard-stats">
          <main>
          <div className="dashboard-stat">
            <h3>Total Farmers</h3>
            <p>{totalFarmers}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total Farmlands</h3>
            <p>{totalFarmlands}</p>
          </div>
     
          </main>
          <span>
          <div className="dashboard-stat">
            <h3>Total active Crop cycles</h3>
            <p>{activeCropcycles}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total size of farmland</h3>
            <p>{totalFarmlandSize}</p>
          </div>
          </span>
       
        </div>
      </div>
    </>
  );
};

export default Dashboard;
