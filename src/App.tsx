import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configure from './store';
import Counter from './components/Counter';

import './App.scss';


const app = (
  <Provider store={configure()}>
    <Counter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
