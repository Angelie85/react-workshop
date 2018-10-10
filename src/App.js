import React, { Component } from 'react';
import Header from './components/Header'
import Github from './components/github/Github'
import News from './containers/news/NewsContainer'
import HelloWorld from './containers/helloWorld/HelloWorldContainer'
import YouTube from './components/youtube/Youtube'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
          <div>
            <Route path="/" exact={true} component={HelloWorld}/>
            <Route path="/news" component={News}/>
            <Route path="/github" component={Github}/>
            <Route path="/youtube" component={YouTube}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
