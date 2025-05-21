import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.API_URL || 'https://api.seuservidor.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error('[API ERROR]', err)
    return Promise.reject(err)
  },
)
