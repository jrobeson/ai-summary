import express from 'express';
import summaryRouter from './routes/summarize.js';

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());

app.get('/', (_, res) => res.send('AI Summary running'));

app.use('/api/summary', summaryRouter);

app.listen(PORT, () => console.log('AI Summary service running'));
