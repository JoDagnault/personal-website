import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    key: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    sortDate: z.string().regex(/^\d{4}-\d{2}$/),
    tags: z.array(z.string()),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = { projects: projects };
