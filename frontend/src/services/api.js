import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api/posts';
// const BASE_URL = 'https://personal-blog-app-o5tx.onrender.com/api/posts';
const BASE_URL = 'https://personal-blog-app-1-zjbb.onrender.com/api/posts';

export const createPost = (postData) => axios.post(`${BASE_URL}/`, postData);
export const getPosts = () => axios.get(`${BASE_URL}/`);
export const getPostById = (id) => axios.get(`${BASE_URL}/${id}`);
export const updatePost = (id, postData) => axios.put(`${BASE_URL}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${BASE_URL}/${id}`);
