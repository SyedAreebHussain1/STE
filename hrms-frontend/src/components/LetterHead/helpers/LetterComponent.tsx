import RoundedButton from "../../../helpers/button/RoundedButton";
import starIcon from "../../../assets/GenerateWithAIStarIcon.svg";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Col, Row } from "antd";
import CreateWithAIModal from "./CreateWithAIModal";
import useToggle from "../../../hooks/useToggle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLetterApi } from "../../../redux/api/Letter";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const LetterComponent = () => {
  const [open, troggle] = useToggle();
  const dispatch = useDispatch();

  const getLetter = useSelector((state: any) => state?.GetLetter);
  useEffect(() => {
    getLetterApi(dispatch);
  }, []);
  const navigate = useNavigate();

  return (
    <>
      {open && <CreateWithAIModal open={open} onClose={troggle} />}
      <div className="flex items-center gap-4">
        <RoundedButton
          onClick={() => {
            navigate("/letter", {
              state: { data: "", title: "Letter Head" },
            });
          }}
          title={
            <span className="flex items-center">
              <span className="text-[16px] pr-1">+</span>
              Create New Document
            </span>
          }
          className="dark:bg-dark-primary dark:text-white"
          sm
        />
        <RoundedButton
          onClick={troggle}
          title={
            <div className="flex items-center gap-1">
              <div>
                <img src={starIcon} alt="star" />
              </div>
              <div>
                <p>Generate with AI</p>
              </div>
            </div>
          }
          className="dark:bg-white dark:text-dark-primary  text-light-primary bg-white"
          sm
        />
      </div>
      <Row gutter={[16, 16]} className="mt-4 h-full">
        {getLetter?.data?.length > 0 &&
          getLetter?.data?.map((item: any) => (
            <Col
              onClick={() => {
                navigate("/letter", {
                  state: {
                    data: item?.letter,
                    title: item?.title,
                    id: item?.id,
                  },
                });
              }}
              key={item?.id}
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              xxl={4}
              // className="flex-1"
            >
              <PreviousLetters
                data={{
                  title: item?.title,
                  updatedAt: moment(item?.updatedAt).format("DD MMMM YYYY"),
                }}
              />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default LetterComponent;

const PreviousLetters = (props: any) => {
  return (
    <div className="bg-white dark:bg-dark-grayprimary rounded-md h-full flex flex-col p-[20px] w-full justify-between">
      <div className="flex-1">
        <BsFileEarmarkPdf size={40} className="dark:text-white" />

        <h1 className="mt-3 dark:text-white">{props?.data?.title}</h1>
      </div>
      <div>
        <div className="flex justify-between text-[0.813rem] text-[#667085] dark:text-[#D0D5DD] mt-3 items-center">
          <h2>Updated</h2>

          <p>{props?.data?.updatedAt}</p>
        </div>

        <div className="flex justify-between text-[.9rem] text-[#667085] mt-2 border-t-[1px] pt-[10px] items-center dark:text-dark-secondary">
          <h2>View File</h2>
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};
