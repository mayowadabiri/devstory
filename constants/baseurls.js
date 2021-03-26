import axios from "axios";

// const token = localStorage.getItem("token")
//   ? localStorage.getItem("token")
//   : null;
export const authUrl = axios.create({
  baseURL: "http://localhost:4000/api/v1/auth",
});

export const blogUrl = axios.create({
  baseURL: "http://localhost:4000/api/v1/blog",
  // headers: l
});

export const commentUrl = axios.create({
  baseURL: "http://localhost:4000/api/v1/comment",
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
});

export const userUrl = axios.create({
  baseURL: "http://localhost:4000/api/v1/user",
});

export const socialUrl = axios.create({
  baseURL: "http://localhost:4000/api/v1/social",
});
