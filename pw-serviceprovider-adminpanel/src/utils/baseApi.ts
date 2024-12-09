// api.ts
import axios, { AxiosResponse } from "axios";
import { Authorization } from "./storage";
import { errorMessage } from "./message";

const baseURL = import.meta.env.VITE_BASE_URL;
// const baseURL = "http://192.168.18.93:3000/v1";
// VITE_BASE_URL=https://stagingbackend.propertywallet.pk/V1
// VITE_MAP_API_KEY=AIzaSyCDopm4vX7TGZNSSNb3wvfABABZRcjkS3M
// VITE_PYAMOB_TOKEN_VALUE=132926
// VITE_WEBSOCKET_URL=https://stagingbackend.propertywallet.pk/realtime
// VITE_META_APP_ID=653297966970556
// VITE_WEBESTATE_URL=https://stag.propertywallet.pk
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
