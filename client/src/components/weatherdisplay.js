import React from 'react';
import {useState, useEffect} from 'react';
import '../App.css';
import Search from './searchbar.js'
import cloudVideo from "../assets/Clouds - 1154.mp4"

function Display() {
    const [place, setPlace] = useState(null); 
    const [hous, setHous] = useState(null);
    const [nyc, setNyc] = useState(null);


// *******Fetches San Diego/Card 1 Weather *************

const handleSanDiego = () => {
    fetch('http://localhost:1996/api/sandiego')
    .then((response) => response.json())
    .then((data) => {console.log(data)
    setPlace(data);
})
  
};

// *******Fetches Houston/Card 2 Weather *************

const handleHouston = () => {
    fetch('http://localhost:1996/api/houston')
    .then((response) => response.json())
    .then((data) => {console.log(data)
    setHous(data);
})
  
};

// *******Fetches NYC/Card 3 Weather *************

const handleNYC = () => {
    fetch('http://localhost:1996/api/newyork')
    .then((response) => response.json())
    .then((data) => {console.log(data)
    setNyc(data);
})
  
};

useEffect(() => { 
    handleSanDiego(); 
    handleHouston();
    handleNYC();
}, []);


if(!place || !hous || !nyc){
// if(!place){
    return <div>Loading...</div>
} else {


//  **********On Browser***********

  return (
    <div className="Display">
    <video src={cloudVideo} autoPlay loop muted />
      <header className="App-Display">
         <div className="col-4">
            <div className="card-body-1">
                <h2>City #1 </h2>
                    <p>City: {place.name}</p>
                    <p>Temperature:{place.main.temp}</p>
                    <p>Latitude:{place.coord.lat}</p>
                    <p>Longitude: {place.coord.lat}</p>
                    <p>Description: {place.weather[0].description}</p>
            </div>
            <div className="card-body-2">
                <h2>City #2 </h2>
                    <p>City: {hous.name}</p>
                    <p>Temperature:{hous.main.temp}</p>
                    <p>Latitude:{hous.coord.lat}</p>
                    <p>Longitude: {hous.coord.lat}</p>
                    <p>Description: {hous.weather[0].description}</p>
            </div>
            <div className="card-body-3">
                <h2>City #3 </h2>
                    <p>City: {nyc.name}</p>
                    <p>Temperature:{nyc.main.temp}</p>
                    <p>Latitude:{nyc.coord.lat}</p>
                    <p>Longitude: {nyc.coord.lat}</p>
                    <p>Description: {nyc.weather[0].description}</p>
            </div>
            <div className="card-body-4">
            <Search />
            </div>
        </div>
     </header>
        
    </div>
  );
}
}

export default Display;