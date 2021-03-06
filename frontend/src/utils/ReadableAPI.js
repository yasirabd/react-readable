import { v4 } from 'uuid'

export const BASE_URL='http://localhost:3001';
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

// GET /posts
// get all of the posts
export const getPosts = () => {
  return fetch(`${BASE_URL}/posts`, { headers: HEADERS })
    .then(res => res.json())
}

// POST /posts
// add a new post
export const createPost = (data) => {
  return fetch(`${BASE_URL}/posts`,
    {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        ...data,
        id: v4(),
        timestamp: Date.now()
      })
    }).then(res => res.json())
}

// PUT /posts/:id
// edit the details of an existing post
export const editPost = (id, data) => {
  return fetch(`${BASE_URL}/posts/${id}`,
    {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({
        ...data
      })
    }).then(res => res.json())
}

// DELETE /posts/:id
// Sets the deleted flag for a post to 'true'.
// Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`,
    {
      method: 'DELETE',
      headers: HEADERS,
    })
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

// GET /posts/:id/comments
// get all the comments for a single post
export const getComments = (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}/comments`, { headers: HEADERS })
    .then(res => res.json())
}

// POST /comments
// add a comment to a post
export const createComment = (parentId, data) => {
  return fetch(`${BASE_URL}/comments`,
    {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        ...data,
        parentId,
        id: v4(),
        timestamp: Date.now()
      })
    }).then(res => res.json())
}

// PUT /comments/:id
// edit the details of an existing comment
export const editComment = (id, data) => {
  return fetch(`${BASE_URL}/comments/${id}`,
    {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({
        ...data,
        timestamp: Date.now()
      })
    }).then(res => res.json())
}

// DELETE /comments/:id
// sets a comment's deleted flat to true
export const deleteComment = (id) => {
  return fetch(`${BASE_URL}/comments/${id}`,
    {
      method: 'DELETE',
      headers: HEADERS
    })
}

// POST /comments/:id
// used fot voting on a comment
const voteComment = (option) => (commentId) => {
  return fetch(`${BASE_URL}/comments/${commentId}`,
    {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ option })
    }).then(res => res.json())
}

export const upVoteComment = voteComment('upVote');
export const downVoteComment = voteComment('downVote');
