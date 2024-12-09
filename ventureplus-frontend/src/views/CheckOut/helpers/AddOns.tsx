import { useNavigate, useParams } from "react-router-dom";
import {
  checkBlackIcon,
  minusIcon,
  creditCardImage,
} from "../../../assets/checkOutAssets";
import { AddIcon } from "../../../assets/filledPlanSetupAssets";
import { leftArrowGrayIcon } from "../../../assets/website";
import RoundedButton from "../../../components/button/RoundedButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Button } from "antd";

interface AddOnsI {
  plan: any;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  toggle: () => void;
  toggleOnEdit: () => void;
}

const AddOns = ({
  plan,
  quantity,
  setQuantity,
  toggle,
  toggleOnEdit,
}: AddOnsI) => {
  const GetPaymentMethod = useSelector(
    (state: RootState) => state.GetPaymentMethod
  );
  return (
    <div className="  w-full  ">
      {GetPaymentMethod?.data ? (
        <div className="bg-[#FFFFFF] w-full rounded-2xl py-[20px] px-[24px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[#040615] text-[25px] font-medium">
              Card Details
            </h1>
            <Button
              className="text-[#000000] text-[16px] border-[#000000] border-[1px] rounded-full py-[20px] px-[35px]"
              onClick={toggleOnEdit}
            >
              Edit
            </Button>
          </div>
          <div className="sm:flex block gap-10 items-center mt-[20px]">
            <div className="border-[#016A70] border-[1px] p-[3px] sm:block hidden rounded-full">
              <div className="h-[18px] w-[18px] bg-[#016A70] rounded-full"></div>
            </div>
            <div>
              <h2 className="text-[#363F52] text-[18px] font-medium">
                Card Holder Name
              </h2>
              <p className="text-[#040615] text-[18px] font-bold">
                {GetPaymentMethod?.data?.billing_details?.name}
              </p>
            </div>
            <div>
              <h2 className="text-[#363F52] text-[18px] font-medium">
                Card No
              </h2>
              <p className="text-[#040615] text-[18px] font-bold">
                xxxx-xxxx-xxxx-{GetPaymentMethod?.data?.card?.last4}
              </p>
            </div>
            <div>
              <h2 className="text-[#363F52] text-[18px] font-medium">Expiry</h2>
              <p className="text-[#040615] text-[18px] font-bold">
                {Number(GetPaymentMethod?.data?.card?.exp_month) < 10
                  ? `0${GetPaymentMethod?.data?.card?.exp_month}`
                  : GetPaymentMethod?.data?.card?.exp_month}
                /{GetPaymentMethod?.data?.card?.exp_year.toString()?.slice(-2)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center border-[#E3E7EF] border-[1px] bg-[#F8FAFC] py-[50px] w-full rounded-2xl ">
          <img src={creditCardImage} />
          <p className="text-[#212838] text-[18px] font-medium mt-[10px] text-center">
            Secure your subscription and stay connected without any hassle.
          </p>
          <RoundedButton
            title={"Add Payment method"}
            type="primary"
            className=" px-[20px] mt-[18px]"
            onClick={toggle}
          />
        </div>
      )}
    </div>
  );
};

export default AddOns;
