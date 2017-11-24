import { combineReducers } from 'redux'

const post = (state = { post: {} }, action) => {
  switch(action.type){
    case 'GET_POST':
      return {
        ...state,
        post: action.post,
      }
    default:
      return state
  }
}

const posts = (state = { posts: []}, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.posts
      }
    case 'GET_POST_CATEGORY':
      return {
        ...state,
        posts: action.posts
      }
    case 'UPVOTE_POST':
      const currentPostUpVote = [...state.posts]
      const indexUp = currentPostUpVote.findIndex(post => post.id === action.id)
      currentPostUpVote[indexUp].voteScore = currentPostUpVote[indexUp].voteScore + 1
      return {
        posts: [...currentPostUpVote]
      }
    case 'DOWNVOTE_POST':
      const currentPostDownVote = [...state.posts]
      const indexDown = currentPostDownVote.findIndex(post => post.id === action.id)
      currentPostDownVote[indexDown].voteScore = currentPostDownVote[indexDown].voteScore - 1
      return {
        posts: [...currentPostDownVote]
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
  posts,
  category
})
