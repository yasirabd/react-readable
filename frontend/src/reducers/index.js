const post = (state = { post: []}, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        post: action.posts
      }
    default:
      return state
  }
}

export default post
