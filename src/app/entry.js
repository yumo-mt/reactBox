import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Perf from 'react-addons-perf';



import App from './app';
Perf.start()
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
};
Perf.stop();
var measure = Perf.getLastMeasurements();
// 打印总时间
Perf.printInclusive(measure);
// 打印独占时间（不包括组件挂载时间）
Perf.printExclusive(measure);
// 打印浪费的时间（最有用的函数，例如render 了但是DOM没有变化）
Perf.printWasted(measure);
//操作真实dom的情况
Perf.printOperations(measure);