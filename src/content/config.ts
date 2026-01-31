import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // Transforme automatiquement la string du MD en objet Date
    technologies: z.array(z.string()),
    image: z.string(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = { projects };