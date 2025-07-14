import express from 'express';
import { buildPrompt } from '../promptBuilder.js';
import ai from '../geminiInstance.js';

const router = express.Router();

router.post('/', async (req, res) => {
	const { facilityType, facilityData } = req.body;
	if (!facilityType || !facilityData) {
		return res.status(400).json({ error: 'Missing required fields' });
	}

	const prompt = buildPrompt(facilityType, facilityData);
	console.log(`Generated prompt: ${prompt}`, req.body);
	try {
		const response = await ai.models.generateContent({
			model: 'gemini-1.5-flash',
			contents: prompt,
		});
		console.log(response);
		res.json({ summary: response });
	} catch (err) {
		console.error('Gemini API Error:', err.message);
		res.status(500).json({ error: 'LLM failed to generate summary' });
	}
});

export default router;
