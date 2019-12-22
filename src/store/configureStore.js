import { createStore } from 'redux';
import reducer from './reducer';

export default function configureStore(initialState) {
  const devtools = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

  return createStore(reducer, initialState, devtools);
}
