import React, { useState, useEffect } from "react";
import { getProvince, getDistrict } from "../api/province";

const Dropdown = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(""); // Add state for selected province

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provincesData = await getProvince();
        console.log("Data provinces: ", provincesData); 
        setProvinces(provincesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = async (event) => {
    const provinceId = event.target.value;
    setSelectedProvince(provinceId);
    console.log("province", provinceId);
    const districtsData = await getDistrict(provinceId);
    setDistricts(districtsData);
  };

  return (
    <div className="App">
      <div className="box-dropdown">
        <select onChange={handleChange} value={selectedProvince}>
          <option value="">All Provinces</option>
          {provinces.map((province) => (
            <option key={province.id} value={province.id}>{province.name}</option>
          ))}
        </select>
        
        <select>
          <option value="">All Districts</option>
          {districts.map((district) => (
            <option key={district.id} value={district.id}>{district.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;