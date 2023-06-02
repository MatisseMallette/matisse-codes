import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		//
		//
		//
		// Now I (Matisse) begin defining the schema some more
		tags: z.array(z.string())
	}),
});

export const collections = {
	'blog': blogCollection,
};
