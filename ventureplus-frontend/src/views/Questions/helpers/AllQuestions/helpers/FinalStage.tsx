import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import topicCompleteGIF from "../../../../../assets/question/topicComplete.gif";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { clearCreateAnswer } from "../../../../../redux/slices/Questions/createAnswerSlice";
import { clearGetAnswerByIds } from "../../../../../redux/slices/Questions/getAnswerByIdsSlice";
import { getBusinessCountApi } from "../../../../../services/api/GetBusinessCount";

const FinalStageModal = ({
  toggleOpen,
  open,
  currentTopic,
  setCurrentTopic,
  idsArray,
}: any) => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const [nextTopicAllow, setNextTopicAllow] = useState(false);
  const getQuestion = useSelector((state: RootState) => state?.getQuestion);
  const getBusinessCount = useSelector(
    (state: RootState) => state?.getBusinessCount
  );
  const getChapter = useSelector((state: RootState) => state?.getChapter);

  const currentChapterId = useSelector(
    (state: RootState) => state?.getQuestion?.data?.[0]?.topic?.chapter?.id
  );
  const getAnswerByIds = useSelector(
    (state: RootState) => state?.getAnswerByIds
  );
  const { id } = useParams();
  useEffect(() => {
    if (currentTopic) {
      dispatch(clearCreateAnswer(getAnswerByIds));

      dispatch(clearGetAnswerByIds(getAnswerByIds));
    }
  }, []);

  const isLastTopic = idsArray.length - 1 === currentTopic;

  useEffect(() => {
    if (!getBusinessCount?.data?.data) {
      getBusinessCountApi(dispatch);
    }
  }, []);

  useEffect(() => {
    const businessCount = getBusinessCount?.data?.data;
    if (getChapter?.data?.data && businessCount) {
      const ChaptersCount = businessCount?.allowed?.chapters;
      const topicAllow = getChapter?.data?.data
        ?.filter((filterItem: any, index: number) => index < ChaptersCount)
        .find((findItem: any) =>
          findItem?.topics?.find(
            (topicsFindIndex: any) =>
              topicsFindIndex?.id == idsArray?.[currentTopic + 1]
          )
        );
      if (topicAllow) {
        setNextTopicAllow(true);
      } else {
        setNextTopicAllow(false);
      }
    }
  }, [getChapter, getBusinessCount]);

  function handleCurrentTopic() {
    dispatch(clearCreateAnswer(getAnswerByIds));
    dispatch(clearGetAnswerByIds(getAnswerByIds));
    setCurrentTopic((pre: any) => pre + 1);
  }

  return (
    <React.Fragment>
      <Modal
        centered
        open={open}
        footer={null}
        closable={false}
        width={757}
        cancelButtonProps={{ style: { display: "none" } }}
        bodyStyle={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="flex justify-center mt-10">
            <img src={topicCompleteGIF} alt="" />
          </div>
        </div>
        <div>
          <div className="text-center ">
            <div className="mt-6 mb-7">
              <h1 className="text-[#000000] font-semibold">Topic Complete!</h1>
              <p className="text-[#000000] font-medium">
                You've successfully completed this topic. What would you like to
                do next?
              </p>
            </div>
            <div className="flex justify-center mb-7 gap-3 ">
              <Button
                onClick={() => naviagte(`/edit-plan/${currentChapterId}`)}
                className="bg-[#FFFFFF] text-[#4A5366] font-semibold"
                shape="round"
                size="large"
              >
                <span>View Plan</span>
              </Button>
              <Button
                htmlType="submit"
                loading={getQuestion?.loading}
                onClick={
                  !nextTopicAllow
                    ? () => naviagte("/subscription-plan")
                    : isLastTopic
                    ? () => naviagte("/edit-plan")
                    : () => handleCurrentTopic()
                }
                className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                shape="round"
                size="large"
              >
                <span>
                  {!nextTopicAllow
                    ? "Upgrade Plan"
                    : isLastTopic
                    ? "Finish"
                    : "Start Next Topic"}
                </span>
              </Button>
              {/* )} */}
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default FinalStageModal;
