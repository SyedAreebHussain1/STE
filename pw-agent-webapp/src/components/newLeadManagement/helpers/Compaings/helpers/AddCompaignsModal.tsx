import FacebookLogin from "@greatsumini/react-facebook-login";
import { Button, Col, Form, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from "../../../../../assets/delete.png";
import metaIconWithBg from "../../../../../assets/metaIconWithBg.png";
import TextInput from "../../../../../helpers/inputs/TextInput";
import {
  getFacebookAddApi,
  getFacebookAddSetApi,
  getFacebookCamapiagnApi,
} from "../../../../../redux/api/FacebookCampaign";
import { RootState } from "../../../../../redux/store";
import { createNewCampaignApi } from "../../../../../redux/api/Campaigns";
import { errorMessage, infoMessage } from "../../../../../utils/message";
import axios from "axios";
import { ClearSelectCampaign } from "../../../../../redux/slices/FacebookCampaign/SelectCampaignSlice";
import { CleargetFacebookAddSet } from "../../../../../redux/slices/FacebookCampaign/getFacebookAddSetSlice";
import { CleargetFacebookAddFailure } from "../../../../../redux/slices/FacebookCampaign/getFacebookAddSlice";

declare const window: any;

interface Profile {
  name: string;
  email: string;
}

type Props = {
  open: boolean;
  close: () => void;
  setBgBlurBox: any;
};

const AddCompaignsModal = ({ open, close, setBgBlurBox }: Props) => {
  const [createPipeline, setCreatePipeline] = useState(true);
  const [profile, setProfile] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const metaAppId = import.meta.env.VITE_META_APP_ID;
  const metaAppSecret = import.meta.env.VITE_META_APP_SECRET;
  const [userAccess, setUserAccess] = useState<any>({
    accessToken: "",
    UserId: "",
  });
  const [form] = useForm();
  const dispatch = useDispatch();
  const onFinish = (formData: any) => {
    if (
      !formData.selectCampaign ||
      !formData.selectAdset ||
      !formData.selectAd
    ) {
      infoMessage("Select All Fields");
      return;
    }
    const body = {
      title: formData.campaignName,
      metaCampaignId: formData.selectCampaign,
      adsetId: formData.selectAdset,
      adId: formData.selectAd,
    };
    createNewCampaignApi(body, dispatch, onSuccess);
  };
  const onSuccess = () => {
    setBgBlurBox(false);
    close();
  };

  const handleLoginSuccess = async (response: any) => {
    let longAccessToken;
    try {
      longAccessToken = await axios.post(
        `https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${metaAppId}&client_secret=${metaAppSecret}&fb_exchange_token=${response.accessToken}`
      );
      console.log(longAccessToken);
      // wait for Long-lived access token
      const firstApiCall = await axios.get(
        `https://graph.facebook.com/v19.0/${response?.userID}/accounts?access_token=${longAccessToken?.data?.access_token}`
      );

      setUserAccess({
        accessToken: longAccessToken?.data?.accessToken,
        userId: response?.userID,
        expireDate: longAccessToken?.data?.expires_in,
      });

      if (firstApiCall?.data?.data) {
        for (let i = 0; i < firstApiCall?.data?.data?.length; i++) {
          const secondApiCall = await axios.get(
            `https://graph.facebook.com/v19.0/${firstApiCall?.data?.data?.[i].id}/subscribed_apps?access_token=${firstApiCall?.data?.data?.[i].access_token}`
          );
          for (let j = 0; j < secondApiCall?.data?.data?.length; j++) {
            if (secondApiCall?.data?.data?.[j]?.id != metaAppId) {
              const thiredApiCall = await axios.post(
                `https://graph.facebook.com/v19.0/${firstApiCall?.data?.data?.[i].id}/subscribed_apps?app_id=${metaAppId}&subscribed_fields=leadgen&access_token=${longAccessToken?.data?.access_token}`
              );
              console.log("thiredApiCall=>", thiredApiCall);
            }
          }
        }
      }
    } catch (error) {
      handleLogout();
      errorMessage("Please Login again");
      return;
    }

    getFacebookCamapiagnApi(
      {
        fbUserId: response.userID,
        accessToken: longAccessToken?.data?.access_token,
        expiresIn: longAccessToken?.data?.expires_in,
      },
      dispatch
    );
    setIsLoggedIn(true);
  };

  // useEffect(() => {
  //   getFacebookCamapiagnApi(
  //     {
  //       fbUserId: "122105752946318447",
  //       accessToken:
  //         "EAAJSK8lA9rwBO8KWmz5JoysedaqdZCILZAktryaZA2h6ZBKdCaqZCOwTytiCX28VtkEIs5HnnPCT2NeAY2yJZBpcHo6L3ju7mldg5kv1I0ybuwLBRjYPBIofl7wwh1qS4rJlBnXqt3Pq5mYlV0lm9qleLqkAeKeJHblYVjvGLvZA4qZAJzIZBZA1bKW3RaqqJcyjoZAudHlpQBi3jUib6VZB2hZCWtnEvOZCmmxN1QbSpW21IaQgZDZD",
  //       // expiresIn: longAccessToken?.data?.expires_in,
  //     },
  //     dispatch
  //   );
  //   setUserAccess({
  //     accessToken:
  //       "EAAJSK8lA9rwBO8KWmz5JoysedaqdZCILZAktryaZA2h6ZBKdCaqZCOwTytiCX28VtkEIs5HnnPCT2NeAY2yJZBpcHo6L3ju7mldg5kv1I0ybuwLBRjYPBIofl7wwh1qS4rJlBnXqt3Pq5mYlV0lm9qleLqkAeKeJHblYVjvGLvZA4qZAJzIZBZA1bKW3RaqqJcyjoZAudHlpQBi3jUib6VZB2hZCWtnEvOZCmmxN1QbSpW21IaQgZDZD",
  //     userId: "122105752946318447",
  //   });
  // }, []);

  const handleLogout = () => {
    if (window.FB) {
      window.FB.logout((response: any) => {
        console.log("Logout Success!", response);
        setIsLoggedIn(false);
      });
    } else {
      console.error("Facebook SDK not loaded.");
    }
  };

  const handleProfileSuccess = (response: any) => {
    setProfile(response.name);
  };
  const SelectCampaign = useSelector(
    (state: RootState) => state.SelectCampaign
  );
  const getFacebookAdd = useSelector(
    (state: RootState) => state.getFacebookAdd
  );
  const getFacebookAddSet = useSelector(
    (state: RootState) => state.getFacebookAddSet
  );

  const onCampaignSelect = (id: any) => {
    getFacebookAddSetApi(dispatch, id);
  };
  const onAddSetSelect = (id: any) => {
    getFacebookAddApi(dispatch, id);
  };
  useEffect(() => {
    dispatch(ClearSelectCampaign());
    dispatch(CleargetFacebookAddSet());
    dispatch(CleargetFacebookAddFailure());
  }, []);

  return (
    <Modal
      title={
        <span className="text-[#475467] text-[1rem] font-medium">
          {createPipeline ? "Create Facebook Compaign" : "Create Pipeline"}
        </span>
      }
      centered
      width={createPipeline ? 609 : 577}
      open={open}
      onCancel={close}
      footer={false}
    >
      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Row gutter={16} className="py-1">
          <Col sm={24}>
            <div className="min-h-[156px] rounded-[5px] p-[20px] bg-[#F2F4F7]">
              {!isLoggedIn ? (
                <div className="flex justify-between">
                  <div>
                    <img src={metaIconWithBg} alt="" />
                  </div>
                  <div>
                    <h1 className="text-[#344054] text-[1rem] font-medium">
                      Connect your account with facebook
                    </h1>
                    <p className="text-[#667085] font-medium text-[.8125rem]">
                      Before creating new facebook campaing you should attach
                      your account so that we can fetch the facebook leads
                    </p>
                    <div className="mt-3">
                      <div className="mt-3">
                        <FacebookLogin
                          appId={metaAppId}
                          initParams={{
                            version: "v16.0",
                            xfbml: true,
                            cookie: true,
                            frictionlessRequests: true,
                          }}
                          useRedirect={false}
                          scope="pages_show_list,
                                 ads_read,
                                 business_management,
                                 leads_retrieval,
                                 page_events,
                                 pages_read_engagement,
                                 pages_manage_metadata,
                                 pages_read_user_content,
                                 pages_manage_ads"
                          onSuccess={handleLoginSuccess}
                          // onFail={handleLoginFail}
                          onProfileSuccess={handleProfileSuccess}
                          dialogParams={{
                            redirect_uri: "https://localhost:3000",
                            state: "",
                          }}
                          render={(props: {
                            onClick?: (() => void) | undefined;
                          }) => (
                            <button
                              onClick={(e) => {
                                if (props?.onClick) {
                                  props?.onClick();
                                }
                              }}
                              className="bg-[#0081FB] text-[#FCFCFD] rounded-[5px] flex items-center gap-1 text-[.8125rem] font-medium p-2"
                            >
                              Login with Facebook
                            </button>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between">
                  <div className="w-full">
                    <h1 className="text-[#344054] text-[1rem] font-medium">
                      Account Info
                    </h1>
                    <div className="bg-[rgb(255,255,255)] p-2 flex rounded-[5px] justify-between items-center mt-5">
                      <div className="flex items-center gap-1">
                        <div className="flex justify-center text-center items-center">
                          <span
                            className={`w-[32px] bg-[#EFE3FF] h-[32px] flex justify-center items-center rounded-[50%] `}
                          >
                            {profile
                              ?.split(" ")
                              ?.map((item) => item[0])
                              ?.join("")
                              ?.toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-[.8125rem] text-[#344054] cursor-pointer flex items-center gap-1">
                            {profile}
                          </p>
                          <span className="text-[0.813] font-medium text-[#667085]">
                            Ad account ID: {userAccess?.userId}
                          </span>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setIsLoggedIn(!isLoggedIn);
                            handleLogout();
                          }}
                        >
                          <img src={deleteIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Col>

          <Col sm={24} className="mt-4">
            <label
              htmlFor="selectCampaign"
              className="text-[.8125rem] font-medium text-[#667085]"
            >
              Select Campaign
            </label>
            <Form.Item
              name={"selectCampaign"}
              rules={[{ required: true, message: "Please Select Campaign" }]}
            >
              <Select
                id="selectCampaign"
                className="h-[48px] mt-2"
                options={
                  SelectCampaign?.data?.campaigns.length > 0
                    ? SelectCampaign?.data?.campaigns?.map((item: any) => ({
                        label: item?.name,
                        value: item?.id,
                      }))
                    : []
                }
                placeholder="Select"
                onChange={(e: any) => {
                  onCampaignSelect(e);
                  form.setFieldValue("selectAdset", null);
                  form.setFieldValue("selectAd", null);
                }}
              />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <label
              htmlFor="selectAdset"
              className="text-[.8125rem] font-medium text-[#667085]"
            >
              Select Add set
            </label>
            <Form.Item
              name={"selectAdset"}
              rules={[{ required: true, message: "Please Select Campaign" }]}
            >
              <Select
                id="selectAdset"
                className="h-[48px] mt-2"
                options={
                  getFacebookAddSet?.data?.length > 0
                    ? getFacebookAddSet?.data?.map((item: any) => ({
                        label: item?.name,
                        value: item?.id,
                      }))
                    : []
                }
                placeholder="Select"
                onChange={(e: any) => {
                  onAddSetSelect(e);
                  form.setFieldValue("selectAd", null);
                }}
              />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <label
              htmlFor="selectAd"
              className="text-[.8125rem] font-medium text-[#667085]"
            >
              Select Add
            </label>
            <Form.Item
              name={"selectAd"}
              rules={[{ required: true, message: "Please Select Add" }]}
            >
              <Select
                id="selectAd"
                className="h-[48px] mt-2"
                options={
                  getFacebookAdd?.data?.length > 0
                    ? getFacebookAdd?.data?.map((item: any) => ({
                        label: item?.name,
                        value: item?.id,
                      }))
                    : []
                }
                placeholder="Select"
              />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <label
              htmlFor="campaignName"
              className="text-[.8125rem] font-medium text-[#667085]"
            >
              Campaign Name
            </label>
            <TextInput
              name="campaignName"
              id="campaignName"
              className="h-[48px] mt-2"
              placeholder="Enter Name"
              rules={[
                { required: true, message: "Please Enter Compaign Name" },
              ]}
            />
          </Col>
        </Row>
        <div className="flex justify-end w-[100%]">
          <Button
            htmlType="submit"
            type="primary"
            // disabled={!isLoggedIn}
            className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
          >
            Continue
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default AddCompaignsModal;
