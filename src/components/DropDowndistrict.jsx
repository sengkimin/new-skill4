import React, { useState, useEffect } from "react";
import { getdistrict } from "../api/district";

const Dropdowndistrict = () => {
  const [districts, setdistricts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const districtData = await getdistrict();
        console.log("Data district: ", {
          districtData,
        });

        setdistricts(districtData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="drop_Downprovice">
      <div className="select">
        <select>
          <option>All</option>
          {districts.map((district) => (
            <option key={district.id}>{district.name}</option>
          ))}
        </select>
      </div>
    
    </div>
  );
};

export default Dropdowndistrict;