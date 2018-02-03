import {
  getAllPosts,
  getAllCategories,
  getAllPostsForCategory,
  upVotePost,
  downVotePost,
  getPost,
  getComments,
  voteComment,
} from '../utils/ReadableAPI'

const GET_POSTS = "GET_POSTS"
const GET_POST = "GET_POST"
const GET_POST_CATEGORY = "GET_POST_CATEGORY"
const UPVOTE_POST_SUCCESS = "UPVOTE_POST_SUCCESS"
const DOWNVOTE_POST_SUCCESS = "DOWNVOTE_POST_SUCCESS"
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
      posts.forEach(post => {
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

// export const upVoteAction = (id) => dispatch => (
//   votePost(id, 'upVote')
//     .then(() => {
//       dispatch({
//         type: UPVOTE_POST,
//         id
//       })
//     })
// )

export const upVotePostAction = (id) => (dispatch) => (
  upVotePost(id).then(({ id }) => dispatch(upVotePostSuccess(id)))
)

const upVotePostSuccess = (id) => {
  return {
    type: UPVOTE_POST_SUCCESS,
    id
  }
}

// export const downVoteAction = (id) => dispatch => (
//   votePost(id, 'downVote')
//     .then(() => {
//       dispatch({
//         type: DOWNVOTE_POST,
//         id
//       })
//     })
// )

export const downVotePostAction = (id) => (dispatch) => (
  downVotePost(id).then(({ id }) => dispatch(downVotePostSuccess(id)))
)

const downVotePostSuccess = (id) => {
  return {
    type: DOWNVOTE_POST_SUCCESS,
    id
  }
}

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
