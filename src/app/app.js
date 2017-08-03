import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Link, BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Com1 from './components/com1';
import Com2 from './components/com2';
import Com3 from './components/com3';
import 'react-hot-loader/patch';
import './app.css'
const leftNav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink activeStyle={{color: 'blue'}} to="/com1">com1</NavLink></li>
        <li><NavLink activeStyle={{color: 'blue'}} to="/com2">com2</NavLink></li>
        <li><NavLink activeStyle={{color: 'blue'}} to="/com3">com3</NavLink></li>
      </ul>
    </nav>
  )
};
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route render={({location}) => (
          <div style={{position: 'absolute', left: '400px'}}>
            <div>
              {leftNav()}
            </div>
            <div>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="example" timeout={{enter: 500, exit: 300}}>
                  <div key={location.pathname}
                       style={{position: 'absolute', width: '200px', background: 'lightblue', height: '100px'}}>
                    <Switch key={location.key} location={location}>
                      <Route exact path="/" component={Com1}/>
                      <Route exact path="/com1" component={Com1}/>
                      <Route exact path="/com2" component={Com2}/>
                      <Route exact path="/com3" component={Com3}/>
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}/>
      </BrowserRouter>
    )
  }
};
export default App;
