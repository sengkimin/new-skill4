import React, { useState, useEffect } from 'react';
import './../styles/Farmer.css';
import API_BASE_URL from '../config';
// import  DropdownList from '../components/DropProvince-District';
import Dropdown from '../components/DropProvince-District';



function Farmers() {
  const [farmers, setFarmers] = useState([]);
  useEffect(()=>{
    const fetchFarmers=async()=>{
      try{
      const response = await fetch(`${API_BASE_URL}/farmers`);
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
    <div className='box-dropdown'>
   < Dropdown/>
  
    </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>IDCard</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Source</th>
            <th>Province</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer, index) => (
            <tr key={farmer.id}>
              <td>{index + 1}</td>
              <td>{farmer.id_card}</td>
              <td>{farmer.first_name}</td>
              <td>{farmer.last_name}</td>
              <td>{farmer.gender}</td>
              <td>{farmer.phone}</td>
              <td>{farmer.source}</td>
              <td>{farmer.district_id}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  };



export default Farmers;




// import React, { useState, useEffect } from 'react';
// import './../styles/Farmer.css';
// import API_BASE_URL from '../config';
// import DropdownList from '../components/DropDownProvice';
// import Dropdowndistrict from '../components/DropDowndistrict';

// function Farmers() {
//   const [farmers, setFarmers] = useState([]);
//   const [selectedProvince, setSelectedProvince] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');

//   useEffect(() => {
//     const fetchFarmers = async () => {
//       try {
//         let url = `${API_BASE_URL}/farmers`;
        
//         if (selectedProvince) {
//           url += `?province_id=${selectedProvince}`;
//         }
//         if (selectedDistrict) {
//           url += selectedProvince ? `&district_id=${selectedDistrict}` : `?district_id=${selectedDistrict}`;
//         }

//         const response = await fetch(url);
//         const data = await response.json();
//         setFarmers(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchFarmers();
//   }, [selectedProvince, selectedDistrict]);

//   const handleProvinceChange = (province) => {
//     setSelectedProvince(province);
//   };

//   const handleDistrictChange = (district) => {
//     setSelectedDistrict(district);
//   };

//   return (
//     <>
//       <div className='box-dropdown'>
//         <DropdownList onChange={handleProvinceChange} />
//         <Dropdowndistrict onChange={handleDistrictChange} />
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>IDCard</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Gender</th>
//             <th>Phone</th>
//             <th>Source</th>
//             <th>Province</th>
//             <th>Active</th>
//           </tr>
//         </thead>
//         <tbody>
//           {farmers.map((farmer, index) => (
//             <tr key={farmer.id}>
//               <td>{index + 1}</td>
//               <td>{farmer.id_card}</td>
//               <td>{farmer.first_name}</td>
//               <td>{farmer.last_name}</td>
//               <td>{farmer.gender}</td>
//               <td>{farmer.phone}</td>
//               <td>{farmer.source}</td>
//               <td>{farmer.district_id}</td>
//               <td>Edit</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default Farmers;
