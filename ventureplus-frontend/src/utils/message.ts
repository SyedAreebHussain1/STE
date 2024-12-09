import moment from "moment-timezone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const errorMessage = (data: string) => {
  toast.error(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const successMessage = (data: string) => {
  toast.success(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const infoMessage = (data: string) => {
  toast.info(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const localizeMessageTime = (responseMessage: string) => {
  const dateRegex = /with effect from (.+)$/;
  const match = responseMessage.match(dateRegex);

  if (!match) {
    return responseMessage; // If no date is found, return the original message
  }

  // Parse the UTC date using moment
  const utcDate = moment.utc(match[1]);

  // Convert UTC time to local time based on the user's region
  const localDate = utcDate.local().format('ddd MMM DD YYYY hh:mm:ss A');

  // Replace the original UTC date in the message with the local date
  const localizedMessage = responseMessage.replace(match[1], localDate);

  return localizedMessage;
}