import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { themes } from './themes';

export const collections = {
	notes: defineCollection({
		loader: glob({ base: './src/content/notes', pattern: '*.md' }),
		schema: z.object({
			title: z.string().trim().min(1),
			date: z.coerce.date(),
			themes: z.array(z.enum(themes.map(({ id }) => id))).min(1),
		}),
	}),
};
