import axios from "axios";

export const AxiosIntance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});
