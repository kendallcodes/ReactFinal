import React, { useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import AddCity from "./AddCity";


function Cities() {
  const [cities, setCities] = useState([]);
  

        const fetchCities = async () => {
          const res = await fetch("https://www.numbeo.com/api/cities?api_key=dl821rgbp26h17");
          const json = await res.json();
          setCities(json.cities);
        };

        React.useEffect(() => {
          fetchCities();
        });
          
        
       
// return (
 
//     <select>
//       {cities.map(city => (
//         <option
//           key={city.id}
//           value={city.value}
      
//         >
//           {city.city}, {city.country}
//         </option>
//       ))}
      
//     </select>
    
//   );

             return (
            <div className="listOfCities">

              {cities.map((city) => {
                  return (
                    <div key={city.id}>
                      <ul>
                          <li>{city.country}, {city.city}</li>
                      </ul>
                    </div>
                  );
                })}
            </div>
        )
        
    }; 
  
      

export default Cities; 