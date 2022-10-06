import React from 'react';
import {useState, useEffect} from 'react';


function Search() {
    const [search, setSearch] = useState("");

    const searchPressed = () => {
        console.log('Search Pressed!')
        console.log(search);
        //anything after the ? in a URL is known as a query parameter
        fetch(`http://localhost:1996/api/search?zip=${search}`)
        .then(res => res.json())
        .then((results) => {
            console.log(results);
        });
    }


  return (
    <div className="Search">
      <header className="App-search">
        <div>
         <input type="text" placeholder = "Search Zip Code..." onChange = {(e) =>setSearch(e.target.value)} />
        <button onClick={searchPressed}>Search</button>
        </div>
        {/* City */}
            <div>New York City, USA</div>
        
         {/* Temperature */}
         <div>32 F</div>

          {/* Latitude */}
          <div>191 </div>

          {/* Longitude */}
          <div>829 </div>

          {/* Description */}
          <div>Windy </div>

      </header>
    </div>
  );
}

export default Search;
