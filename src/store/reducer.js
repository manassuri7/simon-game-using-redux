import {
  CHANGE_DIFFICULTY,
  ADD_COLOR_TO_SEQUENCE,
  SET_ACTIVE_COLOR,
  CHANGE_PLAYING_STATUS,
  WRITE_INPUT_INDEX,
  FAIL_GAME,
  TURN_GAME_OFF
} from './constants';

const initialState = {
  difficulty: 'medium',
  colorsSequence: [],
  activeColor: '',
  isPlayingSequence: false,
  userInputIndex: null,
  isSequenceFailed: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: payload
      };
    case ADD_COLOR_TO_SEQUENCE:
      return { ...state, colorsSequence: state.colorsSequence.concat(payload) };
    case SET_ACTIVE_COLOR:
      return { ...state, activeColor: payload };
    case CHANGE_PLAYING_STATUS:
      return {
        ...state,
        isPlayingSequence: !state.isPlayingSequence,
        activeColor: '',
        userInputIndex: 0
      };
    case WRITE_INPUT_INDEX:
      return { ...state, userInputIndex: payload };
    case FAIL_GAME:
      return { ...state, isSequenceFailed: true };
    case TURN_GAME_OFF:
      return {
        ...state,
        colorsSequence: [],
        activeColor: '',
        isPlayingSequence: false,
        userInputIndex: null,
        isSequenceFailed: false
      };
    default:
      return state;
  }
}
