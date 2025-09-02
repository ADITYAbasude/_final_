import type { Camera, Alert } from './types';

export const cameras: Camera[] = [
  {
    id: 'cam-001',
    name: 'VIP Room 101',
    location: 'Private Rooms',
    streamUrl: 'http://192.168.0.119:8080/video',
    enabledModels: ['FaceRecognition', 'SoundAnomalyDetection'],
    aiHint: { model: 'FaceRecognition', text: 'Recognized: Dr. Evans' },
  },
  {
    id: 'cam-002',
    name: 'VIP Room 102',
    location: 'Private Rooms',
    streamUrl: 'https://placehold.co/1280x720.png',
    enabledModels: ['SoundAnomalyDetection'],
  },
  {
    id: 'cam-003',
    name: 'Ward A-1',
    location: 'Public Wards',
    streamUrl: 'https://placehold.co/1280x720.png',
    enabledModels: ['FallDetection', 'OvercrowdingDetection'],
    aiHint: { model: 'FallDetection', text: 'Potential Fall Detected!' },
  },
  {
    id: 'cam-004',
    name: 'Ward A-2',
    location: 'Public Wards',
    streamUrl: 'https://placehold.co/1280x720.png',
    enabledModels: ['OvercrowdingDetection'],
  },
  {
    id: 'cam-005',
    name: 'Ward B-1',
    location: 'Public Wards',
    streamUrl: 'https://placehold.co/1280x720.png',
    enabledModels: ['FallDetection', 'CrowdDetection'],
  },
  {
    id: 'cam-006',
    name: 'Main Corridor',
    location: 'Corridors & Outdoors',
    streamUrl: 'https://placehold.co/1280x720.png',
    enabledModels: ['CrowdDetection', 'PersonUpdateDetection'],
    aiHint: { model: 'CrowdDetection', text: 'Crowd Density: Moderate' },
  },
  {
    id: 'cam-007',
    name: 'East Wing Hallway',
    location: 'Corridors & Outdoors',
    streamUrl: 'https://placehold.co/1280x720.png',
    enabledModels: ['PersonUpdateDetection'],
  },
  {
    id: 'cam-008',
    name: 'Main Entrance',
    location: 'Corridors & Outdoors',
    streamUrl: 'https://placehold.co/1280x720.png',
    enabledModels: ['FaceRecognition', 'OvercrowdingDetection'],
  },
];

export const alerts: Alert[] = [
    { id: 'alert-1', timestamp: '2 mins ago', cameraName: 'Ward A-1', message: 'Potential fall detected.', type: 'FallDetection'},
    { id: 'alert-2', timestamp: '5 mins ago', cameraName: 'Main Entrance', message: 'Area overcrowding.', type: 'OvercrowdingDetection'},
    { id: 'alert-3', timestamp: '10 mins ago', cameraName: 'VIP Room 101', message: 'Unauthorized person detected.', type: 'FaceRecognition'},
    { id: 'alert-4', timestamp: '12 mins ago', cameraName: 'VIP Room 102', message: 'Unusual sound detected.', type: 'SoundAnomalyDetection'},
];
