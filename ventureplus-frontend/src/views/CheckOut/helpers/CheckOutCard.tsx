import { Button, Form, Input, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addOnPayApi,
  checkOutApi,
  checkOutUpdateApi,
  verifyCouponApi,
} from "../../../services/api/CheckOut";
import { errorMessage, successMessage } from "../../../utils/message";
import { useState } from "react";
import { getBusinessCountApi } from "../../../services/api/GetBusinessCount";
import { checkBlackIcon, minusIcon } from "../../../assets/checkOutAssets";
import { AddIcon } from "../../../assets/filledPlanSetupAssets";
import { FaArrowRightLong } from "react-icons/fa6";
import { RootState } from "../../../redux/store";
import { CompanygetApi } from "../../../services/api/auth";

interface CheckOutCardI {
  plan: any;
}

type PayLoadT = {
  packageId: number;
  tokenId: string;
  quantity: number;
  couponId?: string;
};

const CheckoutForm = ({ plan }: CheckOutCardI) => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState({
    value: "",
    isVerified: false,
    discount: 0,
  });
  const [couponLoading, setCouponLoading] = useState(false);
  const GetPaymentMethod = useSelector(
    (state: RootState) => state.GetPaymentMethod
  );

  const checkOut = useSelector((state: RootState) => state.checkOut);
  const addOnPay = useSelector((state: RootState) => state.addOnPay);

  const handleSubmit = async () => {
    let body: {
      couponId?: string;
      packageId: number;
    } = {
      packageId: Number(id),
    };
    if (coupon.value && coupon.isVerified) {
      body = { ...body, couponId: coupon.value };
    }
    const result = await CompanygetApi(dispatch);
    if (result?.subscriptionId) {
      checkOutUpdateApi(body, dispatch, onSuccess);
    } else {
      checkOutApi(body, dispatch, onSuccess);
    }
  };

  const handleAddOnSubmit = () => {
    let body: { packageId: number; quantity: number; couponId?: string } = {
      packageId: Number(id),
      quantity,
    };

    if (coupon.value && coupon.isVerified) {
      body = { ...body, couponId: coupon.value };
    }
    addOnPayApi(dispatch, body, onSuccess);
  };

  const onSuccess = (response: any) => {
    getBusinessCountApi(dispatch);

    if (response) {
      navigate("/all-done");
    }
  };

  const verifyCoupon = async () => {
    setCouponLoading(true);
    verifyCouponApi(coupon.value, onCouponVerification, setCouponLoading);
  };

  const onCouponVerification = (response: any) => {
    if (!response.coupon.valid) {
      errorMessage(response.coupon.description);
      setCouponLoading(false);
      return;
    }

    successMessage("Promo Code has been activated");
    setCoupon({
      ...coupon,
      isVerified: response.coupon.valid,
      discount: response.coupon.percent_off,
    });
    // getBusinessCountApi(dispatch);
    setCouponLoading(false);
  };

  const getDiscount = () => {
    return Number(plan?.price) * ((100 - Number(coupon.discount)) / 100);
  };
  const increaseQuantity = () => {
    if (quantity >= 20) {
      return;
    }
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity == 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col h-full w-full border-[#E3E7EF] border-[1px] bg-[#F8FAFC] rounded-2xl p-[24px]">
      <h1 className="text-[23px] font-semibold text-[#212838]">
        Order Summary
      </h1>
      {plan?.isSubscriptionPlan ? (
        <CardForPackage plan={plan} />
      ) : (
        <CardForAddOn
          plan={plan}
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}
      <div className="border-[#cdd4df59] border-t-[1px] mt-[25px] py-[20px] px-[5px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h4 className="text-[18px] text-[#363F52] font-semibold ">Total</h4>
            {!plan?.isSubscriptionPlan ? (
              plan?.title.includes("Credit") ? (
                <span className="text-[#97A1B5] text-[15px] font-medium">
                  ({quantity * 1000}x {plan?.title?.replace("New ", "")})
                </span>
              ) : (
                <span className="text-[#97A1B5] text-[15px] font-medium">
                  ({quantity}x {plan?.title?.replace("New ", "")})
                </span>
              )
            ) : null}
          </div>
          <p className="text-[#212838] text-[18px] font-bold ">
            {plan?.isSubscriptionPlan ? plan?.price : quantity * plan?.price}{" "}
            USD
          </p>
        </div>
        <div className="w-full bg-[#0039510f] rounded-lg p-[18px] mt-[10px]">
          <p className="text-[18px] text-[#363F52]">Promo Code</p>
          <div className="flex gap-2 h-max w-full mt-[5px]">
            <Input
              className="bg-transparent w-full h-[40px] flex-1 border-[#4A5366] rounded-lg outline-none shadow-none"
              value={coupon?.value}
              onChange={(e) =>
                setCoupon((pre) => ({ ...pre, value: e.target?.value }))
              }
              disabled={couponLoading || coupon?.isVerified}
            />
            <Button
              loading={couponLoading}
              className=" !border-[#016A70] !disabled:border-[#4A5366]  border-[1px] rounded-lg  h-[40px] bg-transparent disabled:bg-transparent disabled:text-[black]"
              disabled={!coupon.value}
              onClick={() =>
                coupon?.isVerified
                  ? setCoupon({
                      value: "",
                      isVerified: false,
                      discount: 0,
                    })
                  : verifyCoupon()
              }
            >
              {coupon?.isVerified ? "Edit" : "Apply"}
            </Button>
          </div>
        </div>
      </div>
      {coupon?.discount ? (
        <div className="flex justify-between items-center mb-[10px]">
          <div className="flex items-center gap-2">
            <h4 className="text-[18px] text-[#363F52] font-semibold ">
              Total After Coupon
            </h4>
          </div>
          <p className="text-[#212838] text-[18px] font-bold ">
            {getDiscount()} USD
          </p>
        </div>
      ) : null}
      <div className=" w-full ">
        <Spin spinning={loading} className="!w-full">
          <Button
            disabled={!GetPaymentMethod?.data}
            onClick={() =>
              plan?.isSubscriptionPlan ? handleSubmit() : handleAddOnSubmit()
            }
            loading={checkOut?.loading || addOnPay?.loading}
            htmlType="submit"
            className="flex justify-center w-full bg-[#01555A] text-[white] p-[25px]  rounded-[30px] items-center gap-2 hover:bg-[#01565ab9] disabled:hover:bg-[gray] "
          >
            <span className="font-medium text-[18px] ">Complete Order</span>
            <FaArrowRightLong className=" text-[20px]" />
          </Button>
        </Spin>
      </div>
    </div>
  );
};

const CheckOutCard = ({ plan }: CheckOutCardI) => {
  return <CheckoutForm plan={plan} />;
};

export default CheckOutCard;

const CardForAddOn = ({
  plan,
  quantity,
  decreaseQuantity,
  increaseQuantity,
}: {
  plan: any;
  quantity: number;
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
}) => {
  return (
    <div className="border-[1px] border-[#CDD4DF] rounded-2xl py-[25px] px-[30px] bg-[#ffffff8f] mt-[15px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[23px] text-[#212838] font-semibold">
          {plan?.title.includes("Credit")
            ? "Credits"
            : plan?.title?.replace("New ", "")}
        </h2>
        <h2 className="flex text-[#016A70] text-[29px] font-bold">
          ${plan?.price}
        </h2>
      </div>
      {/* <p className="text-[14px] text-[#363F52] font-medium">
        A basic plan offers essential features or services at an affordable
        cost, typically with limited options and access compared to premium
        plans.
      </p> */}
      <div className="flex justify-between items-center mt-[10px]">
        <h3 className="text-[18px] text-[#212838] font-semibold">
          No of{" "}
          {plan?.title.includes("Credit")
            ? "Credits"
            : plan?.title?.replace("New ", "")}
        </h3>
        <div className="flex  items-center">
          {!plan?.title.includes("Credit") ? (
            <>
              <img
                src={minusIcon}
                alt=""
                className="circle-icon !border-body "
                onClick={() => decreaseQuantity()}
              />
              <p className="text-[18px] text-[#040615] font-normal w-[35px] text-center">
                {quantity < 10 ? `0${quantity}` : quantity}
              </p>
              <img
                src={AddIcon}
                alt=""
                className="circle-icon !border-body"
                onClick={() => increaseQuantity()}
              />
            </>
          ) : (
            <>
              <img
                src={minusIcon}
                alt=""
                className="circle-icon !border-body "
                onClick={() => decreaseQuantity()}
              />
              <p className="text-[18px] text-[#040615] font-normal w-[60px] text-center">
                {quantity * 1000}
                {/* {quantity < 10 ? `${quantity}` : quantity} */}
              </p>
              <img
                src={AddIcon}
                alt=""
                className="circle-icon !border-body"
                onClick={() => increaseQuantity()}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CardForPackage = ({ plan }: { plan: any }) => {
  const perks = [
    "Idea validation",
    "Pitch",
    "Business Model Canvas",
    "Critical Analysis",
    "Product Promotion",
    "1 User",
  ];
  return (
    <div className="border-[1px] border-[#CDD4DF] rounded-2xl py-[25px] px-[30px] bg-[#ffffff8f] mt-[15px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[23px] text-[#212838] font-semibold">
          {plan?.title}
        </h2>
        <h2 className="flex text-[#016A70] text-[29px] font-bold">
          ${plan?.price}
        </h2>
      </div>

      <p className="text-[14px] text-[#363F52] font-medium ">
        {plan?.description
          ? plan?.description
          : "Perfect for professionals and small businesses in need of significant AI integration"}
      </p>
      <h1 className="text-body text-[18px] font-semibold mt-[10px]">
        Package Includes
      </h1>

      {plan?.noOfBusinessPlans > 0 && (
        <div className="flex gap-2 items-center">
          <img src={checkBlackIcon} alt="" className="w-4 h-4" />
          <p className="text-body">{plan?.noOfBusinessPlans} Business Plan </p>
        </div>
      )}

      {plan?.noOfBusinesses > 0 && (
        <div className="flex gap-2 items-center">
          <img src={checkBlackIcon} alt="" className="w-4 h-4" />
          <p className="text-body">{plan?.noOfBusinesses} Business </p>
        </div>
      )}

      {plan?.noOfchapters > 0 && (
        <div className="flex gap-2 items-center">
          <img src={checkBlackIcon} alt="" className="w-4 h-4" />
          <p className="text-body">{plan?.noOfchapters} Chapters </p>
        </div>
      )}
      {!plan?.isFree &&
        perks.map((perk) => (
          <div className="flex gap-2 items-center">
            <img src={checkBlackIcon} alt="" className="w-4 h-4" />
            <p className="text-body">{perk} </p>
          </div>
        ))}
    </div>
  );
};
