import React from 'react';
import {useState, useEffect} from 'react';
import '../App.css';

function Display() {
    const [place, setPlace] = useState(null);  

// *******Fetches Weather *************

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
        
    </div>
  );
}
}

export default Display;