import React from 'react';
import {useState, useEffect} from 'react';


function Search() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        console.log('Search Pressed!')
        console.log(search);
        //anything after the ? in a URL is known as a query parameter
        fetch(`http://localhost:1996/api/search?zip=${search}`)
        .then(res => res.json())
        .then((results) => {
            setWeather(results);
        });
    }


  return (
    <div className="Search">
      <header className="App-search">
        <div>
         <input type="text" placeholder = "Search Zip Code..." onChange = {(e) =>setSearch(e.target.value)} />
        <button onClick={searchPressed}>Search</button>
        </div>

        {/* see if weather.main is undefined use ternary operator */}
         {typeof weather.main != "undefined" ? (
         <div>
          {/* City */}
            <p>{weather.name}</p>
        
         {/* Temperature */}
             <p>{weather.main.temp}</p>
          {/* Latitude */}
          <p>{weather.coord.lat} </p>

          {/* Longitude */}
            <p>{weather.coord.lon} </p>

          {/* Description */}
             <p>{weather.weather[0].description} </p>

          </div>
         )
          : (
        ''
       )}
      </header>
    </div>
  );
}

export default Search;
