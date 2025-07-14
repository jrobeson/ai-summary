export function buildPrompt(type, d) {
	if (type === 'CLO') {
		return `
You are a credit analyst. Write a concise summary (2–3 sentences) of the following CLO facility:
- Facility Name: ${d.facilityName}
- LTV: ${(d.ltv * 100).toFixed(1)}%
- Drawn Amount: $${(d.drawnAmount / 1_000_000).toFixed(2)}M
- Available to Draw: $${(d.availableToDraw / 1_000_000).toFixed(2)}M
- Top Asset: ${d.topAsset} at ${(d.topAssetPercent * 100).toFixed(1)}%
- Compliance: ${d.inCompliance ? 'In compliance' : 'Out of compliance'}
- Risk Flags: ${d.riskFlags.length ? d.riskFlags.join(', ') : 'None'}

Then suggest one next action the portfolio manager should consider.
`.trim();
	}

	return `Summarize the following facility: ${JSON.stringify(d)}`;
}
