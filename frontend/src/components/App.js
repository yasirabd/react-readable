import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Categories from './Categories'
import Comments from './Comments'
import Posts from './Posts'

class App extends Component {

  render() {

    return (
      <div>
        <div>
          <Link to='/'>Posts</Link>
          <Link to='/categories'>Categories</Link>
          <Link to='/comments'>Comments</Link>
        </div>
        <Route path='/' component={Posts} />
        <Route path='/categories' component={Categories} />
        <Route path='/comments' component={Comments} />
      </div>
    );
  }
}

export default App;
