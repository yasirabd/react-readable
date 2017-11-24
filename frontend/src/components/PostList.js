import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import PostListItem from './PostListItem'

class PostList extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts, match } = this.props
    const postList = posts.filter(post => {
      if(match.params.category) {
        return post && post.category === match.params.category
      } else {
        return post
      }
    }).map(post => (<PostListItem key={post.id} post={post} />))

    return(
      <div>
        <ul>
          {postList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
