import React from 'react';
import {useState, useEffect} from 'react';

function Recent_search({newSearch}) {
    const [recent, setRecent] = useState([]);  
    

//****************Fetches/Gets Recent Search Table***********/

    const getRecent = async () => {
        const response = await fetch(`http://localhost:1996/recent`);
        const recent = await response.json();
        setRecent(recent);
      };
      
      useEffect(() => {
        getRecent();
      }, []);

      //runs whenever newsearch prop is changed
      useEffect(() => {
        getRecent();
        console.log("HELLO WORLD ")
      }, [newSearch]);



  return (
    <div className="Recent_Search">
       <h2> Recent Searches</h2>
          <table>
            <thead>
    
              <tr>
                <th>ID</th>
                <th>Location</th>
                <th>Temperature</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
    
            </thead>

    
      
            <tbody>
            {recent.map((recent,index) => {
              return (
                <tr key={index}>
                  <td>{recent.id}</td>
                  <td>{recent.location}</td>
                  <td>{recent.temp}</td>
                  <td>{recent.lat}</td>
                  <td>{recent.lon}</td>
                </tr>
              
              );
            })}
            </tbody>
         </table>
    </div>
  );
}

export default Recent_search;
