import { Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { logo } from "../../assets";
import {
  AddPeopleIcon,
  comingSoonBg,
  comingSoonText,
  starGroup,
  rocketImg,
  navLogo,
  penIcon,
} from "../../assets/comingSoonAssets";
import ButtonWithSvg from "../../components/button/ButtonWithSvg";
import { postInterestedLeadsApi } from "../../services/api/ComingSoon";
import CardCarousel from "./helpers/CardCarousel";
import { RootState } from "../../redux/store";
import SubSuccessfullyOrWrongModal from "./helpers/SubSuccessfullyOrWrongModal";
import { useState } from "react";

const ComingSoon = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
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
    <>
      {toggleModal !== "" && (
        <SubSuccessfullyOrWrongModal
          toggleOpen={setToggleModal}
          open={toggleModal}
        />
      )}
      <div className="bg-[#eee7de] min-h-screen bg-cover bg-center relative overflow-x-hidden overflow-y-auto">
        <div className=" bg-[#CCE1E2] sticky justify-center  top-0 left-0 w-full px-12 py-2 border-b border-b-strokes flex items-center">
          <div className="flex justify-center dm-sans text-center gap-1 text-[#212838]">
            <span className="font-bold flex items-center gap-2 !text-[10px] md:!text-[18px]">
              <div className="flex items-center gap-2 justify-start md:justify-center">
                <span className="mr-1 flex gap-1">
                  <img src={penIcon} className="h-3 md:h-6" alt="Pen Icon" />
                  Subscribe Now to Get Exclusive Benefits & Discounts
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className=" sticky justify-center md:justify-start top-0 left-0 w-full px-12 h-[59px] flex items-center">
          <img className="w-[50%]  md:w-[20%]" src={navLogo} alt="" />
        </div>
        <div className="flex justify-center mt-0 md:mt-16">
          <img
            src={comingSoonText}
            alt=""
            className="absolute mt-24 -right- inset-y-1/3 md:block hidden"
          />
        </div>
        <Row className="!w-full md:p-[20px] p-[0px] md:pl-12 pl-0 pt-6 mb-10 justify-center hidden md:flex">
          <Col sm={24} md={12}>
            <div className="font-bold text-[30px] md:text-[64px] dm-sans leading-[30px] md:leading-[70px] text-[#002A2D] mb-6 ">
              <div className="md:block hidden">
                <span className="flex md:justify-start justify-center">
                  <h1>Co-Pilot for</h1>
                  <span className="ml-2 ">
                    <img
                      className="md:w-full w-[50%] "
                      src={starGroup}
                      alt=""
                    />
                  </span>
                </span>
                <h1 className="md:ml-0 ml-5">Entrepreneurs.</h1>
              </div>
            </div>
            <h1 className=" md:hidden flex justify-center font-normal text-[20px] dm-sans  leading-[26px] md:leading-[70px] text-[#016A70]  ">
              <span className="text-center">
                Shaping ideas, fueling growth, <br /> building businesses.
              </span>
            </h1>
            <h1 className="md:block hidden font-normal text-[32px] dm-sans text-[#016A70]  ">
              <span>
                Shaping ideas, fueling growth, <br /> building businesses.
              </span>
            </h1>
            <div className="mt-16 mb-10 w-full">
              <Form
                onFinish={onFinish}
                name="interestedLeadsForm"
                form={form}
                autoComplete="off"
                initialValues={{ remember: true }}
                className=" w-full md:w-[70%]"
              >
                <div className="w-full rounded-full flex items-center h-[48px] overflow-hidden bg-[#fff] bg-opacity-[33%]">
                  <Form.Item
                    hasFeedback
                    validateFirst
                    name="email"
                    id="email"
                    className="!h-[48px] !p-0 flex-1 !mb-0 "
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
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      type="text"
                      className="px-4 !h-[48px] !border-none !outline-none  focus:!border-none focus:!outline-none"
                      maxLength={50}
                    />
                  </Form.Item>
                  <ButtonWithSvg
                    title={"Subscribe"}
                    icon={AddPeopleIcon}
                    loading={postInterestedLeads?.loading}
                    isLeft
                    type="primary"
                    className="!h-full !bg-[#014043]"
                    htmlType="submit"
                  />
                </div>
              </Form>
            </div>
          </Col>
          <Col sm={24} md={12} lg={12}>
            <div className="flex justify-center mt-[-40px]">
              <img src={rocketImg} className="md:ml-14 !ml-4 " alt="" />
            </div>
            <div className="flex justify-center m-6 md:hidden ">
              <img src={comingSoonText} alt="comingsoon" className="" />
            </div>
          </Col>
        </Row>
        <Row className="!w-full md:p-[20px] p-[0px] md:pl-12 pl-0 pt-6 mb-10 justify-center items-center flex md:hidden">
          <Col sm={24} md={24}>
            <Row className="p-[20px]">
              <Col xs={16} sm={16} md={12} lg={12}>
                <div className="font-bold text-[20px] md:text-[64px] dm-sans leading-[30px] md:leading-[70px] text-[#002A2D] mb-6 ">
                  <div>
                    <span>
                      <h1 className="flex">
                        <span>Co-Pilot for</span>
                      </h1>
                      <h1>Entrepreneurs</h1>
                    </span>
                  </div>
                  <h1 className="flex font-normal text-[20px] dm-sans  leading-[26px] md:leading-[70px] text-[#016A70]  ">
                    <span>
                      Shaping ideas, fueling growth, <br /> building businesses.
                    </span>
                  </h1>
                </div>
              </Col>
              <Col xs={8} sm={8} md={12} lg={12}>
                <img
                  src={rocketImg}
                  alt=""
                  className="h-[170px] w-full pb-10"
                />
              </Col>
            </Row>
            <div className="w-full p-4">
              <Form
                onFinish={onFinish}
                name="interestedLeadsForm"
                form={form}
                autoComplete="off"
                initialValues={{ remember: true }}
                className=" w-full md:w-[70%]"
              >
                <div className="w-full rounded-full flex items-center h-[48px] overflow-hidden bg-[#fff] bg-opacity-[33%]">
                  <Form.Item
                    hasFeedback
                    validateFirst
                    name="email"
                    id="email"
                    className="!h-[48px] !p-0 flex-1 !mb-0 "
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
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      type="text"
                      className="px-4 !h-[48px] !border-none !outline-none  focus:!border-none focus:!outline-none"
                      maxLength={50}
                    />
                  </Form.Item>
                  <ButtonWithSvg
                    title={"Subscribe"}
                    icon={AddPeopleIcon}
                    loading={postInterestedLeads?.loading}
                    isLeft
                    type="primary"
                    className="!h-full !bg-[#014043]"
                    htmlType="submit"
                  />
                </div>
              </Form>
            </div>
          </Col>
          <Col sm={24} xs={24} md={12} lg={12}>
            <div className="flex justify-center m-4  ">
              <img src={comingSoonText} alt="comingsoon" />
            </div>
          </Col>
        </Row>
        <Row className="h-full">
          <CardCarousel />
        </Row>
      </div>
    </>
  );
};

export default ComingSoon;
