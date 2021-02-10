import axios from "axios";
export const authUrl = axios.create({
  baseURL: "http://localhost:8000/api/v1/auth",
});

export const blogUrl = axios.create({
  baseURL: "http://localhost:8000/api/v1/blog",
});

export const commentUrl = axios.create({
  baseURL: "http://localhost:8000/api/v1/comment",
});

export const userUrl = axios.create({
  baseURL: "http://localhost:8000/api/v1/user",
});



export const socialUrl = axios.create({
  baseURL: "http://localhost:8000/api/v1/social",
});
