import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import "./Packages.css";
import OrderSummary from "./OrderSummary/OrderSummary";
import { getAllCustomPackagesApi } from "../../../store/action/PackageAction";
import {
  CheckoutApi,
  DiscountAmountApi,
  createPackageApi,
  getAllPackages,
} from "../../../store/action/PackageAction";
import { calculateTotalAmount } from "../../AgencyCatalogue/utils/utils";
import { errorMessage } from "../../AgencyCatalogue/utils/message";
import { getFromStorage } from "../../AgencyCatalogue/utils/storage";
import {
  ADD_CHECKOUT_FAILURE,
  ADD_DISCOUNT_AMOUNT_CLEAR,
  CREATE_PACKAGE_CLEAR,
} from "../../../constant/packageConstant";
import { message } from "antd";

const PackagesMain = () => {
  const getAllPackagesState = useSelector((state) => state.allPackages);
  const getAllCustomPackages = useSelector(
    (state) => state.getAllCustomPackages
  );
  const createPackageState = useSelector((state) => state.createPackage);
  const { data: checkout_data, loading: checkout_loading } = useSelector(
    (state) => state.checkout
  );

  // const getAllPackagesState = useSelector((state) =>
  //   state.getIn(["allPackages"])
  // );
  // const getAllCustomPackages = useSelector((state) =>
  //   state?.getIn(["getAllCustomPackages"])
  // );
  // const createPackageState = useSelector((state) =>
  //   state.getIn(["createPackage"])
  // );
  // const { data: checkout_data, loading: checkout_loading } = useSelector(
  //   (state) => state.getIn(["checkout"])
  // );

  const user = getFromStorage("user");
  // const discountState = useSelector((state) => state.getIn(["discount"]));
  const discountState = useSelector((state) => state.discount);
  const [planIndex, setPlanIndex] = useState(null);
  const [discountCode, setDiscountCode] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    refCode: "",
    email: "",
    phone: "",
    agentPhone: "",
    paymentMethod: "",
  });
  const [currentState, setCurrentState] = useState("Custom");
  const [amount, setAmount] = useState(0);
  const [discountPer, setDiscountPer] = useState(0);
  const [basePrices, setBasePrices] = useState({
    listings: null,
    hotListings: null,
    userLimits: null,
    appointsments: null,
    website: null,
    websiteSetup: null,
  });
  const [data, setData] = useState({
    Custom: {
      hotListings: 0,
      listings: 0,
      userLimits: 0,
      appointsments: 0,
      hotListingsAmount: 0,
      listingsAmount: 0,
      userLimitsAmount: 0,
      appointsmentsAmount: 0,
      website: false,
      websiteSetup: false,
      websiteAmount: 0,
      websiteSetupAmount: 0,
    },
  });

  useEffect(() => {
    getAllCustomPackagesApi(dispatch);
  }, []);
  useEffect(() => {
    if (getAllCustomPackages?.data && getAllPackagesState.data) {
      const userLimit = getAllCustomPackages?.data?.data?.features.filter(
        (val) => val.title === "USERS"
      );
      const listings = getAllCustomPackages?.data?.data?.features.filter(
        (val) => val.title === "LISTINGS"
      );
      const hotListings = getAllCustomPackages?.data?.data?.features.filter(
        (val) => val.title === "HOTLISTINGS"
      );
      const website = getAllCustomPackages?.data?.data?.features.filter(
        (val) => val.title === "WEBSITE"
      );
      const appointsments = getAllCustomPackages?.data?.data?.features.filter(
        (val) => val.title === "APPOINTMENTS"
      );
      const websiteSetup = getAllCustomPackages?.data?.data?.features.filter(
        (val) => val.title === "WEBSITESETUP"
      );
      setBasePrices({
        userLimits: userLimit,
        listings: listings,
        hotListings: hotListings,
        website: website,
        appointsments,
        websiteSetup: websiteSetup,
      });

      const monthData = getAllCustomPackages?.data?.data?.plans.filter(
        (val) => val.title === "QUARTERLY"
      );

      const packages = getAllPackagesState?.data?.filter(
        (item) =>
          item.title === "Basic" ||
          item.title === "Silver" ||
          item.title === "Gold"
      );
      const newTabs = { ...data };
      if (packages.length) {
        packages.forEach((item) => {
          const monthlyData = item?.pwSubPackage?.filter(
            (item) => item.title === "Quarterly"
          )?.[0];
          const monthDataCustom =
            getAllCustomPackages?.data?.data?.plans.filter(
              (val) => val.title === "QUARTERLY"
            );
          const monthDataWebsite =
            getAllCustomPackages?.data?.data?.features.filter(
              (val) => val.title === "WEBSITE"
            );
          newTabs[item.title] = {
            hotListings: monthlyData?.hotListing,
            listings: monthlyData?.noListing,
            userLimits: monthlyData?.noOfUserLimit,
            appointsments: monthlyData?.noOfAppt,
            hotListingsAmount:
              monthlyData?.hotListing *
              (hotListings?.[0].basePrice -
                hotListings?.[0].intervals * (monthlyData?.hotListing - 1)),
            listingsAmount:
              monthlyData?.noListing *
              (listings?.[0].basePrice -
                listings?.[0].intervals * (monthlyData?.noListing - 1)),
            userLimitsAmount:
              monthlyData?.noOfUserLimit *
              (userLimit?.[0].basePrice -
                userLimit?.[0].intervals * (monthlyData?.noOfUserLimit - 1)),
            appointsmentsAmount:
              monthlyData?.noOfAppt *
              (appointsments?.[0].basePrice -
                appointsments?.[0].intervals * (monthlyData?.noOfAppt - 1)),
            website: false,
            websiteSetup: false,
            websiteAmount: 0,
            websiteSetupAmount: 0,
            plans: item?.pwSubPackage,
            currentPlan: monthlyData.title,
            discountPercentage: monthDataCustom[0].discountPercentage,
            noOfMonth: monthlyData.numberOfMonth,
            fixedCommission: monthDataCustom[0].fixCommision,
            StandardFee: monthDataCustom[0]?.StandardFee,
          };
          if (monthlyData.digitalCatlog === true) {
            newTabs[item.title].website = true;
            newTabs[item.title].websiteAmount = monthDataWebsite[0]?.basePrice;
          }
        });
      }
      // arrange plans by month
      let newPLans = new Array(4).fill("");
      let plansArray = getAllCustomPackages?.data?.data?.plans;
      for (let i = 0; i < plansArray?.length; i++) {
        if (plansArray?.[i]?.title === "MONTHLY") {
          newPLans[0] = plansArray?.[i];
        } else if (plansArray?.[i]?.title === "QUARTERLY") {
          newPLans[1] = plansArray?.[i];
        } else if (plansArray?.[i]?.title === "HALFYEARLY") {
          newPLans[2] = plansArray?.[i];
        } else if (plansArray?.[i]?.title === "YEARLY") {
          newPLans[3] = plansArray?.[i];
        }
      }

      newTabs.Custom = {
        ...newTabs.Custom,
        plans: newPLans,
        currentPlan: monthData[0].title,
        discountPercentage: monthData[0].discountPercentage,
        noOfMonth: monthData[0].planMonths,
        fixedCommission: monthData[0].fixCommision,
        userLimits: 1,
        userLimitsAmount: userLimit[0].basePrice,
        StandardFee: monthData?.[0].StandardFee,
      };
      setData(newTabs);
    }
  }, [getAllCustomPackages?.data, getAllPackagesState.data]);
  function setCurrentHelper(state) {
    setCurrentState(state);
  }
  function setAmountHelper(state) {
    setAmount(state);
  }
  function setIsInteractiveHelper(state) {
    setIsInteractive(state);
  }

  useEffect(() => {
    getAllPackages(dispatch);
  }, []);
  useEffect(() => {
    setPlanIndex(null);
  }, [tabIndex]);

  function handleDiscount() {
    if (discountCode === "") {
      errorMessage("Please enter your discount");
      return;
    }
    const getPackagePlanId = data["Custom"]?.plans?.filter(
      (item) =>
        item.title.toLowerCase() ===
        data[currentState].currentPlan.toLowerCase()
    );
    const body = {
      packagePlanId: getPackagePlanId?.[0]?.id,
      title: data[currentState].currentPlan,
      noOfRefresh:
        (data[currentState].listings + data[currentState].hotListings) * 5,
      noListing: data[currentState].listings,
      numberOfMonth:
        data[currentState]?.numberOfMonth || data[currentState]?.noOfMonth,
      noOfUserLimit: data[currentState]?.userLimits,
      noOfAppt: data[currentState]?.appointsments,
      hotListing: data[currentState]?.hotListings,
      charges: calculateTotalAmount(
        data[currentState]?.discountPercentage || 0,
        data[currentState]?.noOfMonth,
        data[currentState]?.hotListingsAmount,
        data[currentState]?.userLimitsAmount,
        data[currentState]?.listingsAmount,
        data[currentState]?.websiteAmount,
        data[currentState]?.websiteSetupAmount,
        data[currentState]?.fixedCommission,
        data[currentState]?.appointsmentsAmount,
        data[currentState]?.StandardFee
      ),
      digitalCatlog: data[currentState].website,
      isPublic: false,
      isSetup: data[currentState]?.websiteSetup,
      monthlyAmount: calculateTotalAmount(
        0,
        1,
        data[currentState]?.hotListingsAmount,
        data[currentState]?.userLimitsAmount,
        data[currentState]?.listingsAmount,
        data[currentState]?.websiteAmount,
        data[currentState]?.websiteSetupAmount,
        data[currentState]?.fixedCommission,
        data[currentState]?.appointsmentsAmount,
        data[currentState]?.StandardFee
      ),
    };
    createPackageApi(dispatch, body, onSuccess);
  }
  function onSuccess(data) {
    if (discountCode === "") {
      errorMessage("Please enter your discount");
    } else {
      let body = {
        subPackageId: data?.data?.id,
        discountCode: discountCode,
      };
      DiscountAmountApi(body, dispatch);
    }
  }

  useEffect(() => {
    if (discountState?.data) {
      setDiscountPer(discountState?.data?.data?.discountPercentage);
    }
  }, [discountState?.data]);

  useEffect(() => {
    setDiscountCode("");
    dispatch({ type: ADD_DISCOUNT_AMOUNT_CLEAR });
    dispatch({ type: CREATE_PACKAGE_CLEAR });

    setDiscountPer(0);
  }, [data]);

  useEffect(() => {
    dispatch({ type: ADD_DISCOUNT_AMOUNT_CLEAR });
    dispatch({ type: CREATE_PACKAGE_CLEAR });

    setDiscountPer(0);
  }, [discountCode]);

  function onCheckout() {
    if (
      userData.email &&
      userData.name &&
      userData.paymentMethod &&
      userData.phone
    ) {
      if (discountState?.data === null) {
        const checkoutAmount = calculateTotalAmount(
          data[currentState].discountPercentage || 0,
          data[currentState].noOfMonth,
          data[currentState].hotListingsAmount,
          data[currentState].userLimitsAmount,
          data[currentState].listingsAmount,
          data[currentState].websiteAmount,
          data[currentState].websiteSetupAmount,
          data[currentState].fixedCommission,
          data[currentState].appointsmentsAmount,
          data[currentState].StandardFee
        );
        if (Number(checkoutAmount) < 30000) {
          errorMessage(
            "Checkout amount should be greater than or equal to 30000"
          );
          return;
        }
        const getPackagePlanId = data?.["Custom"]?.plans?.filter(
          (item) =>
            item.title.toLowerCase() ===
            data[currentState].currentPlan.toLowerCase()
        );
        const body = {
          packagePlanId: getPackagePlanId?.[0]?.id,
          title: data[currentState].currentPlan,
          noOfRefresh:
            (data[currentState].listings + data[currentState].hotListings) * 5,
          noListing: data[currentState].listings,
          numberOfMonth:
            data[currentState]?.numberOfMonth || data[currentState]?.noOfMonth,
          noOfUserLimit: data[currentState].userLimits,
          noOfAppt: data[currentState].appointsments,
          hotListing: data[currentState].hotListings,
          charges: calculateTotalAmount(
            data[currentState].discountPercentage || 0,
            data[currentState].noOfMonth,
            data[currentState].hotListingsAmount,
            data[currentState].userLimitsAmount,
            data[currentState].listingsAmount,
            data[currentState].websiteAmount,
            data[currentState].websiteSetupAmount,
            data[currentState].fixedCommission,
            data[currentState].appointsmentsAmount,
            data[currentState].StandardFee
          ),
          digitalCatlog: data[currentState].website,
          isPublic: false,
          isSetup: data[currentState]?.websiteSetup,
          monthlyAmount: calculateTotalAmount(
            0,
            1,
            data[currentState]?.hotListingsAmount,
            data[currentState]?.userLimitsAmount,
            data[currentState]?.listingsAmount,
            data[currentState]?.websiteAmount,
            data[currentState]?.websiteSetupAmount,
            data[currentState]?.fixedCommission,
            data[currentState]?.appointsmentsAmount,
            data[currentState]?.StandardFee
          ),
        };
        createPackageApi(dispatch, body, onSuccessCheckout);
      } else {
        const body = {
          email: userData.email,
          fullName: userData.name,
          phone: userData.phone,
          PwSubPackageId: createPackageState?.data?.data?.id,
          discountCode: discountCode,
          agentPhoneNumber: userData.phone,
        };
        if (userData.refCode) {
          body.refCode = userData.refCode;
        }
        if (userData.paymentMethod === "paymob") {
          CheckoutApi(dispatch, body, "PayMob");
        } else {
          CheckoutApi(dispatch, body, "blinq");
        }
      }
    } else {
      errorMessage("Fill All the Required Fields");
    }
  }

  function onSuccessCheckout(data) {
    const body = {
      email: userData.email,
      fullName: userData.name,
      phone: userData.phone,
      PwSubPackageId: data?.data?.id,
      agentPhoneNumber: userData.phone,
    };
    if (userData.refCode) {
      body.refCode = userData.refCode;
    }
    if (userData.paymentMethod === "paymob") {
      CheckoutApi(dispatch, body, "PayMob");
    } else {
      CheckoutApi(dispatch, body, "blinq");
    }
  }

  useEffect(() => {
    if (checkout_data !== null) {
      window.open(
        `${
          checkout_data.data.ClickToPayUrl !== null
            ? checkout_data.data.ClickToPayUrl
            : `https://pakistan.paymob.com/api/acceptance/iframes/132926?payment_token=${checkout_data.data.token}`
        }`,
        "",
        "width=700,height=500,left=400,top=120,"
      );
      // history.goBack();
    }
    return () => {
      dispatch({ type: ADD_CHECKOUT_FAILURE });
    };
  }, [checkout_data]);

  return (
    <div className="packages-main">
      <Cart
        data={data && data}
        setData={setData}
        setCurrentHelper={setCurrentHelper}
        basePrices={basePrices}
        setIsInteractiveHelper={setIsInteractiveHelper}
        isInteractive={isInteractive}
        setTabIndex={setTabIndex}
        tabIndex={tabIndex}
        setPlanIndex={setPlanIndex}
        planIndex={planIndex}
      />
      <OrderSummary
        data={getAllCustomPackages}
        value={data?.[currentState]}
        setAmountHelper={setAmountHelper}
        isInteractive={isInteractive}
        handleDiscount={handleDiscount}
        setDiscountCode={setDiscountCode}
        discountCode={discountCode}
        discountPer={discountPer}
        setUserData={setUserData}
        userData={userData}
        onCheckout={onCheckout}
      />
    </div>
  );
};

export default PackagesMain;
