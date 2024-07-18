import React, { useState, useEffect } from "react";
import { getprovinces } from "../api/province";

const DropdownList = () => {
  const [provinces, setprovinces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provincesData = await getprovinces();
        console.log("Data provinces: ", {
          provincesData,
        });

        setprovinces(provincesData);
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
          {provinces.map((province) => (
            <option key={province.id}>{province.name}</option>
          ))}
        </select>
      </div>
    
    </div>
  );
};

export default DropdownList;