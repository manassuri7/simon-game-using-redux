import {
  CHANGE_DIFFICULTY,
  ADD_COLOR_TO_SEQUENCE,
  SET_ACTIVE_COLOR,
  CHANGE_PLAYING_STATUS,
  WRITE_INPUT_INDEX,
  FAIL_GAME,
  TURN_GAME_OFF
} from './constants';

export const changeDifficulty = difficultyType => ({
  type: CHANGE_DIFFICULTY,
  payload: difficultyType
});

export const addColorToSequence = color => ({
  type: ADD_COLOR_TO_SEQUENCE,
  payload: color
});

export const setActiveColor = color => ({
  type: SET_ACTIVE_COLOR,
  payload: color
});

export const writeInputIndex = idx => ({
  type: WRITE_INPUT_INDEX,
  payload: idx
});

export const changePlayingStatus = () => ({
  type: CHANGE_PLAYING_STATUS
});

export const failGame = () => ({
  type: FAIL_GAME
});

export const turnGameOff = () => ({
  type: TURN_GAME_OFF
});
