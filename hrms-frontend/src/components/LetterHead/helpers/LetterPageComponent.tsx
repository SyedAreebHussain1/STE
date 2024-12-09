import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateLetter from "./CreateLetter";
import { PageContainer } from "../../../helpers/PageContainer/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyLocationApi } from "../../../redux/api/Location";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
import RoundedButton from "../../../helpers/button/RoundedButton";
import { IoIosArrowBack, IoMdPrint } from "react-icons/io";
import { patchLetterApi, postLetterApi } from "../../../redux/api/Letter";
import { Col, Form, Modal } from "antd";
import useToggle from "../../../hooks/useToggle";
import TextInput from "../../../helpers/inputs/TextInput";
import { useForm } from "antd/es/form/Form";

const LetterPageComponent = () => {
  const { state } = useLocation();
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const [open, troggle] = useToggle();
  const [letterBody, setLetterBody] = useState("");
  const getCompanyLocation = useSelector(
    (state: any) => state?.getCompanyLocation
  );
  const setLetter = useSelector((state: any) => state.PostLetter);

  useEffect(() => {
    getCompanyLocationApi(dispatch);
  }, []);

  useEffect(() => {
    if (state?.data) {
      setLetterBody(state?.data);
      if (state?.id) {
        setTitle(state?.title);
      }
    }
  }, [state?.data]);

  const customPrintRef = useRef<any>(null);
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    content: () => customPrintRef.current,
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: a4 !important;
  margin: 0px;
  
      }`,
  });
  const onSaveHandler = () => {
    postLetterApi(dispatch, { title: title, letter: letterBody }, onSuccess);
  };
  const onSuccess = () => {
    troggle();
  };

  const onEditHandler = () => {
    patchLetterApi(
      dispatch,
      { title: title, letter: letterBody },
      state?.id,
      onSuccess
    );
  };
  return (
    <PageContainer>
      {open && (
        <SaveModal
          open={open}
          onClose={troggle}
          loading={setLetter?.loading}
          onClickHandler={state?.id ? onEditHandler : onSaveHandler}
          setTitle={setTitle}
          title={title}
          id={state?.id}
        />
      )}
      <div className="bg-white dark:bg-dark-grayprimary rounded-md px-[20px]">
        <div
          className="text-[0.975rem] flex  items-center font-medium text-black dark:text-white cursor-pointer pt-[20px] w-max "
          onClick={() => navigate(-1)}
        >
          <span>
            <IoIosArrowBack className="px-[1px] text-[1rem]" size={20} />
          </span>
          <span>Back</span>
        </div>

        <div className=" text-[1.5rem] font-bold dark:text-dark-secondary pb-3 flex justify-between ">
          <h1>{state?.title}</h1>
          <div className="flex items-center gap-2">
            <RoundedButton
              onClick={handlePrint}
              title={
                <div className="flex items-center gap-1">
                  <IoMdPrint />
                  Print
                </div>
              }
              className="dark:bg-dark-primary dark:text-white"
              sm
            />
            <RoundedButton
              onClick={troggle}
              title={state?.id ? "Update" : "Save"}
              className="dark:bg-white dark:text-dark-primary  text-light-primary bg-white"
              sm
            />
          </div>
        </div>
        <div className="flex justify-between h-[100px] items-center dark:text-white">
          <div className="w-[200px] h-full flex items-center">
            <img
              src={getCompanyLocation?.data?.logoUrl}
              alt="company logo"
              height={"100%"}
            />
          </div>
          <div className="text-[2rem] font-semibold w-[300px] text-center">
            <h2>{getCompanyLocation?.data?.name}</h2>
          </div>
          <div className="w-[200px] text-right">
            Date: {moment().format("DD MMMM YYYY")}
          </div>
        </div>
        <div className="mt-3 pb-[30px]">
          <CreateLetter data={letterBody} setLetterBody={setLetterBody} />
        </div>
        <div
          ref={customPrintRef}
          className="letter-print w-[790px] p-[20px] py-[40px]"
        >
          <div className="flex justify-between h-[100px] items-center">
            <div className="w-[200px] h-full flex items-center">
              <img
                src={getCompanyLocation?.data?.logoUrl}
                alt="company logo"
                height={"100%"}
              />
            </div>
            <div className="text-[2rem] font-semibold w-[300px] text-center">
              <h2>{getCompanyLocation?.data?.name}</h2>
            </div>
            <div className="w-[200px] text-right">
              Date: {moment().format("DD MMMM YYYY")}
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: letterBody }}
            className="mt-16"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default LetterPageComponent;

const SaveModal = ({
  open,
  onClose,
  onClickHandler,
  loading,
  setTitle,
  title,
  id,
}: any) => {
  const onFinish = (value: any) => {
    onClickHandler();
  };

  return (
    <>
      <Modal
        title={id ? "Update Letter" : "Create Letter"}
        centered
        footer={null}
        open={open ? true : false}
        onCancel={() => onClose(false)}
      >
        <Form onFinish={onFinish}>
          <Col sm={24}>
            <label
              htmlFor="title"
              className="text-[.8125rem] font-medium text-[#667085] dark-input-label "
            >
              Title
            </label>
            <TextInput
              name="title"
              id="title"
              className="h-[48px] mt-2 dark-input "
              placeholder="Enter Title"
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
              rules={[{ required: true, message: "Please Enter Title" }]}
            />
          </Col>
          <div className="flex mt-5 justify-end">
            <div className="flex items-center gap-3">
              <RoundedButton
                onClick={onClose}
                title={"cancel"}
                className="dark:bg-dark-primary dark:text-white"
                sm
              />
              <RoundedButton
                htmlType="submit"
                title={"Continue"}
                loading={loading}
                className="dark:bg-white dark:text-dark-primary  text-light-primary bg-white"
                sm
              />
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};
