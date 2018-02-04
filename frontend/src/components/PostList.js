import React from 'react'
import PostListItem from './PostListItem'

const conditionalRender = (WrappedComponent) => ({ posts, ...props }) => (
  posts.length === 0
  ? <WrappedComponent>
      <p><em>No Posts to Display!</em></p>
    </WrappedComponent>
  : <WrappedComponent {...props}>
      {posts.map(
        post => <PostListItem key={post.id} {...post} />
      )}
    </WrappedComponent>
)

const PostList = ({ children }) => (
  <div>
    <ul>
      {children}
    </ul>
  </div>
)

export default conditionalRender(PostList)
