'use client';

import { useState, useMemo } from 'react';
import type { Camera, AIModelId } from '@/lib/types';
import { cameras as initialCameras, alerts as initialAlerts } from '@/lib/data';
import { SECTIONS } from '@/lib/constants';
import Header from '@/components/layout/header';
import AlertsSidebar from '@/components/dashboard/alerts-sidebar';
import CameraSection from '@/components/dashboard/camera-section';
import CameraConfigModal from '@/components/dashboard/camera-config-modal';

export default function Home() {
  const [cameras, setCameras] = useState<Camera[]>(initialCameras);
  const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);

  const groupedCameras = useMemo(() => {
    return SECTIONS.map(section => ({
      title: section,
      cameras: cameras.filter(c => c.location === section),
    }));
  }, [cameras]);

  const handleConfigure = (camera: Camera) => {
    setSelectedCamera(camera);
  };

  const handleCloseModal = () => {
    setSelectedCamera(null);
  };

  const handleFiltersUpdated = (cameraId: string, enabledModels: AIModelId[]) => {
    setCameras(prevCameras =>
      prevCameras.map(c =>
        c.id === cameraId ? { ...c, enabledModels } : c
      )
    );
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body text-foreground">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 p-4 sm:p-6 md:p-8">
          <div className="mb-8">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">Monitoring Dashboard</h1>
            <p className="text-muted-foreground">Live feeds from all hospital areas with AI-powered insights.</p>
          </div>
          <div className="space-y-8">
            {groupedCameras.map(group => (
              <CameraSection
                key={group.title}
                title={group.title}
                cameras={group.cameras}
                onConfigure={handleConfigure}
              />
            ))}
          </div>
        </main>
        <AlertsSidebar alerts={initialAlerts} />
      </div>
      {selectedCamera && (
        <CameraConfigModal
          camera={selectedCamera}
          isOpen={!!selectedCamera}
          onClose={handleCloseModal}
          onFiltersUpdated={handleFiltersUpdated}
        />
      )}
    </div>
  );
}
