import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configure from './store';
import Counter from './components/Counter';

import './App.scss';

import reactLogoUrl, { ReactComponent as ReactLogo } from './logo.svg';


const app = (
  <Provider store={configure()}>
    <Counter />
    <div>
      <img src={reactLogoUrl} alt="React logo" />
      <ReactLogo />
    </div>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
