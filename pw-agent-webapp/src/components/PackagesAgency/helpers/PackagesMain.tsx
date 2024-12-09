import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import OrderSummary from "./OrderSummary/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import {
  CheckoutApi,
  DiscountAmountApi,
  createPackageApi,
  getAllPackages,
  getAllCustomPackagesApi,
} from "../../../redux/api/PackagesAgency/index";
import { calculateTotalAmount } from "../../../utils/utils";
import { errorMessage } from "../../../utils/message";
import { getFromStorage } from "../../../utils/storage";
import { clearCheckout } from "../../../redux/slices/PackagesAgency/checkoutSlice";
import { clearDiscount } from "../../../redux/slices/PackagesAgency/discountSlice";
import { clearCreatePackage } from "../../../redux/slices/PackagesAgency/createPackageSlice";
import "./Packages.css";

const PackagesMain = () => {
  const getAllPackagesState = useSelector((state: any) => state?.allPackages);
  const getAllCustomPackages = useSelector(
    (state: any) => state?.getAllCustomPackages
  );
  const createPackageState = useSelector((state: any) => state?.createPackage);
  const discountState = useSelector((state: any) => state?.discount);
  const { data: checkout_data, loading: checkout_loading } = useSelector(
    (state: any) => state.checkout
  );
  const {
    data: { profile },
  } = useSelector((state: any) => state?.getProfile);
  const user = getFromStorage("user");
  const [planIndex, setPlanIndex] = useState(null);
  const [discountCode, setDiscountCode] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    refCode: profile?.agency?.refCode || "",
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
  const [data, setData] = useState<any>({
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
      const userLimit = getAllCustomPackages?.data?.features.filter(
        (val: any) => val.title === "USERS"
      );
      const listings = getAllCustomPackages?.data?.features.filter(
        (val: any) => val.title === "LISTINGS"
      );
      const hotListings = getAllCustomPackages?.data?.features.filter(
        (val: any) => val.title === "HOTLISTINGS"
      );
      const website = getAllCustomPackages?.data?.features.filter(
        (val: any) => val.title === "WEBSITE"
      );
      const appointsments = getAllCustomPackages?.data?.features.filter(
        (val: any) => val.title === "APPOINTMENTS"
      );
      const websiteSetup = getAllCustomPackages?.data?.features.filter(
        (val: any) => val.title === "WEBSITESETUP"
      );
      setBasePrices({
        userLimits: userLimit,
        listings: listings,
        hotListings: hotListings,
        website: website,
        appointsments,
        websiteSetup: websiteSetup,
      });

      const monthData = getAllCustomPackages?.data?.plans.filter(
        (val: any) => val.title === "QUARTERLY"
      );

      const packages = getAllPackagesState?.data?.filter(
        (item: any) =>
          item.title === "Basic" ||
          item.title === "Silver" ||
          item.title === "Gold"
      );
      const newTabs: any = { ...data };
      if (packages.length) {
        packages.forEach((item: any) => {
          const monthlyData = item?.pwSubPackage?.filter(
            (item: any) => item.title === "Quarterly"
          )?.[0];
          const monthDataCustom = getAllCustomPackages?.data?.plans.filter(
            (val: any) => val.title === "QUARTERLY"
          );
          const monthDataWebsite = getAllCustomPackages?.data?.features.filter(
            (val: any) => val.title === "WEBSITE"
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
            currentPlan: monthlyData?.title,
            discountPercentage: monthDataCustom?.[0]?.discountPercentage,
            noOfMonth: monthlyData.numberOfMonth,
            fixedCommission: monthDataCustom[0].fixCommision,
            StandardFee: monthDataCustom[0]?.StandardFee,
          };
          if (monthlyData?.digitalCatlog === true) {
            newTabs[item.title].website = true;
            newTabs[item.title].websiteAmount =
              monthDataWebsite?.[0]?.basePrice;
          }
        });
      }
      // arrange plans by month
      let newPLans = new Array(4).fill("");
      let plansArray = getAllCustomPackages?.data?.plans;
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
  function setCurrentHelper(state: any) {
    setCurrentState(state);
  }
  function setAmountHelper(state: any) {
    setAmount(state);
  }
  function setIsInteractiveHelper(state: any) {
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
    const getPackagePlanId: any = data?.["Custom"]?.plans?.filter(
      (item: any) =>
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
      digitalCatlog: data[currentState].website,
      isPublic: false,
      isSetup: data[currentState]?.websiteSetup,
    };
    createPackageApi(dispatch, body, onSuccess);
  }
  function onSuccess(data: any) {
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
    dispatch(clearDiscount());
    dispatch(clearCreatePackage());

    setDiscountPer(0);
  }, [data]);

  useEffect(() => {
    dispatch(clearDiscount());
    dispatch(clearCreatePackage());
    setDiscountPer(0);
  }, [discountCode]);

  function onCheckout() {
    if (
      userData.email &&
      userData.name &&
      userData.paymentMethod &&
      userData.refCode &&
      userData.agentPhone
    ) {
      if (discountState?.data === null) {
        const checkoutAmount: any = calculateTotalAmount(
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
          (item: any) =>
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
          charges: checkoutAmount,
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
          digitalCatlog: data[currentState].website,
          isPublic: false,
          isSetup: data[currentState]?.websiteSetup,
        };
        createPackageApi(dispatch, body, onSuccessCheckout);
      } else {
        const body = {
          email: userData.email,
          fullName: userData.name,
          phone: userData.agentPhone,
          PwSubPackageId: createPackageState?.data?.data?.id,
          refCode: userData.refCode,
          discountCode: discountCode,
          agentPhoneNumber: userData.agentPhone,
        };
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

  function onSuccessCheckout(data: any) {
    const body = {
      email: userData.email,
      fullName: userData.name,
      phone: userData.agentPhone,
      PwSubPackageId: data?.data?.id,
      refCode: userData.refCode,
      agentPhoneNumber: userData.agentPhone,
    };
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
    }
    return () => {
      dispatch(clearCheckout());
      dispatch(clearDiscount());
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
        value={data && data?.[currentState]}
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
