import axios from "axios";
import { errorMessage, successMessage } from "./message";
import { Authorization } from "./storage";

//Post Request
export const postRequest = (api, body) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: Authorization(),
    },
  };

  return axios.post(api, body, headers);
};
//Patch Request for
export const patchRequest = (api, body) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: Authorization(),
    },
  };

  return axios.patch(api, body, headers);
};
//Post multipart Request
export const fileRequest = (api, body) => {
  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(api, body, headers);
};

//Get Request
export const getRequest = (api) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: Authorization(),
    },
  };

  return axios.get(api, headers);
};

//delete Request

export const deleteRequest = (api, body) => {
  return axios.delete(api, {
    headers: {
      "Content-Type": "application/json",
      Authorization: Authorization(),
    },
    data: {
      data: body,
    },
  });
};
export const patchRequestWithHeader = (api, body, headers) => {
  return axios.patch(api, body, headers);
};

export const getError = (err) => {
  if (err.response) {
    errorMessage(err.response.data.message);
  } else {
    errorMessage(err.toString());
  }
};

export const getSuccess = (response) => {
  if (response) {
    successMessage(response.message);
  } else {
    successMessage(response.toString());
  }
};
