import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Categories from './Categories'

class App extends Component {

  render() {

    return (
      <div>
        <div>
          <Link to='/categories'>Categories</Link>
        </div>
        <Route path='/categories' component={Categories} />
      </div>
    );
  }
}

export default App;
