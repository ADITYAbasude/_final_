'use server';

import { applyAIFilters, type ApplyAIFiltersInput } from '@/ai/flows/apply-ai-filters';
import { revalidatePath } from 'next/cache';

export async function updateCameraFilters(data: ApplyAIFiltersInput) {
  try {
    // In a real app, this would also update a database.
    const result = await applyAIFilters({
      cameraId: data.cameraId,
      enabledModels: data.enabledModels,
    });
    
    console.log('AI Filters applied:', result);

    revalidatePath('/');

    return { success: true, message: `Successfully updated ${result.enabledModels.length} filter(s).` };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    console.error('Failed to apply AI filters:', errorMessage);
    return { success: false, message: `Failed to apply filters: ${errorMessage}` };
  }
}
