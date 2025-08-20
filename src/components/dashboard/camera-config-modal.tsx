import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import type { Camera, AIModelId } from '@/lib/types';
import CameraConfigForm from './camera-config-form';

interface CameraConfigModalProps {
  camera: Camera;
  isOpen: boolean;
  onClose: () => void;
  onFiltersUpdated: (cameraId: string, enabledModels: AIModelId[]) => void;
}

export default function CameraConfigModal({ camera, isOpen, onClose, onFiltersUpdated }: CameraConfigModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Configure {camera.name}</DialogTitle>
          <DialogDescription>
            Select the AI models to apply to this camera feed.
          </DialogDescription>
        </DialogHeader>
        <CameraConfigForm 
          camera={camera} 
          onSuccess={(enabledModels) => {
            onFiltersUpdated(camera.id, enabledModels);
            onClose();
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
