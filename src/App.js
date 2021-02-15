import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import EnterForm from './components/EnterForm';
import Chatroom from './components/Chatroom';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        Socket Chat by Sarah!
      </header>
      <main>
        <Router>
          <Route exact path='/' component={EnterForm} />
          <Route exact path='/chatroom' component={Chatroom} />
        </Router>
      </main>
    </div>
  );
}

export default App;
