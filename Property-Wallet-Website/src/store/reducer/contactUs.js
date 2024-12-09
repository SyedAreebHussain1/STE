// import {FORGOTPASSWORD} from "../../constants/authConstants";
import { POST_CONTACT } from "../../constant/contact-us-constants";
import { MODAL_POPUP } from "../../constant/contact-us-constants";
import { CRM_MODAL_POPUP } from "../../constant/contact-us-constants";

const INITIAL_STATE = {
    contact_us: null,
    popup_modal: null
};
const postContact_Data = (state = INITIAL_STATE, action) => {
    // console.log("contact action=>", action.payload);
    switch (action.type) {
        case POST_CONTACT:
            return {
                ...state,
                contact_us: action.payload,
            };
        case MODAL_POPUP:
            return {
                ...state,
                popup_modal: action.payload,
            };
        case CRM_MODAL_POPUP:
            return {
                ...state,
                crm_modal_popup: action.payload,
            };
    }
    return state;
};
export default postContact_Data