import { notification } from "antd";

export const errorMessage = (data: string) => {
  notification.error({
    message: "Error",
    description: data,
    duration: 5,
  });
};

export const successMessage = (data: string) => {
  notification.success({
    message: "Success",
    description: data,
    duration: 5,
  });
};

export const infoMessage = (data: string) => {
  notification.info({
    message: "Information",
    description: data,
    duration: 5,
  });
};
