import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Header from './Header'
import SideNav from './SideNav'
import Categories from './Categories'
import Comments from './Comments'
import Posts from './Posts'

class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <div>
          <SideNav />
          <Link to=''></Link>
        </div>
        <Route path='/' component={Posts} />
      </div>
    );
  }
}

export default App;
