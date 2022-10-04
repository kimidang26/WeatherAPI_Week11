import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 1996;

app.use(cors());

app.get('/', (req, res) =>{
    res.json("Weather App Information")
})

app.get('/api/weather', (req, res) => {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=irvine&APPID=${process.env.REACT_APP_API}&units=metric}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
  });

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
