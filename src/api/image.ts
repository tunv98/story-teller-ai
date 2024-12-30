import { Ai } from '@cloudflare/ai';
import { ImageRequest } from '../model/requestPayload';

export async function generateImage(ai: Ai, inputs: ImageRequest) {
	return await ai.run('@cf/bytedance/stable-diffusion-xl-lightning', inputs);
}
