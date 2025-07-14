import express from 'express';
import summaryRouter from '../routes/summarize.js';

const app = express();

app.use(express.json());

app.use('/api/summary', summaryRouter);

app.listen(3000, () => console.log('AI Summary service running'));
