import { Ai } from '@cloudflare/ai';

export async function generateStory(ai: Ai, prompt: string) {
	const messages = [
		{ role: 'system', content: 'Tell a interesting short story with under 500 words about: ' },
		{ role: 'user', content: prompt }
	];

	return await ai.run('@hf/thebloke/deepseek-coder-6.7b-base-awq', {
		messages,
		stream: true
	});
}
