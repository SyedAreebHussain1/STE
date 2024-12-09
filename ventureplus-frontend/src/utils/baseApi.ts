// api.ts
import axios, { AxiosResponse } from "axios";
import { Authorization } from "./storage";
import { errorMessage } from "./message";

const baseURL = import.meta.env.VITE_BASE_URL;
// VITE_BASE_URL=https://stagingbackend.ventureplusai.com/v1
// # VITE_BASE_URL=https://zb7v2dnc-3000.inc1.devtunnels.ms/v1
// VITE_MAP_API_KEY=AIzaSyCDopm4vX7TGZNSSNb3wvfABABZRcjkS3M
// VITE_CHATGPT_API_KEY=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
// VITE_BASE_URL_FE=https://staging.ventureplusai.com/
// VITE_BASE_URL_LAMDA=https://fj4iuiztqft5wlp6s7bf3bgysi0pmiyq.lambda-url.ap-south-1.on.aws
// VITE_BASE_STRIPE=pk_test_51PoKSV05xSSqstVA1rG0Rp1R80gcacBzg1eNpa3r4Xw5SAdIKk51IwES9AkdGUIlEl57le2bnabX7jlXJ3PBrAl700v03elLpM
// VITE_GOOGLE_ANALYTICS_KEY=G-EWZ7Z428R0
// VITE_BASE_URL_SOCKET=https://stagingbackend.ventureplusai.com/realtime
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

// Define your API utility functions
export const get = async <T>(url: string): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",

    Authorization: Authorization(),
  };
  const response: AxiosResponse<T> = await axios.get(`${baseURL}/${url}`, {
    headers,
  });
  return response.data;
};

export const getRequest = async <T>(url: string): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: Authorization(),
  };
  const response: AxiosResponse<T> = await axios.get(`${baseURL}/${url}`, {
    headers,
  });
  return response.data;
};

export const post = async <T>(url: string, payload: any): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: Authorization(),
  };
  const response: AxiosResponse<T> = await axios.post(
    `${baseURL}/${url}`,
    payload,
    { headers },
  );
  return response.data;
};

export const postWithoutPayload = async <T>(url: string): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: Authorization(),
  };
  const response: AxiosResponse<T> = await axios.post(`${baseURL}/${url}`, {
    headers,
  });
  return response.data;
};

export const del = async <T>(url: string, body?: any): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: Authorization(),
  };
  const response: AxiosResponse<T> = await axios.delete(`${baseURL}/${url}`, {
    headers,
    data: body,
  });
  return response.data;
};

export const update = async <T>(url: string, payload: any): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: Authorization(),
  };
  const response: AxiosResponse<T> = await axios.put(
    `${baseURL}/${url}`,
    payload,
    { headers },
  );
  return response.data;
};
export const patch = async <T>(url: string, payload?: any): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: Authorization(),
  };
  const response: AxiosResponse<T> = await axios.patch(
    `${baseURL}/${url}`,
    payload,
    { headers },
  );
  return response.data;
};
export const patchFormData = async <T>(
  url: string,
  payload?: any,
): Promise<T> => {
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: Authorization(),
  };
  const response: AxiosResponse<T> = await axios.patch(
    `${baseURL}/${url}`,
    payload,
    { headers },
  );
  return response.data;
};
export const getError = (err: any) => {
  if (err.response) {
    errorMessage(err.response?.data?.message);
  } else {
    errorMessage(err.toString());
  }
};

export const postImage = async <T>(url: string, payload: any): Promise<T> => {
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: Authorization(),
  };
  const response: AxiosResponse<T> = await axios.post(
    `${baseURL}/${url}`,
    payload,
    { headers },
  );
  return response.data;
};
