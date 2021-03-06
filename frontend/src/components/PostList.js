import React from 'react'
import PostListItem from './PostListItem'
import SortSelect from './SortSelect'

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
    <div>
      <SortSelect content={'posts'} />
    </div>
    {children}
  </div>
)

export default conditionalRender(PostList)
