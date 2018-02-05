import * as api from '../utils/ReadableAPI'
import { wait } from '../utils/helper'

export const GET_ALL_POSTS_SUCCESS = "GET_ALL_POSTS_SUCCESS"
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS"
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS"
export const UPVOTE_POST_SUCCESS = "UPVOTE_POST_SUCCESS"
export const DOWNVOTE_POST_SUCCESS = "DOWNVOTE_POST_SUCCESS"
export const GET_ALL_COMMENTS_SUCCESS = "GET_ALL_COMMENTS_SUCCESS"
export const UPVOTE_COMMENT_SUCCESS = "UPVOTE_COMMENT_SUCCESS"
export const DOWNVOTE_COMMENT_SUCCESS = "DOWNVOTE_COMMENT_SUCCESS"
export const GET_ALL_CATEGORIES_SUCCESS = "GET_ALL_CATEGORIES_SUCCESS"
export const SET_SORT_BY = "SET_SORT_BY"

export const getAllPostsAndComments = () => (dispatch) => {
  wait(2000)
    .then(() => api.getPosts())
    .then(posts => {
      dispatch(getAllPostsSuccess(posts))
      posts.map(({ id }) => dispatch(getAllComments(id)))
    })
}

const getAllPostsSuccess = (posts) => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    posts
  }
}

export const createPost = (data) => (dispatch) => {
  api.createPost(data)
    .then(post => dispatch(createPostSuccess(post)))
}

const createPostSuccess = (post) => {
  return {
    type: CREATE_POST_SUCCESS,
    post
  }
}

export const editPost = (id, data) => (dispatch) => {
  api.editPost(id, data)
    .then((post) => dispatch(editPostSuccess(post)));
}

const editPostSuccess = (post) => {
  return {
    type: EDIT_POST_SUCCESS,
    post
  }
}

export const upVotePost = (id) => (dispatch) => {
  api.upVotePost(id)
    .then(({ id }) => dispatch(upVotePostSuccess(id)));
}

const upVotePostSuccess = (id) => {
  return {
    type: UPVOTE_POST_SUCCESS,
    id
  }
}

export const downVotePost = (id) => (dispatch) => {
  api.downVotePost(id)
    .then(({ id }) => dispatch(downVotePostSuccess(id)));
}

const downVotePostSuccess = (id) => {
  return {
    type: DOWNVOTE_POST_SUCCESS,
    id
  }
}

export const getAllComments = (postId) => (dispatch) => {
  return api.getComments(postId)
    .then(comments => dispatch(getAllCommentsSuccess(comments)))
}

const getAllCommentsSuccess = (comments) => {
  return {
    type: GET_ALL_COMMENTS_SUCCESS,
    comments
  }
}

export const upVoteComment = (id) => (dispatch) => {
  api.upVoteComment(id)
    .then(({ id }) => dispatch(upVoteCommentSuccess(id)));
}

const upVoteCommentSuccess = (id) => {
  return {
    type: UPVOTE_COMMENT_SUCCESS,
    id
  }
}

export const downVoteComment = (id) => (dispatch) => {
  api.downVoteComment(id)
    .then(({ id }) => dispatch(downVoteCommentSuccess(id)));
}

const downVoteCommentSuccess = (id) => {
  return {
    type: DOWNVOTE_COMMENT_SUCCESS,
    id
  }
}

export const getAllCategories = () => (dispatch) => {
  api.getCategories()
    .then(categories => dispatch(getAllCategoriesSuccess(categories)))
}

const getAllCategoriesSuccess = (categories) => {
  return {
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories
  }
}

export const setSortBy = (content, sortByType, order) => {
  return {
    type: SET_SORT_BY,
    content,
    sortByType,
    order
  }
}
