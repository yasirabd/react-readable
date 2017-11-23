import { combineReducers } from 'redux'

const post = (state = { post: []}, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        post: action.posts
      }
    case 'GET_POST_CATEGORY':
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

const category = (state = { category: [] }, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        category: action.categories
      }
    default:
      return state
  }
}

export default combineReducers({
  post,
  category
})
