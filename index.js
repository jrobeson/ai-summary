import express from 'express';
import summaryRouter from './routes/summarize.js';

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());

app.use('/api/summary', summaryRouter);

app.listen(PORT, () => console.log('AI Summary service running'));
