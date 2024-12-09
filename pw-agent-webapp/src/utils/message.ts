import { message } from "antd";

export const errorMessage = (data: string) => {
  message.error(data, 5);
};

export const successMessage = (data: string) => {
  message.success(data, 5);
};
export const infoMessage = (data: string) => {
  message.info(data, 5);
};
