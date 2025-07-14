import express from 'express';
import summaryRouter from './routes/summarize.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.port || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());

app.get('/', (_, res) => {
	res.sendFile(join(__dirname, './index.html'));
});

app.use('/api/summary', summaryRouter);

app.listen(PORT, () => console.log('AI Summary service running'));
