import Image from 'next/image';
import type { Camera } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Settings } from 'lucide-react';
import { AVAILABLE_MODELS } from '@/lib/constants';

interface CameraCardProps {
  camera: Camera;
  onConfigure: (camera: Camera) => void;
}

export default function CameraCard({ camera, onConfigure }: CameraCardProps) {
  console.log('Rendering CameraCard for:', camera);
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{camera.name}</CardTitle>
        <CardDescription>{camera.location}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative aspect-video w-full overflow-hidden rounded-md bg-secondary shadow-inner">
          <img 
            src={camera.streamUrl} 
            className="object-cover"
            data-ai-hint="cctv security"
          />
          {camera.aiHint && camera.enabledModels.includes(camera.aiHint.model) && (
            <div className="absolute bottom-2 left-2 animate-pulse rounded-md bg-accent/80 px-2 py-1 text-xs font-semibold text-accent-foreground backdrop-blur-sm">
              {camera.aiHint.text}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm font-medium">Active Filters</p>
          <Button variant="outline" size="sm" onClick={() => onConfigure(camera)}>
            <Settings className="mr-2 h-4 w-4" />
            Configure
          </Button>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          {camera.enabledModels.length > 0 ? (
            camera.enabledModels.map(modelId => {
              const model = AVAILABLE_MODELS.find(m => m.id === modelId);
              return (
                <Badge key={modelId} variant="secondary">
                  {model?.name || modelId}
                </Badge>
              );
            })
          ) : (
            <p className="text-sm text-muted-foreground">No filters active.</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
