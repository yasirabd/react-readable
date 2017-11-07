import { getAllPosts } from '../utils/ReadableAPI'

export const GET_POSTS = "GET_POSTS"
export const CREATE_POST = "CREATE_POST"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const UPVOTE_POST = "UPVOTE_POST"
export const DOWNVOTE_POST = "DOWNVOTE_POST"

export const getPosts = (posts) => ({
  type: GET_POSTS,
  posts
})

export const fetchPosts = () => dispatch => (
  getAllPosts().then(posts => dispatch(getPosts(posts)))
)
