import { createStore, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from '../reducers';

type StoreFactory = () => Store;
export type RootState = ReturnType<typeof root>;

const root = combineReducers({ counter: counterReducer });

const configure: StoreFactory = () => createStore(root, composeWithDevTools());
export default configure;
