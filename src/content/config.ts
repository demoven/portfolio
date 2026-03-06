import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleFr: z.string().optional(), // Titre traduit en français
    date: z.coerce.date(),
    technologies: z.array(z.string()),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = { projects };