import axios from 'axios'
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const api_images = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_IMAGE,
})
export const api_searchedMovies = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SEARCH,
})
