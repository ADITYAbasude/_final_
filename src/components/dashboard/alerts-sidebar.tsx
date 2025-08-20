import type { Alert, AIModelId } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bell, User, Users, Footprints, Ear, Hand, Siren } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertIconMap = {
  [key in AIModelId]: React.ElementType;
};

const alertIcons: AlertIconMap = {
    FallDetection: Siren,
    CrowdDetection: Users,
    FaceRecognition: User,
    GestureRecognition: Hand,
    PersonUpdateDetection: Footprints,
    SoundAnomalyDetection: Ear,
    OvercrowdingDetection: Users,
}

interface AlertsSidebarProps {
  alerts: Alert[];
}

export default function AlertsSidebar({ alerts }: AlertsSidebarProps) {
  return (
    <aside className="hidden w-80 flex-col border-l bg-card p-4 lg:flex">
      <h2 className="font-headline text-xl font-semibold">Recent Alerts</h2>
      <ScrollArea className="mt-4 flex-1">
        <div className="space-y-4 pr-4">
          {alerts.map(alert => {
            const Icon = alertIcons[alert.type] || Bell;
            return (
              <div key={alert.id} className="flex items-start gap-3">
                <div className={cn("mt-1 flex h-8 w-8 items-center justify-center rounded-full", alert.type === 'FallDetection' ? 'bg-destructive' : 'bg-accent')}>
                    <Icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.cameraName} &middot; {alert.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </aside>
  );
}
