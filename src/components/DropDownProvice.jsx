// import React, { useState, useEffect } from "react";
// import { getprovinces } from "../api/province";



// const DropdownList = () => {
//   const [provinces, setprovinces] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const provincesData = await getprovinces(province_id);
//         console.log("Data provinces: ", {
//           provincesData,
//         });

//         setprovinces(provincesData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="drop_Downactive">
//       <div className="select">
//         <select>
//           <option>All</option>
//           {provinces.map((province) => (
//             <option key={province.id}>{province.name}</option>
//           ))}
//         </select>
//       </div>
    
//     </div>
//   );
// };

// export default DropdownList;



// // import React, { useState, useEffect } from "react";
// // import { getprovinces } from "../api/province";

// // const DropdownList = ({ onChange }) => {
// //   const [provinces, setprovinces] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const provincesData = await getprovinces();
// //         console.log("Data provinces: ", provincesData);
// //         setprovinces(provincesData);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleProvinceChange = (event) => {
// //     onChange(event.target.value);
// //   };

// //   return (
// //     <div className="drop_Downactive">
// //       <div className="select">
// //         <select onChange={handleProvinceChange}>
// //           <option value="">All</option>
// //           {provinces.map((province) => (
// //             <option key={province.id} value={province.id}>
// //               {province.name}
// //             </option>
// //           ))}
// //         </select>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DropdownList;
