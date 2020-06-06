import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import EnterForm from './components/EnterForm';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Socket Chat by me... Sarah!
      </header>
      <main>
        <Router>
          <Route exact path='/' component={EnterForm} />
          <Route exact path='/chatroom' render={() =>
            <div>hi</div>
          } />
        </Router>
      </main>
    </div>
  );
}

export default App;
