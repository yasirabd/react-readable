const api = process.env.REACT_APP_API_URL

// get token
let token = localStorage.token

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET /categories
// get all categories
export const getAllCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories)
}

// GET /:category/posts
// get all of the posts for a particular category
export const getAllPostsForCategory = (category) => {
  return fetch(`${api}/${category}/posts`, { headers })
    .then(response => response.json())
    .then(data => data)
}

// GET /posts
// get all of the posts
export const getAllPosts = () => {
  return fetch(`${api}/posts`, { headers })
    .then(response => response.json())
}

// POST /posts
// add a new post

// GET /posts/:id
// get the details of a single post
export const getPost = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(response => response.json())
}

// POST /posts/:id
// used for voting on a post
export const votePost = (option) => (id) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())
}

export const upVotePost = votePost('upvote')
export const downVotePost = votePost('downVote')

// PUT /posts/:id
// edit the details of an existing post

// DELETE /posts/:id
// Sets the deleted flag for a post to 'true'.
// Sets the parentDeleted flag for all child comments to 'true'.

// GET /posts/:id/comments
// get all the comments for a single post
export const getComments = (id) => {
  return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(response => response.json())
}

// POST /comments
// add a comment to a post

// GET /comments/:id
// get the details of a single comment

// POST /comments/:id
// used fot voting on a comment
export const voteComment = (id, option) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      option: option
    })
  }).then(data => data.json())
}

// PUT /comments/:id
// edit the details of an existing comment

// DELETE /comments/:id
// sets a comment's deleted flat to true
