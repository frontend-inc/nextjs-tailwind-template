import { z } from 'zod'
import { streamObject } from 'ai'
import { openai } from '@ai-sdk/openai'

export const maxDuration = 300

const completionSchema = z.object({
  title: z.string().describe('A concise, descriptive title for the project based on the prompt'),
  enhancedPrompt: z.string().describe('Brief summary of requirements for the web app project based on the original prompt')
})

export async function POST(req: Request) {
  try {
    const { prompt = '' } = await req.json()
    
    if (!prompt) {
      return new Response('Prompt is required', { status: 400 })
    }
    
    // Create system message with the user's prompt
    const systemPrompt = `
      You are a skilled product manager helping to define web application requirements.
      Provide a brief summary of the requirements for the project.

      Original web app description: ${prompt}
    `
    
    // Generate a streaming object with title and enhanced prompt
    const result = await streamObject({
      model: openai('gpt-4o'),
      schema: completionSchema,
      prompt: systemPrompt,
    })
    
    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Completions API error:', error)
    
    if (error.message === 'Prompt is required') {
      return new Response('Prompt is required', { status: 400 })
    } else {
      return new Response('Error processing completion request', { status: 500 })
    }
  }
}