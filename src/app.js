import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import gameRouter from './routers/router.js';


dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());
app.use(gameRouter)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`O server está rodando na porta ${PORT}`));

