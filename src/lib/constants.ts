export const AVAILABLE_MODELS = [
  { id: 'FallDetection', name: 'Fall Detection', description: 'Detects if a person has fallen down.' },
  { id: 'CrowdDetection', name: 'Crowd Detection', description: 'Monitors crowd density in an area.' },
  { id: 'FaceRecognition', name: 'Face Recognition', description: 'Identifies authorized or unauthorized individuals.' },
  { id: 'GestureRecognition', name: 'Gesture Recognition', description: 'Recognizes specific hand gestures.' },
  { id: 'PersonUpdateDetection', name: 'Person Update Detection', description: 'Tracks when a person enters or leaves a frame.' },
  { id: 'SoundAnomalyDetection', name: 'Sound Anomaly Detection', description: 'Detects unusual sounds like screams or glass breaking.' },
  { id: 'OvercrowdingDetection', name: 'Overcrowding Detection', description: 'Triggers an alert when crowd exceeds a threshold.' },
] as const;

export const SECTIONS = ['Private Rooms', 'Public Wards', 'Corridors & Outdoors'] as const;
