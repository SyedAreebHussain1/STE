import axios from "axios";
import { urlLink } from "../../constant/contact-us-constants";

// end points
import { LOGIN, loginEndpoint, urlLink1 } from "../../constant/authConstants";

const loginAction = (body, onSuccess, onFailure) => {
  return (dispatch) =>
    axios
      .post(`${urlLink1}/${loginEndpoint}`, body)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.data?.data?.token);
        localStorage.setItem(
          "user",
          JSON.stringify(res?.data?.data?.exsistingUser)
        );
        dispatch({ type: LOGIN, payload: res });
        onSuccess(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        onFailure(err?.response?.data);
      });
};

export { loginAction };
