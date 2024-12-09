import axios from "axios";
import { urlLink } from "../../constant/contact-us-constants";

import {
  SMARTPOINTFORM,
  smartPointForm,
} from "../../constant/contact-us-constants";

const postSmartPoint = (data, onSuccess, onFailure) => {
  return (dispatch) =>
    axios
      .post(`${urlLink}/${smartPointForm}`, data)
      .then((res) => {
        dispatch({ type: SMARTPOINTFORM, payload: res });
        onSuccess(res.data);
      })
      .catch((err) => {
        onFailure(err);
      });
};

export default postSmartPoint;
