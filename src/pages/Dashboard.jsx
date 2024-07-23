
import React, { useState, useEffect } from 'react';
import './../styles/Dashboard.css';



function Farmers() {
  const [farmers, setFarmers] = useState([]);
  useEffect(()=>{
    const fetchFarmers=async()=>{
      try{
      const response = await fetch('https://agro-admin-dashboard-api.vercel.app/api/crops');
      const data = await response.json();
      setFarmers(data);
      return response.data
    }catch(error){
      console.log(error);
    }
      
      }
      fetchFarmers();
      },[])

  return (
    
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Name</th>
            <th>CropType_Name</th>
            
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer, index) => (
            <tr key={farmer.id}>
              <td>{index + 1}</td>
              <td>{farmer.id}</td>
              <td>{farmer.name}</td>
              <td>{farmer.crop_type.name}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  };



export default Farmers;









