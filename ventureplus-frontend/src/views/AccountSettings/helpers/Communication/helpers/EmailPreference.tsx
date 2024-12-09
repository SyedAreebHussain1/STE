import { Col, Switch } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import {
  getCompanyUserByIdApi,
  updateCompanyUserPreferncesApi
} from "../../../../../services/api/CompanyUser";

const EmailPreference = () => {
  const [formValues, setFormValues] = useState({
    productUpdates: false,
    offerAndDiscounts: false,
    businessTips: false,
    industryNews: false,
  });
  const dispatch = useDispatch();
  const { isAuth, userData } = useSelector((state: RootState) => state.user);
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );
  const getCompanyUserById = useSelector(
    (state: RootState) => state.getCompanyUserById?.data
  );

  useEffect(() => {
    if (userData?.companyUser?.id)
      if (!getCompanyUserById)
        getCompanyUserByIdApi(dispatch, userData?.companyUser?.id);
  }, [userData?.companyUser?.id]);

  useEffect(() => {
    setFormValues({
      productUpdates: getCompanyUserById?.productUpdates,
      offerAndDiscounts: getCompanyUserById?.offerAndDiscounts,
      industryNews: getCompanyUserById?.industryNews,
      businessTips: getCompanyUserById?.businessTips,
    });
  }, [getCompanyUserById]);

  const handleUpdatePreference = (key: string, e: any) => {
    updateCompanyUserPreferncesApi(
      dispatch,
      getCompanyUserById?.id,
      { [key]: e },
      onUpdateCompanyUser
    );
  };

  const onUpdateCompanyUser = () => {
    getCompanyUserByIdApi(dispatch, userData?.companyUser?.id);
  };

  return (
    <Col xl={12} md={24} sm={24} className="p-2">
      <div className="border border-stroke p-2 rounded-md">
        <h1 className="text-title font-medium paragraph">Email Preferences</h1>
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col gap-1">
            <h1 className="font-medium body-s text-body">Product Updates</h1>
            <p className="text-para text-[12px]">
              Receive updates on the latest product features and improvements.
            </p>
          </div>
          <Switch
            size="small"
            value={formValues.productUpdates}
            onChange={(e) => handleUpdatePreference("productUpdates", e)}
          />
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col gap-1">
            <h1 className="font-medium body-s text-body">Offers & Discounts</h1>
            <p className="text-para text-[12px]">
              Get notified about exclusive offers and discounts available to
              you.
            </p>
          </div>
          <Switch
            size="small"
            value={formValues.offerAndDiscounts}
            onChange={(e) => handleUpdatePreference("offerAndDiscounts", e)}
          />
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col gap-1">
            <h1 className="font-medium body-s text-body">
              Business Tips, Ideas & Support
            </h1>
            <p className="text-para text-[12px]">
              Stay informed with valuable business tips, ideas, and support to
              help you succeed.
            </p>
          </div>
          <Switch
            size="small"
            value={formValues.businessTips}
            onChange={(e) => handleUpdatePreference("businessTips", e)}
          />
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col gap-1">
            <h1 className="font-medium body-s text-body">Industry News</h1>
            <p className="text-para text-[12px]">
              Stay up-to-date with the latest news and updates in your industry.
            </p>
          </div>
          <Switch
            size="small"
            value={formValues.industryNews}
            onChange={(e) => handleUpdatePreference("industryNews", e)}
          />
        </div>
      </div>
    </Col>
  );
};

export default EmailPreference;
