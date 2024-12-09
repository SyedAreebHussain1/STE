import swal from "sweetalert";

export const errorMessage = (data) => {
  swal("Error", `${data}`, "error");
};

export const successMessage = (data) => {
  swal("Congratulations", `${data}`, "success");
};
export const infoMessage = (data) => {
  swal("Success", `${data}`, "warning");
};
