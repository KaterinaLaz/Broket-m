import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('🟢 Broket API is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
