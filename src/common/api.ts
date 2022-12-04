import axios, { AxiosInstance } from "axios";

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

export const API_COORDINATES_PATH = "/api/v1/coordinates";

let client: AxiosInstance;

export const getClient = (): AxiosInstance => {
  if (!client) {
    client = axios.create({
      baseURL: API_BASE_URL,
    });
  }

  return client;
};
