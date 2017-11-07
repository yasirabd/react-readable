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
export const getAllCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories)
}

// GET /posts
export const getAllPosts = () => {
  return fetch(`${api}/posts`, { headers })
    .then(response => response.json())
}

// GET /:categories/posts
export const getAllPostsForCategory = (category) => {
  return fetch(`${api}/${category}/posts`, { headers })
    .then(response => response.json())
    .then(data => data)
}
