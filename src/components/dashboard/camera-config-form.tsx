'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { AVAILABLE_MODELS } from '@/lib/constants';
import type { Camera, AIModelId } from '@/lib/types';
import { updateCameraFilters } from '@/app/actions';

const FormSchema = z.object({
  enabledModels: z.array(z.string()),
});

type FormValues = z.infer<typeof FormSchema>;

interface CameraConfigFormProps {
  camera: Camera;
  onSuccess: (enabledModels: AIModelId[]) => void;
}

export default function CameraConfigForm({ camera, onSuccess }: CameraConfigFormProps) {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      enabledModels: camera.enabledModels,
    },
  });

  async function onSubmit(data: FormValues) {
    const result = await updateCameraFilters({
      cameraId: camera.id,
      enabledModels: data.enabledModels as any,
    });

    if (result.success) {
      toast({
        title: 'Success!',
        description: result.message,
      });
      onSuccess(data.enabledModels as AIModelId[]);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
            {AVAILABLE_MODELS.map((model) => (
            <FormField
                key={model.id}
                control={form.control}
                name="enabledModels"
                render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                    <FormLabel>{model.name}</FormLabel>
                    <FormDescription>{model.description}</FormDescription>
                    </div>
                    <FormControl>
                    <Switch
                        checked={field.value?.includes(model.id)}
                        onCheckedChange={(checked) => {
                        return checked
                            ? field.onChange([...field.value, model.id])
                            : field.onChange(
                                field.value?.filter((value) => value !== model.id)
                            );
                        }}
                    />
                    </FormControl>
                </FormItem>
                )}
            />
            ))}
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? 'Applying...' : 'Apply Changes'}
        </Button>
      </form>
    </Form>
  );
}
