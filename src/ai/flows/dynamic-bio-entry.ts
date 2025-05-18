'use server';

/**
 * @fileOverview A dynamic bio entry AI agent.
 *
 * - generateConciseAboutMe - A function that generates a concise 'About Me' section tailored to the visitor's background.
 * - ConciseAboutMeInput - The input type for the generateConciseAboutMe function.
 * - ConciseAboutMeOutput - The return type for the generateConciseAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConciseAboutMeInputSchema = z.object({
  visitorProfessionalBackground: z
    .string()
    .describe("The visitor's professional background, which can be used to tailor the 'About Me' section."),
});
export type ConciseAboutMeInput = z.infer<typeof ConciseAboutMeInputSchema>;

const ConciseAboutMeOutputSchema = z.object({
  conciseAboutMe: z.string().describe('A concise and engaging overview of the developer based on the visitor background.'),
});
export type ConciseAboutMeOutput = z.infer<typeof ConciseAboutMeOutputSchema>;

export async function generateConciseAboutMe(input: ConciseAboutMeInput): Promise<ConciseAboutMeOutput> {
  return conciseAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'conciseAboutMePrompt',
  input: {schema: ConciseAboutMeInputSchema},
  output: {schema: ConciseAboutMeOutputSchema},
  prompt: `You are a professional bio generator, tasked with creating a concise 'About Me' section for a .NET developer's portfolio.

The content should be tailored to the visitor's professional background to ensure it is relevant and engaging, highlighting the developer's expertise in .NET.

Visitor Background: {{{visitorProfessionalBackground}}}

Generate a concise 'About Me' section for a .NET developer. Highlight key qualifications and experiences in .NET (C#, ASP.NET Core, Azure, Blazor, etc.) relevant to the visitor's background. Keep it short and captivating.
`,
});

const conciseAboutMeFlow = ai.defineFlow(
  {
    name: 'conciseAboutMeFlow',
    inputSchema: ConciseAboutMeInputSchema,
    outputSchema: ConciseAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
