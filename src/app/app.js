import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Link, HashRouter, BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import AsyncLoadModule from './AsyncComponent';


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
  WrapCom1(props){
    return (
      <AsyncLoadModule moduleId="com1Box" load={() => import('./components/com1')}>
        {(Comp) => <Comp {...props}/>}
      </AsyncLoadModule>
    )
  }

  WrapCom2(props){
    return (
      <AsyncLoadModule moduleId="com2Box" load={() => import('./components/com2')}>
        {(Comp) => <Comp {...props}/>}
      </AsyncLoadModule>
    )
  }
  WrapCom3(props){
    return (
      <AsyncLoadModule moduleId="com3Box" load={() => import('./components/com3')}>
        {(Comp) => <Comp {...props}/>}
      </AsyncLoadModule>
    )
  }

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
                      <Route exact path="/" component={this.WrapCom1}/>
                      <Route exact path="/com1" component={this.WrapCom1}/>
                      <Route exact path="/com2" component={this.WrapCom2}/>
                      <Route exact path="/com3" component={this.WrapCom3}/>
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
}
;

render(<App/>, document.getElementById('app'))
export default App;
