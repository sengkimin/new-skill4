import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';

function usecropcyles() {
  const [cropcyles, setFarmlands] = useState([]);

  useEffect(() => {
    const fetchcropcyles = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/crop-cycles`);
        const data = await response.json();
        setFarmlands(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchcropcyles();
  }, []);

  return cropcyles;
}

function cropcyle() {
  const cropcyles = usecropcyles();

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmland ID</th>
            <th>Crop ID</th>
            <th>Date</th>
            <th>Close date</th>
            <th>status</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {cropcyles.map((cropcyles, index) => (
            <tr key={cropcyles.id}>
              <td>{index + 1}</td>
              <td>{cropcyles.farm_land_id}</td>
              <td>{cropcyles.crop_id}</td>
              <td>{cropcyles.open_date}</td>
              <td>{cropcyles.close_date}</td>
              <td>{cropcyles.status}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default cropcyle;
