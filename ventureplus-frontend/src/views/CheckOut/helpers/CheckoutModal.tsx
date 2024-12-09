import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Form, Modal } from "antd";
import React, { SetStateAction, useState } from "react";
import TextInput from "../../../components/inputs/TextInput";
import RoundedButton from "../../../components/button/RoundedButton";
import { errorMessage, infoMessage } from "../../../utils/message";
import {
  createPaymentMethodApi,
  getPaymentMethodApi,
  updatePaymentMethodApi,
} from "../../../services/api/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const CheckoutModal = ({
  open,
  onCancel,
  edit = false,
  onSuccess,
}: {
  open: boolean;
  onCancel: () => void;
  edit?: boolean;
  onSuccess?: () => void;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [fieldValidate, setFieldsValidate] = useState({
    nameEmpty: true,
    cardNumberEmpty: true,
    dateEmpty: true,
    CVCEmpty: true,
    emailEmpty: true,
  });

  const updatePaymentMethod = useSelector(
    (state: RootState) => state.updatePaymentMethod
  );
  const PostPaymentMethod = useSelector(
    (state: RootState) => state.PostPaymentMethod
  );
  const handleSubmit = async (value: any) => {
    if (fieldValidate.nameEmpty) {
      infoMessage("Please Entry Name");
      return;
    } else if (fieldValidate.cardNumberEmpty) {
      infoMessage("Please Entry Card number");
      return;
    } else if (fieldValidate.dateEmpty) {
      infoMessage("Please Entry Date");
      return;
    } else if (fieldValidate.CVCEmpty) {
      infoMessage("Please Entry CVC");
      return;
    } else if (fieldValidate.emailEmpty) {
      infoMessage("Please Entry Email");
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    if (!cardElement) {
      return;
    }

    const { error, token } = await stripe.createToken(cardElement, {
      name: value?.name,
    });

    if (error) {
      if (error.message) {
        errorMessage(error.message);
      }
    } else {
      const body = {
        name: value?.name,
        email: value?.email,
        tokenId: token?.id,
      };
      if (edit) {
        updatePaymentMethodApi(dispatch, body, onApiSuccess);
      } else {
        createPaymentMethodApi(dispatch, body, onApiSuccess);
      }
    }
  };
  const onApiSuccess = () => {
    getPaymentMethodApi(dispatch);
    onCancel();
    if (onSuccess) {
      onSuccess();
    }
  };
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      closeIcon={false}
      footer={null}
      centered
      maskClosable={false}
      width={800}
    >
      <Form onFinish={handleSubmit}>
        <h1 className="text-[#212838] text-[23px] font-medium mb-[10px]">
          Card Details
        </h1>
        <label className="text-[#212838] text-[15px]">Name on Card</label>
        <TextInput
          name="name"
          placeholder="Name"
          className="p-[10px] text-[16px] shadow-none text-[#4A5366]  mt-[5px]"
          classNameFormItem="mb-[15px]"
          onChange={(e) =>
            e.target.value
              ? setFieldsValidate((pre) => ({ ...pre, nameEmpty: false }))
              : setFieldsValidate((pre) => ({ ...pre, nameEmpty: true }))
          }
        />
        <label className="text-[#212838] text-[15px]">Email</label>
        <TextInput
          name="email"
          placeholder="Email"
          className="p-[10px] text-[16px] shadow-none text-[#4A5366]  mt-[5px]"
          classNameFormItem="mb-[15px]  "
          onChange={(e) =>
            e.target.value
              ? setFieldsValidate((pre) => ({ ...pre, emailEmpty: false }))
              : setFieldsValidate((pre) => ({ ...pre, emailEmpty: true }))
          }
        />
        <label>
          Card Number
          <CardNumberElement
            options={{
              style: {
                base: {
                  color: "#4A5366",
                  fontSize: "16px",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#fa755a",
                },
              },
            }}
            onChange={(e) => {
              setFieldsValidate((pre) => ({
                ...pre,
                cardNumberEmpty: e.empty,
              }));
            }}
            className="p-[12px] border-[#d9d9d9] border-[1px] rounded-lg mb-[20px]  mt-[5px]"
          />
        </label>
        <div className="flex gap-3">
          <div className="w-full">
            <label>Expiration Date </label>
            <CardExpiryElement
              options={{
                style: {
                  base: {
                    color: "#4A5366",
                    fontSize: "16px",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#fa755a",
                  },
                },
              }}
              onChange={(e) =>
                setFieldsValidate((pre) => ({ ...pre, dateEmpty: e.empty }))
              }
              className="p-[12px] border-[#d9d9d9] border-[1px] rounded-lg mt-[5px]"
            />
          </div>
          <div className="w-full">
            <label>CVC </label>
            <CardCvcElement
              options={{
                style: {
                  base: {
                    color: "#4A5366",
                    fontSize: "16px",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#fa755a",
                  },
                },
              }}
              onChange={(e) =>
                setFieldsValidate((pre) => ({ ...pre, CVCEmpty: e.empty }))
              }
              className="p-[12px] border-[#d9d9d9] border-[1px] rounded-lg  mt-[5px]"
            />
          </div>
        </div>

        <div className="flex justify-end mt-[20px]">
          <div className="flex items-center gap-3">
            <RoundedButton
              title={"Back"}
              className="rounded-sm"
              sm
              htmlType="reset"
              onClick={onCancel}
            />
            <RoundedButton
              title={"Complete Payment details"}
              className="rounded-sm "
              type="primary"
              sm
              htmlType="submit"
              disabled={!stripe}
              loading={
                PostPaymentMethod?.loading || updatePaymentMethod?.loading
              }
            />
          </div>
        </div>
      </Form>
    </Modal>
  );
};
export default CheckoutModal;
