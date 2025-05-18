// src/ai/flows/dynamic-bio-update.ts
'use server';

/**
 * @fileOverview A dynamic bio generator that tailors the content based on the visitor's professional background.
 *
 * - generateDynamicBio - A function that generates a dynamic bio.
 * - DynamicBioInput - The input type for the generateDynamicBio function.
 * - DynamicBioOutput - The return type for the generateDynamicBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicBioInputSchema = z.object({
  visitorProfessionalBackground: z
    .string()
    .describe('The professional background of the visitor.'),
});
export type DynamicBioInput = z.infer<typeof DynamicBioInputSchema>;

const DynamicBioOutputSchema = z.object({
  tailoredBio: z
    .string()
    .describe('The tailored bio content, highlighting relevant experience.'),
});
export type DynamicBioOutput = z.infer<typeof DynamicBioOutputSchema>;

export async function generateDynamicBio(input: DynamicBioInput): Promise<DynamicBioOutput> {
  return generateDynamicBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dynamicBioPrompt',
  input: {schema: DynamicBioInputSchema},
  output: {schema: DynamicBioOutputSchema},
  prompt: `You are an expert at generating personalized introductions for professional portfolios.

You will generate an 'About Me' section for a .NET developer, tailored to the professional background of the visitor.

Focus on C#, ASP.NET Core, Azure, Blazor projects, and other .NET-related skills that are most relevant to the visitor's background.

Visitor Background: {{{visitorProfessionalBackground}}}

Generate a tailored 'About Me' section for this .NET developer:
`,
});

const generateDynamicBioFlow = ai.defineFlow(
  {
    name: 'generateDynamicBioFlow',
    inputSchema: DynamicBioInputSchema,
    outputSchema: DynamicBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
