import { createStore, combineReducers, StoreEnhancer, Store } from 'redux';
import { counterReducer } from '../reducers';

type WindowWithDevTools = Window & {
  __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, unknown>
};
type UnknownEnhancer = StoreEnhancer<unknown, unknown> | undefined;

const attachReduxDevtools = (arg: Window | WindowWithDevTools): UnknownEnhancer => {
  if (!('__REDUX_DEVTOOLS_EXTENSION__' in arg)) return undefined;

  return arg.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line no-underscore-dangle
};

const root = combineReducers({ counter: counterReducer });

export type RootState = ReturnType<typeof root>;
const configure: () => Store = () => createStore(
  root,
  attachReduxDevtools(window),
);

export default configure;
