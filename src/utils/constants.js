export const DIFFICULTY_LEVELS_TIMING = {
  easy: 1500,
  medium: 1000,
  hard: 400
};

export const DEFAULT_COLORS = [
  {
    type: 'green',
    bgColor: '#4CAF50',
    pressedColor: '#81C784',
    audioFile: new Audio('./audio/1.mp3')
  },
  {
    type: 'red',
    bgColor: '#F44336',
    pressedColor: '#E57373',
    audioFile: new Audio('./audio/2.mp3')
  },
  {
    type: 'yellow',
    bgColor: '#FFEB3B',
    pressedColor: '#FFF59D',
    audioFile: new Audio('./audio/3.mp3')
  },
  {
    type: 'blue',
    bgColor: '#2196F3',
    pressedColor: '#64B5F6',
    audioFile: new Audio('./audio/4.mp3')
  }
];
