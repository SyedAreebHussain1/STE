import { Button } from "antd";
import { addPaymobCardApi } from "../../../redux/api/Wallet";
import { useDispatch } from "react-redux";

const PaymobCard = () => {
  const dispatch = useDispatch();
  function onSuccess(data: any) {
    const windowObject = window.open(
      `https://pakistan.paymob.com/api/acceptance/iframes/${
        import.meta.env.VITE_PYAMOB_TOKEN_VALUE
      }?payment_token=${data?.data?.token}`,
      "",
      "width=700,height=500,left=400,top=120,"
    );
  
  }
  return (
    <div className="flex justify-between items-center rounded-xl px-6 py-6 border border-borderColor  text-[#fff] text-[1rem] font-medium h-[170px]">
      <div>
        <div className="">
          <h2 className="text-black font-bold">No Card Added</h2>
          <Button
            type="link"
            className="text-primary"
            onClick={() => {
              addPaymobCardApi(dispatch, onSuccess);
            }}
          >
            Add New Card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymobCard;
