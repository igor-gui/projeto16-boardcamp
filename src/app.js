import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import router from './routers/router';


dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());
app.use(router)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`O server está rodando na porta ${PORT}`));

