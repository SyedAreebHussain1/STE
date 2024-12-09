import { Button, Form, Input } from "antd";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { useForm } from "antd/es/form/Form";
import SubSuccessfullyOrWrongModal from "../../../../ComingSoon/helpers/SubSuccessfullyOrWrongModal";
import { postInterestedLeadsApi } from "../../../../../services/api/ComingSoon";
import { useState } from "react";
import { websiteLogo } from "../../../../../assets/website";

const FooterForWebSite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = useForm();
  const [toggleModal, setToggleModal] = useState("");

  const postInterestedLeads = useSelector(
    (state: RootState) => state?.postInterestedLeads
  );
  const onSuccess = () => {
    setToggleModal("success");
    form.resetFields();
  };
  const wrong = () => {
    setToggleModal("wrong");
    form.resetFields();
  };
  const onFinish = (values: { email: string }) => {
    postInterestedLeadsApi(dispatch, values, onSuccess, wrong);
  };
  return (
    <div className="w-full overflow-hidden ">
      {toggleModal !== "" && (
        <SubSuccessfullyOrWrongModal
          toggleOpen={setToggleModal}
          open={toggleModal}
        />
      )}
      {/* for md screen pc */}
      <div className="w-full  flex-col md:flex-row items-start justify-start md:justify-center bg-[#FFFFF8] mt-10px md:mt-[50px] hidden md:flex ">
        <div className="mt-[30px] md:mt-[30px] px-[20px] md:px-[50px] py-[20px] xs:w-full lg:w-[1300px]">
          <div className="flex justify-between flex-col md:flex-row ">
            <div className="px-0 md:px-[20px] lg:max-w-[600px] xs:w-full">
              <p className="text-[12px] font-medium md:text-[20px] text-[#212838] mb-[20px] xs:text-center lg:text-left">
                Join our newsletter for exclusive updates, expert tips, and
                insights from Venture Plus on business planning and success
                strategies.
              </p>
              <Form onFinish={onFinish} form={form}>
                <Form.Item
                  // hasFeedback
                  validateFirst
                  name="email"
                  id="email"
                  className="!h-[30px] md:!h-[48px]  !p-0 flex-1 !mb-0 "
                  rules={[
                    {
                      required: true,
                      message: "This is a required field",
                    },
                    {
                      type: "email",
                      message: "Please input valid Email!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email address"
                    className="w-full h-[40px] text-[12px] md:text-[18px] md:h-[50px] border-0 border-b-[2px] !overline-[0] shadow-[0] rounded-[0]"
                    suffix={
                      <Button
                        loading={postInterestedLeads?.loading}
                        className="border-[0] shadow-none"
                        htmlType="submit"
                      >
                        <GoArrowRight className=" text-[12px] md:text-[18px] " />
                      </Button>
                    }
                  />
                </Form.Item>
              </Form>
            </div>

            <div className="py-[20px] md:py-0  px-[20px] md:px-0 text-[18px] xs:mt-[30px] flex flex-col xs:items-center lg:items-start lg:mt-[0px] ">
              <h1 className="font-bold mb-[10px]">Menu</h1>
              <ol className="font-normal text-[#4A5366] flex flex-col xs:items-center lg:items-start">
                <li
                  className="cursor-pointer xs:text-center lg:text-left mb-2"
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className="cursor-pointer xs:text-center lg:text-left mb-2"
                  onClick={() => navigate("/Pricing")}
                >
                  Pricing
                </li>
                <li
                  className="cursor-pointer xs:text-center lg:text-left mb-2 "
                  onClick={() => navigate("/Feature")}
                >
                  {" "}
                  Features
                </li>
                <li
                  className="cursor-pointer xs:text-center lg:text-left mb-2"
                  onClick={() => navigate("/About-us")}
                >
                  About
                </li>
              </ol>
            </div>
            <div className="py-[20px] md:py-0  px-[20px] md:px-0 text-[18px] xs:mt-[30px] flex flex-col xs:items-center lg:items-start lg:mt-[0px] ">
              <h1 className="font-bold mb-[10px]"> Solutions</h1>
              <ol className="font-normal text-[#4A5366] flex flex-col xs:items-center lg:items-start">
                <li
                  className="cursor-pointer xs:text-center lg:text-left mb-2"
                  onClick={() => navigate("/startups")}
                >
                  Startups
                </li>
                <li
                  className="cursor-pointer xs:text-center lg:text-left mb-2"
                  onClick={() => navigate("/aspiring-entrepreneurs")}
                >
                  Entrepreneurs
                </li>
                <li
                  className="cursor-pointer xs:text-center lg:text-left mb-2 "
                  onClick={() => navigate("/freelancers")}
                >
                  {" "}
                  Freelance
                </li>
                <li
                  className="cursor-pointer xs:text-center lg:text-left mb-2"
                  onClick={() => navigate("/small-and-medium-enterprises")}
                >
                  SMEs
                </li>
              </ol>
            </div>
            <div className="px-[20px] text-[18px] xs:mt-[30px] flex flex-col xs:items-center lg:items-start lg:mt-[0px]">
              <h1 className="font-bold mb-[10px]">Contact Us</h1>
              <ol className="font-normal text-[#4A5366] flex flex-col xs:items-center lg:items-start">
                <li className="cursor-pointer xs:text-center lg:text-left">
                  info@ventureplusai.com
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-[60px] ">
            <img
              src={websiteLogo}
              className="w-[230px] cursor-pointer "
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      </div>
      {/* for mobile */}
      <div className="w-full flex md:hidden flex-col items-start  bg-[#FFFFF8] mt-10px">
        <div className="mt-[30px]  px-[20px]  py-[20px] w-full ">
          <div className="block md:hidden mb-[20px] ">
            <img
              src={websiteLogo}
              className="w-[200px] cursor-pointer "
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="px-0   w-full">
              <p className="text-[12px] font-medium  text-[#212838] mb-[10px]">
                Join our newsletter for exclusive updates, expert tips, and
                insights from Venture Plus on business planning and success
                strategies.
              </p>
              <Form onFinish={onFinish} form={form}>
                <Form.Item
                  // hasFeedback
                  validateFirst
                  name="email"
                  id="email"
                  className="!h-[30px] md:!h-[48px]  !p-0 flex-1 !mb-0 "
                  rules={[
                    {
                      required: true,
                      message: "This is a required field",
                    },
                    {
                      type: "email",
                      message: "Please input valid Email!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email address"
                    className="w-full h-[40px] text-[12px] md:text-[18px] md:h-[50px] border-0 border-b-[2px] !overline-[0] shadow-[0] rounded-[0]"
                    suffix={
                      <Button
                        loading={postInterestedLeads?.loading}
                        className="border-[0] shadow-none"
                        htmlType="submit"
                      >
                        <GoArrowRight className=" text-[12px] md:text-[18px] " />
                      </Button>
                    }
                  />
                </Form.Item>
              </Form>
            </div>
            <div className="justify-between flex w-full flex-wrap mt-[20px]">
              <div className="py-[20px]  px-[20px] text-[10px]  flex flex-col   ">
                <h1 className="font-bold text-[12px] mb-[10px]">Menu</h1>
                <ol className="font-normal text-[#4A5366] flex flex-col  ">
                  <li
                    className="cursor-pointer  mb-[2px]"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </li>
                  <li
                    className="cursor-pointer   mb-[2px]"
                    onClick={() => navigate("/Pricing")}
                  >
                    Pricing
                  </li>
                  <li
                    className="cursor-pointer   mb-[2px] "
                    onClick={() => navigate("/Feature")}
                  >
                    Features
                  </li>
                  <li
                    className="cursor-pointer   mb-[2px]"
                    onClick={() => navigate("/About-us")}
                  >
                    About
                  </li>
                </ol>
              </div>
              <div className="py-[20px]   px-[10px] text-[10px] flex flex-col">
                <h1 className="font-bold text-[12px] mb-[10px]"> Solutions</h1>
                <ol className="font-normal text-[#4A5366] flex flex-col ">
                  <li
                    className="cursor-pointer  mb-[2px]"
                    onClick={() => navigate("/startups")}
                  >
                    Startups
                  </li>
                  <li
                    className="cursor-pointer  mb-[2px]"
                    onClick={() => navigate("/aspiring-entrepreneurs")}
                  >
                    Entrepreneurs
                  </li>
                  <li
                    className="cursor-pointer  mb-[2px] "
                    onClick={() => navigate("/freelancers")}
                  >
                    {" "}
                    Freelance
                  </li>
                  <li
                    className="cursor-pointer  mb-[2px]"
                    onClick={() => navigate("/small-and-medium-enterprises")}
                  >
                    SMEs
                  </li>
                </ol>
              </div>
              <div className="px-[10px] py-[20px] text-[10px] flex flex-col ">
                <h1 className="font-bold mb-[8px] text-[12px]">Contact Us</h1>
                <ol className="font-normal text-[#4A5366] flex flex-col">
                  <li className="cursor-pointer ">info@ventureplusai.com</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterForWebSite;
