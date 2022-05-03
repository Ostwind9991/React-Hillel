import axios from "axios";
import { JSON_API_URL, MOCK_API_URL } from "../constants";

export const jsonApi = axios.create({
  baseURL: JSON_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const mockApi = axios.create({
  baseURL: MOCK_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
