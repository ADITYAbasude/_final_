'use server';
/**
 * @fileOverview A tool configuration flow for assigning AI models to cameras.
 *
 * - configureAIModelsPerCamera - A function that configures AI models for a specific camera.
 * - ConfigureAIModelsPerCameraInput - The input type for the configureAIModelsPerCamera function.
 * - ConfigureAIModelsPerCameraOutput - The return type for the configureAIModelsPerCamera function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConfigureAIModelsPerCameraInputSchema = z.object({
  cameraId: z.string().describe('The unique identifier of the camera.'),
  enabledModels: z
    .array(z.string())
    .describe(
      'An array of AI model names to enable for the camera (e.g., [\