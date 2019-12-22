import { DEFAULT_COLORS } from './constants';

export const randomColor = () => {
  const colorsTypes = DEFAULT_COLORS.map(color => color.type);
  const randomIndex = Math.floor(Math.random() * colorsTypes.length);

  return colorsTypes[randomIndex];
};

export const playColorSound = color => {
  const colorObj = DEFAULT_COLORS.find(item => item.type === color);
  colorObj.audioFile.play();
};
