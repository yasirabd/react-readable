const BASE_URL='http://localhost:3001';
const HEADERS = {
  'Authorization': 'some-auth-token',
  'Content-Type': 'application/json'
}

// GET /categories
// get all categories
export const getCategories = () => {
  return fetch(`${BASE_URL}/categories`, { headers: HEADERS })
    .then(res => res.json())
    .then(data => data.categories)
}

// GET /:category/posts
// get all of the posts for a particular category
// export const getAllPostsForCategory = (category) => {
//   return fetch(`${api}/${category}/posts`, { headers })
//     .then(response => response.json())
//     .then(data => data)
// }

// GET /posts
// get all of the posts
// export const getAllPosts = () => {
//   return fetch(`${api}/posts`, { headers })
//     .then(response => response.json())
// }

// POST /posts
// add a new post

// GET /posts/:id
// get the details of a single post
// export const getPost = (id) => {
//   return fetch(`${api}/posts/${id}`, { headers })
//     .then(response => response.json())
// }

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts`, { headers: HEADERS })
    .then(res => res.json())
}

// POST /posts/:id
// used for voting on a post
const votePost = (option) => (id) => {
  return fetch(`${BASE_URL}/posts/${id}`,
  {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ option })
  }).then(res => res.json());
}

export const upVotePost = votePost('upVote');
export const downVotePost = votePost('downVote');

// PUT /posts/:id
// edit the details of an existing post

// DELETE /posts/:id
// Sets the deleted flag for a post to 'true'.
// Sets the parentDeleted flag for all child comments to 'true'.

// GET /posts/:id/comments
// get all the comments for a single post
export const getComments = (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}/comments`, { headers: HEADERS })
    .then(res => res.json())
}

// POST /comments
// add a comment to a post

// GET /comments/:id
// get the details of a single comment

// POST /comments/:id
// used fot voting on a comment
const voteComment = (option) => (commentId) => {
  return fetch(`${BASE_URL}/comments/${commentId}`,
  {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ option })
  })
    .then(res => res.json());
}

export const upVoteComment = voteComment('upVote');
export const downVoteComment = voteComment('downVote');

// PUT /comments/:id
// edit the details of an existing comment

// DELETE /comments/:id
// sets a comment's deleted flat to true
