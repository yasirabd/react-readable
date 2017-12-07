import { combineReducers } from 'redux'

const post = (state = { post: {} }, action) => {
  switch(action.type){
    case 'GET_POST':
      action.post.comments = action.comments
      return {
        ...state,
        post: action.post
      }
    case 'UPVOTE_COMMENT':
      const upVoteComments = [...state.post.comments]
      const indexUpComment = upVoteComments.findIndex(comment => comment.id === action.id)
      const upScore = action.voteScore
      const newUpScore = Object.assign({}, upVoteComments[indexUpComment], {
        voteScore: upScore
      })
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...upVoteComments.slice(0, indexUpComment),
          newUpScore, ...upVoteComments.slice(indexUpComment + 1)]
        }
      }
    case 'DOWNVOTE_COMMENT':
      const downVoteComments = [...state.post.comments]
      const indexDownComment = downVoteComments.findIndex(comment => comment.id === action.id)
      const downScore = action.voteScore
      const newDownScore = Object.assign({}, downVoteComments[indexDownComment], {
        voteScore: downScore
      })
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...downVoteComments.slice(0, indexDownComment),
          newDownScore, ...downVoteComments.slice(indexDownComment + 1)]
        }
      }
    default:
      return state
  }
}

const posts = (state = { posts: []}, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      action.post.comments = action.comments
      return {
        posts: [...state.posts, action.post]
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
  category,
})
