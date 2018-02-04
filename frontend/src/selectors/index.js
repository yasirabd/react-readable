import { createSelector } from 'reselect'

import { sortContent } from '../utils/helper'

const getSortByPosts = (state) => state.sortBy.posts
const getSortByComments = (state) => state.sortBy.comments
const getPosts = (state) => state.posts.filter(post => post.deleted === false)
const getComments = (state) => state.comments.filter(post => post.deleted === false)

export const getPostsWithComments = createSelector(
  [ getPosts, getComments ], (posts, comments) => {
    return posts.map(post => ({
      ...post,
      comments: comments.filter(comment =>
        (comment.deleted === false && comment.parentId === post.id))
    }));
  }
)

export const getSortedPosts = createSelector(
  [ getPosts, getSortByPosts ], (posts, sortByPosts) => {
    sortContent[sortByPosts.order](posts, sortByPosts.type);
    return posts;
  }
)

export const getSortedComments = createSelector(
  [ getComments, getSortByComments ], (comments, sortByComments) => {
    sortContent[sortByComments.order](comments, sortByComments.type);
    return comments;
  }
)

export const getSortedPostsWithSortedComments = createSelector(
  [ getSortedPosts, getSortedComments ], (sortedPosts, sortedComments) => {
    return sortedPosts.map(post => ({
      ...post,
      comments: sortedComments.filter(comment =>
        (comment.deleted === false && comment.parentId === post.id))
    }));
  }
)
