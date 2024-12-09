import React, { useEffect, useRef, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { Col, Divider, Row } from "antd";
import { Light, thumb, stars, improvement } from "../../../assets/ideaPlan";
import {
  SCPLoad,
  Praise,
  Suggestion,
  Critique,
  Praise2,
  Suggestion2,
  Critique2,
} from "../../../assets/ideaEvaluation";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIdeaEvaluationByIdApi } from "../../../services/api/IdeaEvaluation";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import { visitIcon } from "../../../assets/dashboardAssets";
import { useReactToPrint } from "react-to-print";
import { getFromStorage } from "../../../utils/storage";
import { getCompanyApi } from "../../../services/api/Business";
import { RootState } from "../../../redux/store";
import PlanLimitModal from "../../../components/modals/PlanLimitModal";
import RoundedButton from "../../../components/button/RoundedButton";

const Sections: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const reportRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = getFromStorage("user");
  const business = getFromStorage("business");
  const isOnBoardCheck = user?.companyUser?.isOnboard;
  const getCompany = useSelector((state: RootState) => state.getCompany);
  const getIdeaValidation = useSelector(
    (state: RootState) => state.getIdeaEvaluationById
  );

  const checkPlanId = localStorage.getItem("planId");

  function getCheck() {
    {
      checkPlanId
        ? navigate(`/check-out/${checkPlanId}`)
        : navigate("/dashboard");
    }
  }

  const checkIdeaValidation = getCompany?.data?.data?.ideaValidationsRemaining;

  useEffect(() => {
    if (id) {
      getIdeaEvaluationByIdApi(dispatch, Number(id));
    }
  }, [id, dispatch]);

  const ideas = getIdeaValidation?.data?.data;

  useEffect(() => {
    getCompanyApi(dispatch, onSuccess);
  }, [getCompany?.data?.data?.ideaValidationsRemaining]);

  const onSuccess = () => {};

  const handleRefineIdea = () => {
    if (checkIdeaValidation <= 0) {
      setIsModalOpen(true);
    } else {
      navigate(`/update-new-idea/${id}`);
    }
  };

  const getEvaluationMessage = (score: number) => {
    if (score === null) return "-";
    if (score < 50) return "Needs Improvement";
    if (score >= 50 && score < 70) return "Average";
    return "Great";
  };

  const getIcon = (score: number) => {
    if (score === null) return "-";
    if (score < 50) return improvement;
    if (score >= 50 && score < 70) return thumb;
    return stars;
  };

  const StepsIdea = () => {
    if (checkIdeaValidation <= 0) {
      setIsModalOpen(true);
    } else {
      navigate("/add-new-idea");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: a4 !important;
  margin: 10px;
      }
     body {
        -webkit-print-color-adjust: exact;
      }
      `,
  });

  return (
    <React.Fragment>
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Business Idea Evaluation</h1>
          <div className="flex gap-3">
            <RoundedButton
              title={"View Report"}
              className="!border-[2px] !text-[#002A2D]  !border-[#002A2D]  hover:!border-[#002A2D]"
              type="transparent"
              sm
              onClick={handlePrint}
            />
            <ButtonWithSvg
              title={"Refine idea"}
              icon={visitIcon}
              type="transparent"
              bold
              sm
              className="!border-[2px] !text-[#002A2D]  !border-[#002A2D]  hover:!border-[#002A2D]"
              onClick={handleRefineIdea}
            />
          </div>
        </div>
        <div className="bg-[#CCE1E2]/20 h-auto p-8 rounded-md shadow-sm mt-5">
          <Row gutter={16}>
            <Col
              sm={12}
              md={14}
              lg={16}
              xl={18}
              xxl={19}
              className="flex items-center gap-4 break-words"
            >
              <div>
                <img src={Light} alt="Light Icon" />
              </div>
              <div className="font-semibold text-lg break-words w-full">
                {ideas?.ideaValidation?.title || "Loading..."}
              </div>
            </Col>
            <Col
              sm={12}
              md={10}
              lg={8}
              xl={6}
              xxl={5}
              className="flex items-center justify-end gap-4"
            >
              <div className="text-3xl font-bold leading-loose">
                {ideas?.ideaValidation?.score || "-"}%
              </div>
              <div className="bg-[rgba(255,168,0,0.22)] p-2 flex rounded-full gap-1">
                <img
                  src={
                    ideas?.ideaValidation?.score !== undefined
                      ? getIcon(ideas?.ideaValidation?.score)
                      : "-"
                  }
                  alt="Thumb Icon"
                />
                <p>
                  {ideas?.ideaValidation?.score !== undefined
                    ? getEvaluationMessage(ideas?.ideaValidation?.score)
                    : "-"}
                </p>
              </div>
            </Col>
          </Row>
          <div
            className="text-[#363F52] pt-4 pl-1 body-s"
            dangerouslySetInnerHTML={{
              __html: ideas?.ideaValidation?.overview
                ? `${ideas.ideaValidation.overview}`.replace(
                    /#linebreak#/g,
                    "<br/><br/>"
                  )
                : "",
            }}
          ></div>
        </div>
        <div className="flex flex-col gap-5 bg-[#CCE1E2]/20 h-auto p-4 rounded-md shadow-sm mt-5">
          {/* praise */}
          <div className="w-full flex flex-col rounded-md bg-[#FFFFFF] px-3 py-5 shadow-lg ">
            <div className="w-full flex gap-5  items-center">
              <div>
                <img src={Praise} alt="Icon" className="w-12" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Praise</h1>
              </div>
            </div>
            <Divider />
            {ideas?.praise?.length > 0 ? (
              <div className=" flex flex-wrap gap-2">
                {ideas?.praise.map((item: any) => (
                  <div
                    key={item.id}
                    className="bg-[#F2F4F8] flex items-center rounded-md p-2 text-[#212838] font-semibold gap-2"
                  >
                    <div className="bg-[#F2F4F8] h-[15px] w-[15px] text-black border-2 border-[#016A70] rounded-full"></div>
                    <h2 className="whitespace-nowrap">{item?.title}</h2>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <img src={SCPLoad} />
                <p>
                  No suggestions for now. Consider revisiting your idea for
                  fresh insights!
                </p>
              </div>
            )}
          </div>

          {/* suggestion */}
          <div className="w-full flex flex-col rounded-md bg-[#FFFFFF] px-3 py-5 shadow-lg">
            <div className="w-full flex gap-5 items-center">
              <div>
                <img src={Suggestion} alt="Icon" className="w-12" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Suggestions</h1>
              </div>
            </div>
            <Divider />
            {ideas?.suggestion?.length > 0 ? (
              <div className=" flex flex-wrap gap-2">
                {ideas?.suggestion.map((item: any) => (
                  <div
                    key={item.id}
                    className="bg-[#F2F4F8] flex items-center rounded-md p-2 text-[#212838] font-semibold gap-2"
                  >
                    <div className="bg-[#F2F4F8] h-[15px] w-[15px] text-black border-2 border-[#016A70] rounded-full"></div>
                    <h2 className="whitespace-nowrap">{item?.title}</h2>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <img src={SCPLoad} />
                <p>
                  No suggestions for now. Consider revisiting your idea for
                  fresh insights!
                </p>
              </div>
            )}
          </div>

          {/* critique */}
          <div className="w-full flex flex-col rounded-md bg-[#FFFFFF] px-3 py-5 shadow-lg">
            <div className="w-full flex gap-5  items-center">
              <div>
                <img src={Critique} alt="Icon" className="w-12" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Critiques</h1>
              </div>
            </div>
            <Divider />
            {ideas?.critque?.length > 0 ? (
              <div className=" flex flex-wrap gap-2">
                {ideas?.critque?.map((item: any) => (
                  <div
                    key={item.id}
                    className="bg-[#F2F4F8] flex items-center  rounded-md p-2 text-[#212838] font-semibold gap-2"
                  >
                    <div className="bg-[#F2F4F8] h-[15px] w-[15px] text-black border-2 border-[#016A70] rounded-full"></div>
                    <h2 className="whitespace-nowrap">{item?.title}</h2>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <img src={SCPLoad} />
                <p>
                  No suggestions for now. Consider revisiting your idea for
                  fresh insights!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-2 items-end justify-end mt-5">
          <RoundedButton
            title={"Validate another idea"}
            className="w-[20%] mt-2"
            type="primary"
            onClick={StepsIdea}
            sm
          />
          <RoundedButton
            title={"Continue"}
            className="w-[15%] mt-2"
            type="secondary"
            onClick={() => getCheck()}
            sm
          />
        </div>
      </div>

      <div className="flex hidden">
        <div ref={reportRef} className="p-12">
          <div className="rounded-md bg-[#F2F4F8] p-4">
            <Row gutter={16}>
              <Col lg={4} md={4} sm={6}>
                <div>
                  <h2 className="text-para font-medium body-s">
                    Business Name
                  </h2>
                  <h1 className="text-body font-semibold leading-6 text-xl">
                    {business?.name}
                  </h1>
                </div>
              </Col>
              <Col lg={20} md={20} sm={18}>
                <span className="text-para font-medium leading-5">
                  {business?.description}
                </span>
              </Col>
            </Row>
          </div>

          <div className="my-6">
            <Row gutter={16}>
              <Col lg={16} md={12} sm={12}>
                <div>
                  <h2 className="text-para font-medium text-lg">Idea Name</h2>
                  <h1 className="text-[#212838] font-semibold leading-6 text-xl">
                    {ideas?.ideaValidation?.title}
                  </h1>
                </div>
              </Col>
              <Col lg={8} md={12} sm={12}>
                <h2 className="text-para font-medium text-lg">Idea Score</h2>
                <span className="text-[#7A5AF8] font-medium leading-6 text-2xl">
                  {ideas?.ideaValidation?.score} %
                </span>
              </Col>
            </Row>
          </div>
          <div className="">
            <div
              className="text-[#363F52] pt-4 pl-1 body-s bg-[#CCE1E2]/20 p-2 rounded-md shadow-sm mb-5"
              dangerouslySetInnerHTML={{
                __html: ideas?.ideaValidation?.overview
                  ? `${ideas.ideaValidation.overview}`.replace(
                      /#linebreak#/g,
                      "<br/><br/>"
                    )
                  : "",
              }}
            />
          </div>

          {/* container praise */}
          <div className="border border-1 rounded-md printable-component mb-4">
            <div className="w-full flex flex-col rounded-md bg-[#FFFFFF] p-4">
              <div className="w-full flex gap-5 items-center">
                <div>
                  <img src={Praise2} alt="Icon" className="w-12" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">Praise</h1>
                  <span className="text-para font-medium body-s">
                    We knew there was something special about it, and now the
                    results prove it.
                  </span>
                </div>
              </div>
              <Divider />
              {ideas?.praise?.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {ideas?.praise.map((item: any, index: number) => (
                    <div
                      key={item.index}
                      className="flex flex-col items-start gap-1"
                    >
                      <h2 className="text-body font-medium paragraph">
                        {index + 1}. {item?.title}
                      </h2>
                      <span className="text-[#363F52] body-s">
                        {item?.value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <img src={SCPLoad} />
                  <p>
                    No suggestions for now. Consider revisiting your idea for
                    fresh insights!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* container suggestion */}
          <div className="border border-1 rounded-md mb-12 mt-4  page-break">
            <div className="w-full flex flex-col rounded-md bg-[#FFFFFF] px-3 py-3">
              <div className="w-full flex gap-5 items-center">
                <div>
                  <img src={Suggestion2} alt="Icon" className="w-12" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">Suggestion</h1>
                  <span className="text-para font-medium body-s">
                    We knew there was something special about it, and now the
                    results prove it.
                  </span>
                </div>
              </div>
              <Divider />
              {ideas?.suggestion?.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {ideas?.suggestion.map((item: any, index: number) => (
                    <div
                      key={item.index}
                      className="flex flex-col items-start  gap-1"
                    >
                      <h2 className="text-body font-medium paragraph">
                        {index + 1}. {item?.title}
                      </h2>
                      <span className="text-[#363F52] body-s">
                        {item?.value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <img src={SCPLoad} />
                  <p>
                    No suggestions for now. Consider revisiting your idea for
                    fresh insights!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* container critique */}
          <div className="pt-5">
            <div className="border border-1 rounded-md  printable-component">
              <div className="w-full flex flex-col rounded-md bg-[#FFFFFF] px-3 py-3">
                <div className="w-full flex gap-5 items-center">
                  <div>
                    <img src={Critique2} alt="Icon" className="w-12" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Critiques</h1>
                    <span className="text-para font-medium body-s">
                      We knew there was something special about it, and now the
                      results prove it.
                    </span>
                  </div>
                </div>
                <Divider />
                {ideas?.critque?.length > 0 ? (
                  <div className="flex flex-col gap-1">
                    {ideas?.critque.map((item: any, index: number) => (
                      <div
                        key={item.index}
                        className="flex flex-col items-start gap-1"
                      >
                        <h2 className="text-body font-medium paragraph">
                          {index + 1}. {item?.title}
                        </h2>
                        <span className="text-[#363F52] text-md">
                          {item?.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <img src={SCPLoad} />
                    <p>
                      No suggestions for now. Consider revisiting your idea for
                      fresh insights!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <PlanLimitModal
        title="Idea Validation"
        onCancel={handleCancel}
        isVisible={isModalOpen}
      />
    </React.Fragment>
  );
};

export default Sections;
