import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const post = (state = {}, action) => {
  switch(action.type) {
    case 'EDIT_POST_SUCCESS':
      if (state.id !== action.post.id) {
        return state;
      }
      return {
        ...action.post
      }
    case 'UPVOTE_POST_SUCCESS':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore + 1
      }
    case 'DOWNVOTE_POST_SUCCESS':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore - 1
      }
    default:
      return state;
  }
}

const posts = (state = [], action) => {
  switch(action.type) {
    case 'GET_ALL_POSTS_SUCCESS':
      return action.posts;
    case 'CREATE_POST_SUCCESS':
      return [
        ...state,
        action.post
      ];
    case 'EDIT_POST_SUCCESS':
      return state.map(p => post(p, action))
    case 'DELETE_POST_SUCCESS':
      return [
        ...state.filter(post => post.id !== action.id)
      ]
    case 'UPVOTE_POST_SUCCESS':
    case 'DOWNVOTE_POST_SUCCESS':
      return state.map(p => post(p, action))
    default:
      return state;
  }
}

const comment = (state = {}, action) => {
  switch(action.type) {
    case 'UPVOTE_COMMENT_SUCCESS':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        voteScore: state.voteScore + 1
      }
    case 'DOWNVOTE_COMMENT_SUCCESS':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        voteScore: state.voteScore - 1
      }
    default:
      return state
  }
}

const comments = (state = [], action) => {
  switch(action.type) {
    case 'GET_ALL_COMMENTS_SUCCESS':
      return [
        ...state,
        ...action.comments,
      ]
    case 'UPVOTE_COMMENT_SUCCESS':
    case 'DOWNVOTE_COMMENT_SUCCESS':
      return state.map(c => comment(c, action))
    default:
      return state
  }
}

const categories = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES_SUCCESS':
      return action.categories
    default:
      return state
  }
}

export const DEFAULT_SORT_BY = {
  posts: {
    type: 'voteScore',
    order: 'descending',
  },
  comments: {
    type: 'voteScore',
    order: 'descending'
  }
}

const sortBy = (state = DEFAULT_SORT_BY, action) => {
  switch(action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        [action.content]: {
          type: action.sortByType,
          order: action.order
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  posts,
  comments,
  categories,
  sortBy,
  form,
})
