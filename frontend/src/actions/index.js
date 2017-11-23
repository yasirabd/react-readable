import {
  getAllPosts,
  getAllCategories,
  getAllPostsForCategory,
  votePost,
} from '../utils/ReadableAPI'

export const GET_POSTS = "GET_POSTS"
export const GET_POST_CATEGORY = "GET_POST_CATEGORY"
export const CREATE_POST = "CREATE_POST"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const UPVOTE_POST = "UPVOTE_POST"
export const DOWNVOTE_POST = "DOWNVOTE_POST"

export const GET_CATEGORIES = "GET_CATEGORIES"


export const getPosts = (posts) => ({
  type: GET_POSTS,
  posts
})

export const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories
})

export const getAllPostsForCategoryAction = (category) => dispatch => (
  getAllPostsForCategory(category)
    .then((posts) => {
      dispatch({
        type: GET_POST_CATEGORY,
        posts
      })
    })
)

export const fetchPosts = () => dispatch => (
  getAllPosts().then(posts => dispatch(getPosts(posts)))
)

export const fetchCategories = () => dispatch => (
  getAllCategories().then(categories =>dispatch(getCategories(categories)))
)

export const upVoteAction = (id) => dispatch => (
  votePost(id, 'upVote')
    .then(() => {
      dispatch({
        type: 'UPVOTE_POST',
        id
      })
    })
)

export const downVoteAction = (id) => dispatch => (
  votePost(id, 'downVote')
    .then(() => {
      dispatch({
        type: 'DOWNVOTE_POST',
        id
      })
    })
)
