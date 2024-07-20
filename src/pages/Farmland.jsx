import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';
import DropDownactive from '../components/DropDownactive';

function useFarmlands() {
  const [farmlands, setFarmlands] = useState([]);

  useEffect(() => {
    const fetchFarmlands = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/farmlands`);
        const data = await response.json();
        setFarmlands(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFarmlands();
  }, []);

  return farmlands;
}

function Farmland() {
  const farmlands = useFarmlands();

  return (
<>
   <div className="dropactive">
 <DropDownactive/>
   </div>
 
      <table>
        <thead>
          <tr>
            {/* <th>No</th> */}
            <th>ID</th>
            <th>Size</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Farmer (owner)</th>
            <th>Status</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {farmlands.map((farmland, index) => (
            <tr key={farmland.id}>
              {/* <td>{index + 1}</td> */}
              <td>{farmland.id}</td>
              <td>{farmland.size}</td>
              <td>{farmland.latitude}</td>
              <td>{farmland.longitude}</td>
              <td>{farmland.farmer_id}</td> 
              <td>{farmland.status}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>

  );
}

export default Farmland;
