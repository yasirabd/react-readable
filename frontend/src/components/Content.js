import React, { Component } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PostList from './PostList'
import PostDetails from './PostDetails'
import PostForm from './PostForm'
import { getSortedPostsWithSortedComments } from '../selectors'

class Content extends Component {
  filterPostByCategory(posts, category) {
    return posts.filter(post => post.category === category)
  }

  filterPostById(posts, id) {
    return posts.filter(post => post.id === id)[0]
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <Switch>
          <Route exact path='/'
            render={() => (
              <PostList posts={posts} />
            )}
          />
          <Route exact path='/posts/new'
            component={PostForm}
          />
          <Route exact path='/posts/:id'
            render={({ match }) => (
              <PostDetails {...this.filterPostById(posts, match.params.id)} />
            )}
          />
          <Route exact path='/categories/:name'
            render={({ match }) => (
              <PostList posts={this.filterPostByCategory(posts, match.params.name)} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: getSortedPostsWithSortedComments(state)
})

export default withRouter(connect(mapStateToProps)(Content))
