import express from 'express';
import cors from 'cors';
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = 1996;

app.use(cors());

console.log(`Your api key is ${process.env.REACT_APP_API_KEY}`);

app.get('/', (req, res) =>{
    res.json("Weather App Information")
})


app.get('/api/sandiego', (req, res) => {
  let URL = `https://api.openweathermap.org/data/2.5/weather?zip=92111,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;
  console.log(process.env.REACT_APP_API_KEY, "API SAN DIEGO")
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
  });

  app.get('/api/houston', (req, res) => {
    let HOUS = `https://api.openweathermap.org/data/2.5/weather?zip=77001,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;
    console.log(process.env.REACT_APP_API_KEY, "API HOUSTON")
      fetch(HOUS)
      .then((response) => response.json())
      .then((data) => {
        res.send(data);
      });
    });

    app.get('/api/newyork', (req, res) => {
      let NYC = `https://api.openweathermap.org/data/2.5/weather?zip=10001,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;
      console.log(process.env.REACT_APP_API_KEY, "API HOUSTON")
        fetch(NYC)
        .then((response) => response.json())
        .then((data) => {
          res.send(data);
        });
      });
  

  app.get('/api/search', (req, res) => {
    //you will be pulling the zip data from a query parameter
    const zip = req.query.zip;
    let website = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;
    console.log(process.env.REACT_APP_API_KEY, "API WEBSITE")
      fetch(website)
      .then((response) => response.json())
      .then((data) => {
        res.send(data);
      });
    });

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
