import type { Camera } from '@/lib/types';
import CameraCard from './camera-card';

interface CameraSectionProps {
  title: string;
  cameras: Camera[];
  onConfigure: (camera: Camera) => void;
}

export default function CameraSection({ title, cameras, onConfigure }: CameraSectionProps) {
  if (cameras.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="font-headline text-2xl font-semibold">{title}</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cameras.map(camera => (
          <CameraCard key={camera.id} camera={camera} onConfigure={onConfigure} />
        ))}
      </div>
    </section>
  );
}
