import axios from "axios";
import { urlLink } from "../../constant/contact-us-constants";

import { POST_CONTACT } from "../../constant/contact-us-constants";
import { MODAL_POPUP } from "../../constant/contact-us-constants";
import { CRM_MODAL_POPUP } from "../../constant/contact-us-constants";

// end points
import { supportForm } from "../../constant/contact-us-constants";
import { createCRMSupportForm } from "../../constant/contact-us-constants";
import { popupForm } from "../../constant/contact-us-constants";

const postContact = (data, onSuccess, onFailure) => {
  return (dispatch) =>
    axios
      .post(`${urlLink}/${supportForm}`, data)
      .then((res) => {
        dispatch({ type: POST_CONTACT, payload: res });
        onSuccess(res.data);
      })
      .catch((err) => {
        onFailure(err);
      });
};

const postPopup = (data, onSuccess, onFailure) => {
  return (dispatch) =>
    axios
      .post(`${urlLink}/${popupForm}`, data)
      .then((res) => {
        dispatch({ type: MODAL_POPUP, payload: res });
        onSuccess(res.data);
      })
      .catch((err) => {
        onFailure(err);
      });
};

const postCrmPopum = (data, onSuccess, onFailure) => {
  return (dispatch) =>
    axios
      .post(`${urlLink}/${createCRMSupportForm}`, data)
      .then((res) => {
        dispatch({ type: CRM_MODAL_POPUP, payload: res });
        onSuccess(res.data);
      })
      .catch((err) => {
        onFailure(err);
      });
};

export { postContact, postPopup, postCrmPopum };
