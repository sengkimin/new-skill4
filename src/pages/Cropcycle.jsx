import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';
import DropDownactive from '../components/DropDownactiveCrop';

function useCropCycles() {
  const [cropCycles, setCropCycles] = useState([]);

  useEffect(() => {
    const fetchCropCycles = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/crop-cycles`);
        const data = await response.json();
        setCropCycles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCropCycles();
  }, []);

  return cropCycles;
}

function CropCycle() {
  const [statusFilter, setStatusFilter] = useState('All');
  const cropCycles = useCropCycles();

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredCropCycles = statusFilter === 'All'
    ? cropCycles
    : cropCycles.filter(cycle => cycle.status.toLowerCase() === statusFilter.toLowerCase());

  return (
    <>
      <div className="dropactive">
        <DropDownactive onChange={handleFilterChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmland ID</th>
            <th>Crop ID</th>
            <th>Date</th>
            <th>Close Date</th>
            <th>Status</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {filteredCropCycles.map((cycle, index) => (
            <tr key={cycle.id}>
              <td>{index + 1}</td>
              <td>{cycle.farm_land_id}</td>
              <td>{cycle.crop_id}</td>
              <td>{cycle.open_date}</td>
              <td>{cycle.close_date}</td>
              <td>{cycle.status}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CropCycle;
