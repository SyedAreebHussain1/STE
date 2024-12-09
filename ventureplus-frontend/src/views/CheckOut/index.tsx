import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { RootState } from "../../redux/store";
import { getSubscriptionPlanByIdApi } from "../../services/api/SubscriptionPlan";
import AddOns from "./helpers/AddOns";
import CheckOutCard from "./helpers/CheckOutCard";
import { leftArrowGrayIcon } from "../../assets/website";
import useToggle from "../../hooks/useToggle";
import CheckoutModal from "./helpers/CheckoutModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getPaymentMethodApi } from "../../services/api/PaymentMethod";
import { subPlanBg } from "../../assets/subscriptionAssets";

const stripePromise = loadStripe(import.meta.env.VITE_BASE_STRIPE);
const CheckOut = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const getSubscriptionPlanById = useSelector(
    (state: RootState) => state.getSubscriptionPlanById?.data?.data
  );

  useEffect(() => {
    if (id) {
      getSubscriptionPlanByIdApi(dispatch, Number(id));
    }
  }, [id]);
  const navigate = useNavigate();
  const [open, toggle] = useToggle();
  const [openOnEdit, toggleOnEdit] = useToggle();

  useEffect(() => {
    getPaymentMethodApi(dispatch);
  }, []);

  useEffect(() => {
    localStorage.removeItem("planId");
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${subPlanBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      {" "}
      <PageContainer>
        {open && (
          <Elements stripe={stripePromise}>
            <CheckoutModal open={open} onCancel={toggle} />{" "}
          </Elements>
        )}
        {openOnEdit && (
          <Elements stripe={stripePromise}>
            <CheckoutModal
              open={openOnEdit}
              onCancel={toggleOnEdit}
              edit={true}
            />
          </Elements>
        )}

        <div
          className="flex items-center cursor-pointer gap-1"
          onClick={() => navigate(-1)}
        >
          <span>
            <img src={leftArrowGrayIcon} alt="" />
          </span>
          <span className="text-para heading-xs font-medium">Back</span>
        </div>
        <div className="w-full">
          <h1 className="text-body text-[29px] font-semibold">
            Complete your Order
          </h1>
        </div>
        <Row gutter={[16, 16]} className="h-max mt-[10px] ">
          <Col sm={24} lg={15} xxl={16} className="h-full w-full">
            <AddOns
              plan={getSubscriptionPlanById}
              quantity={quantity}
              setQuantity={setQuantity}
              toggle={toggle}
              toggleOnEdit={toggleOnEdit}
            />
          </Col>
          <Col sm={24} lg={9} xxl={8} className="min-h-full  ">
            <CheckOutCard plan={getSubscriptionPlanById} />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default CheckOut;
