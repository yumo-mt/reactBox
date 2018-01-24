import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Perf from 'react-addons-perf';



import App from './app';
const render2 = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}


if (module.hot) {
  module.hot.accept('./app', () => { render2(App) });
};

render2(App);
 