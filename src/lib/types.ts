import { type AVAILABLE_MODELS } from './constants';

export type AIModelId = (typeof AVAILABLE_MODELS)[number]['id'];

export interface Camera {
  id: string;
  name: string;
  location: 'Private Rooms' | 'Public Wards' | 'Corridors & Outdoors';
  streamUrl: string;
  enabledModels: AIModelId[];
  aiHint?: {
    model: AIModelId;
    text: string;
  };
}

export interface Alert {
  id: string;
  timestamp: string;
  cameraName: string;
  message: string;
  type: AIModelId;
}
