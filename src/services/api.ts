import axios from "axios";
export const api = axios.create({
  baseURL: process.env.API_URL,
});

export const api_images = axios.create({
  baseURL: process.env.API_IMAGE
})