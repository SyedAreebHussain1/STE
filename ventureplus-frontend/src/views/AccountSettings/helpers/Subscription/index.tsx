import { useDispatch, useSelector } from "react-redux";
import { circleDownloadIcon } from "../../../../assets/accountSettingsAssets";
import RoundedButton from "../../../../components/button/RoundedButton";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import Tag from "../../../../components/tag/tag";
import AccountSettingsLayout from "../AccountSettingsLayout";
import { RootState } from "../../../../redux/store";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getUsersSubscribedPlanApi } from "../../../../services/api/SubscriptionPlan";
import { Modal } from "antd";
import { visitIcon } from "../../../../assets/dashboardAssets";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useToggle from "../../../../hooks/useToggle";
import CheckoutModal from "../../../CheckOut/helpers/CheckoutModal";
import ConfirmationModalForCancelSubscription from "./helpers/ConfirmationModalForCancelSubscription";

const stripePromise = loadStripe(import.meta.env.VITE_BASE_STRIPE);

const Subscription = () => {
  const dispatch = useDispatch();
  const [open, toggle] = useToggle();
  const [openOnEdit, toggleOnEdit] = useToggle();
  const [cancelSub, toggleCancelSub] = useToggle();
  const [showAll, setShowAll] = useState(false);

  const getSubscriptionPlan = useSelector(
    (state: RootState) => state.getUserSubscribedplan
  );

  useEffect(() => {
    getUsersSubscribedPlanApi(dispatch);
  }, []);

  const Subscription = getSubscriptionPlan?.data?.data?.subscription;
  const Benefits = getSubscriptionPlan?.data?.data?.benefit;
  const PaymentMethods = getSubscriptionPlan?.data?.data?.paymentMethods;
  const Invoice = getSubscriptionPlan?.data?.data?.invoices;
  const balance = getSubscriptionPlan?.data?.data?.balance;

  const handleViewAll = () => {
    setShowAll(true);
  };

  const onCancel = () => {
    setShowAll(false);
  };

  const onModalSuccess = () => {
    getUsersSubscribedPlanApi(dispatch);
  };
  return (
    <PageContainer>
      {open && (
        <Elements stripe={stripePromise}>
          <CheckoutModal
            open={open}
            onCancel={toggle}
            onSuccess={onModalSuccess}
          />{" "}
        </Elements>
      )}
      {openOnEdit && (
        <Elements stripe={stripePromise}>
          <CheckoutModal
            open={openOnEdit}
            onCancel={toggleOnEdit}
            edit={true}
            onSuccess={onModalSuccess}
          />
        </Elements>
      )}

      {cancelSub && (
        <ConfirmationModalForCancelSubscription
          open={cancelSub}
          onCancel={toggleCancelSub}
        />
      )}
      <AccountSettingsLayout
        headerTitle="Subscription"
        headerDescription="Manage your plan details and billing information"
        selectedCard="Subscription"
      >
        <div className="flex gap-2 flex-wrap rounded-xl shad">
          {Subscription?.status !== "On Free" ? (
            <div className="rounded-md shadow-[0px_3.56px_8.62px_0px_#002A2D29] p-4 w-[400px] flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <div className="w-[20%]">
                  {Subscription?.status == "active" ? (
                    <p className="text-[#1158FF] flex text-center justify-center items-center font-medium body-s leading-[19.58px] p-1 rounded-full bg-[#1158FF]/20">
                      Active
                    </p>
                  ) : (
                    <p className="text-[#c30010] font-medium body-s leading-[19.58px]">
                      In Active
                    </p>
                  )}
                </div>
                <h1 className="text-[#363F52] font-medium body-s leading-[19.58px]">
                  Current Period:
                </h1>
                <p className="text-title font-bold body-s leading-[19.58px]">
                  {dayjs(
                    Subscription?.currentPeriodStart
                      ? Subscription?.currentPeriodStart
                      : ""
                  )?.format("YYYY-MM-DD HH:mm:ss")}
                  <span className="px-[5px]">to</span>
                  {dayjs(
                    Subscription?.currentPeriodEnd
                      ? Subscription?.currentPeriodEnd
                      : ""
                  )?.format("YYYY-MM-DD HH:mm:ss")}
                </p>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <h1 className="text-[#363F52] font-medium body-s leading-[19.58px]">
                  Next Payment:
                </h1>
                <p className="text-title font-bold body-s leading-[19.58px]">
                  ${Subscription?.amount} on{" "}
                  {dayjs(
                    Subscription?.currentPeriodEnd
                      ? Subscription?.currentPeriodEnd
                      : ""
                  )?.format("YYYY-MM-DD HH:mm:ss")}
                </p>
              </div>
              {!Benefits?.package?.isFree && Subscription?.amount ? (
                <div className="flex flex-1 flex-start mt-5">
                  <button
                    className="text-danger body-s font-medium"
                    onClick={toggleCancelSub}
                  >
                    Cancel Subscription
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="rounded-md shadow-[0px_3.56px_8.62px_0px_#002A2D29] p-4 w-[400px] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="paragraph font-semibold text-title">Benefits</h1>
              <Tag
                title={
                  Benefits?.package?.title ? Benefits?.package?.title : "Title"
                }
                type="darkPurple"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-para font-medium">Businesses</p>
                <p className="text-[12px] text-title font-bold">
                  {Benefits?.noOfBusinessesCreated
                    ? Benefits?.noOfBusinessesCreated
                    : ""}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-para font-medium">
                  Business Plans
                </p>
                <p className="text-[12px] text-title font-bold">
                  {Benefits?.noOfBusinessPlansCreated
                    ? Benefits?.noOfBusinessPlansCreated
                    : ""}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-para font-medium">Chapters</p>
                <p className="text-[12px] text-title font-bold">
                  {" "}
                  {Benefits?.package?.noOfchapters
                    ? Benefits?.package?.noOfchapters
                    : ""}
                </p>
              </div>
              {Benefits?.package?.isFree ? (
                ""
              ) : (
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-para font-medium">
                      Idea Validation
                    </p>
                    <p className="text-[12px] text-title font-bold">Yes</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-para font-medium">Pitch</p>
                    <p className="text-[12px] text-title font-bold">Yes</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-para font-medium">
                      Business Model Canvas
                    </p>
                    <p className="text-[12px] text-title font-bold">Yes</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-para font-medium">
                      Critical Analysis
                    </p>
                    <p className="text-[12px] text-title font-bold">Yes</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-para font-medium">
                      Product Promotion
                    </p>
                    <p className="text-[12px] text-title font-bold">Yes</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-para font-medium">
                      Single User
                    </p>
                    <p className="text-[12px] text-title font-bold">Yes</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-md shadow-[0px_3.56px_8.62px_0px_#002A2D29] p-4 w-[400px] flex flex-col gap-2">
            <h1 className="paragraph font-semibold text-title">
              Payment Methods
            </h1>
            {PaymentMethods?.cardHolder || PaymentMethods?.brand ? (
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="text-[#363F52] font-medium body-s leading-[19.58px]">
                      Card Holder
                    </p>
                    <p className="text-title font-bold body-s leading-[19.58px]">
                      {PaymentMethods?.cardHolder
                        ? PaymentMethods?.cardHolder
                        : ""}
                    </p>
                  </div>
                  <p className="text-[20px] font-bold  uppercase">
                    {PaymentMethods?.brand ? PaymentMethods?.brand : ""}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="text-[#363F52] font-medium body-s leading-[19.58px]">
                      Card No
                    </p>
                    <p className="text-title font-bold body-s leading-[19.58px]">
                      xxxx-xxxx-xxxx-
                      {PaymentMethods?.lastDigit
                        ? PaymentMethods?.lastDigit
                        : ""}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#363F52] font-medium body-s leading-[19.58px]">
                      Expiry
                    </p>
                    <p className="text-title font-bold body-s leading-[19.58px]">
                      {PaymentMethods?.expiry ? PaymentMethods?.expiry : ""}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="body-s text-para leading-[18px]">
                Your account does not have any payment methods linked at the
                moment. Please click the button below to add a payment method.
              </p>
            )}

            <RoundedButton
              type="primary"
              title={
                PaymentMethods?.cardHolder || PaymentMethods?.brand
                  ? "Edit Payment Method"
                  : "Add Payment Method"
              }
              sm
              onClick={() =>
                PaymentMethods?.cardHolder || PaymentMethods?.brand
                  ? toggleOnEdit()
                  : toggle()
              }
            />
          </div>
          {Invoice?.length > 0 ? (
            <div className="rounded-md shadow-[0px_3.56px_8.62px_0px_#002A2D29] p-4 w-[400px] flex flex-col gap-2">
              <h1 className="paragraph font-semibold text-title">
                Invoice History
              </h1>
              {Invoice?.slice(0, showAll ? Invoice.length : 2)?.map(
                (invoice: any, i: number) => (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center w-24">
                        <Tag
                          title={invoice?.status}
                          type={
                            invoice?.status == "paid" || "succeeded"
                              ? "success"
                              : "danger"
                          }
                        />
                      </div>
                      <p className="text-title body-s font-medium">
                        {dayjs(
                          invoice?.periodEnd ? invoice?.periodEnd : ""
                        )?.format("YYYY-MM-DD HH:mm:ss")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {invoice?.status == "unpaid" ? (
                        <p className="text-title body-s font-medium">
                          ${invoice?.amountDue}
                        </p>
                      ) : (
                        <p className="text-title body-s font-medium">
                          ${invoice?.amountPaid}
                        </p>
                      )}

                      {invoice?.invoicePdf ? (
                        <a href={invoice?.invoicePdf}>
                          <button>
                            <img src={circleDownloadIcon} alt="" />
                          </button>
                        </a>
                      ) : (
                        <a href={invoice?.hostedInvoiceUrl} target="_blank">
                          <button>
                            <img src={visitIcon} alt="" />
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                )
              )}

              {!showAll && Invoice?.length > 2 && (
                <div className="flex w-full flex-start">
                  <RoundedButton
                    title={"View All"}
                    sm
                    type="primary"
                    onClick={handleViewAll}
                  />
                </div>
              )}
            </div>
          ) : null}
        </div>
        <Modal title="Invoice History" open={showAll} onCancel={onCancel}>
          {Invoice?.map((invoice: any, i: number) => (
            <div className="flex items-center justify-between h-10">
              <div className="flex items-center">
                <div className="flex items-center w-28">
                  <Tag
                    className="h-8"
                    title={invoice?.status}
                    type={
                      invoice?.status == "paid" || "succeeded"
                        ? "success"
                        : "danger"
                    }
                  />
                </div>
                <p className="text-title body-s font-medium">
                  {dayjs(invoice?.periodEnd ? invoice?.periodEnd : "")?.format(
                    "YYYY-MM-DD HH:mm:ss"
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {invoice?.status == "unpaid" ? (
                  <p className="text-title body-s font-medium">
                    ${invoice?.amountDue}
                  </p>
                ) : (
                  <p className="text-title body-s font-medium">
                    ${invoice?.amountPaid}
                  </p>
                )}

                {invoice?.invoicePdf ? (
                  <a href={invoice?.invoicePdf}>
                    <button>
                      <img src={circleDownloadIcon} alt="" />
                    </button>
                  </a>
                ) : (
                  <a href={invoice?.hostedInvoiceUrl} target="_blank">
                    <button>
                      <img src={visitIcon} alt="" />
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </Modal>
      </AccountSettingsLayout>
    </PageContainer>
  );
};

export default Subscription;
