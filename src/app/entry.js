import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const render2 = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

render2(App);

if (module.hot) {
  module.hot.accept('./app', () => { render2(App) });
}