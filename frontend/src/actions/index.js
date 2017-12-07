import {
  getAllPosts,
  getAllCategories,
  getAllPostsForCategory,
  votePost,
  getPost,
  getComments,
  voteComment,
} from '../utils/ReadableAPI'

const GET_POSTS = "GET_POSTS"
const GET_POST = "GET_POST"
const GET_POST_CATEGORY = "GET_POST_CATEGORY"
const UPVOTE_POST = "UPVOTE_POST"
const DOWNVOTE_POST = "DOWNVOTE_POST"
const GET_CATEGORIES = "GET_CATEGORIES"
const UPVOTE_COMMENT = "UPVOTE_COMMENT"
const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT"


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
  getAllPosts()
    .then(posts => {
      posts.map(post => {
        getComments(post.id)
          .then(comments => {
            dispatch({
              type: GET_POSTS,
              post,
              comments,
            })
          })
      })
    })
)

export const fetchPost = (id) => dispatch => (
  getPost(id)
    .then(post => {
      getComments(post.id)
        .then(comments => {
          dispatch({
            type: GET_POST,
            post,
            comments,
          })
        })
    })
)

export const fetchCategories = () => dispatch => (
  getAllCategories().then(categories =>dispatch(getCategories(categories)))
)

export const upVoteAction = (id) => dispatch => (
  votePost(id, 'upVote')
    .then(() => {
      dispatch({
        type: UPVOTE_POST,
        id
      })
    })
)

export const downVoteAction = (id) => dispatch => (
  votePost(id, 'downVote')
    .then(() => {
      dispatch({
        type: DOWNVOTE_POST,
        id
      })
    })
)

export const upVoteCommentAction = (id) => dispatch => (
  voteComment(id, 'upVote')
    .then((comment) => {
      dispatch({
        type: UPVOTE_COMMENT,
        id: comment.id,
        parentId: comment.parentId,
        voteScore: comment.voteScore,
      })
    })
)

export const downVoteCommentAction = (id) => dispatch => (
  voteComment(id, 'downVote')
    .then((comment) => {
      dispatch({
        type: DOWNVOTE_COMMENT,
        id: comment.id,
        parentId: comment.parentId,
        voteScore: comment.voteScore,
      })
    })
)
