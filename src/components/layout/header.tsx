import { Video } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex h-16 items-center border-b bg-card px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Video className="h-6 w-6 text-primary" />
        <span className="font-headline text-lg font-semibold">CCTV Insight</span>
      </div>
    </header>
  );
}
