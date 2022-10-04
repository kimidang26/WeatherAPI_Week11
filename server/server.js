import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 1996;

app.use(cors());

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
