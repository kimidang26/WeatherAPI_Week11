import React from 'react';
import {useState, useEffect} from 'react';
import Recent_search from "./recentsearch.js";


function Search() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
  

    // ***********Fetching the search ************
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

//handleaddsearch
//post request

  return (
    <div className="Search">
      <header className="App-search">
        <div>
          <h2>Search A City</h2>
         <input type="text" placeholder = "Search Zip Code..." onChange = {(e) =>{setSearch(e.target.value)}} />
        <button onClick={searchPressed}>Search</button>
        </div>

        {/* see if weather.main is undefined use ternary operator */}
         {typeof weather.main != "undefined" ? (
         <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}</p>
            <p>{weather.coord.lat} </p>
            <p>{weather.coord.lon} </p>
            <p>{weather.weather[0].description} </p>
          </div>
         )
          : (
        ''
       )}
      </header>
      <br></br>
      <Recent_search newSearch={weather}/>
    </div>
  );
}

export default Search;
