import React from 'react';
import {useState, useEffect} from 'react';
import '../App.css';
import Search from './searchbar.js'

function Display() {
    const [place, setPlace] = useState(null); 
    // const [search, setSearch] = useState(""); 

// *******Fetches San Diego/Card 1 Weather *************

const handleFetch = () => {
    fetch('http://localhost:1996/api/weather')
    .then((response) => response.json())
    .then((data) => {console.log(data)
    setPlace(data);
})
  
};
useEffect(() => { 
    handleFetch(); 
}, []);

if(!place){
    return <div>Loading...</div>
} else {


//  **********On Browser***********

  return (
    <div className="Display">
       
      <header className="App-Display">
         <div className="col-4">
            <div className="card-body">
                <h2>City #1 </h2>
                    <p>City: {place.name}</p>
                    <p>Temperature:{place.main.temp}</p>
                    <p>Latitude:{place.coord.lat}</p>
                    <p>Longitude: {place.coord.lat}</p>
                    <p>Description: {place.weather[0].description}</p>
            {/* <input type="text" value= {place} onChange={(e) => setPlace(e.target.value)} />
            <button onClick={handleFetch}>Search</button> */}
            </div>
        </div>
     </header>
     {/* <div className="Search-Display"> */}
        {/* <input type="text" placeholder="Enter Zip Code" onChange={(e) => setSearch(e.target.value)}/> */}
        {/* handleFetch might need to be different */}
        {/* <button onClick={handleFetch}> Search </button> */}
     {/* </div> */}
        <Search />
    </div>
  );
}
}

export default Display;