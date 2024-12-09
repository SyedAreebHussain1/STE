import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  validationSectionBg,
  visitIcon,
} from "../../../assets/dashboardAssets";
import { AddIcon } from "../../../assets/filledPlanSetupAssets";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import { RootState } from "../../../redux/store";
import { getCompanyApi } from "../../../services/api/Business";
import { getIdeaValidationByBusinessIdApi } from "../../../services/api/IdeaEvaluation";
import ValidationSectionCard from "./ValidationSectionCard";
import PlanLimitModal from "../../../components/modals/PlanLimitModal";

const ValidationSection = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const [businessIdea, setBusinessIdea] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCompany = useSelector((state: RootState) => state.getCompany);

  useEffect(() => {
    getCompanyApi(dispatch, onSuccess);
  }, []);

  const onSuccess = () => {};

  useEffect(() => {
    getIdeaValidationByBusinessIdApi(dispatch).then((response) => {
      setBusinessIdea(response?.data);
    });
  }, []);

  const checkIdeaValidation = getCompany?.data?.data?.ideaValidationsRemaining;

  const StepsIdea = () => {
    if (checkIdeaValidation <= 0) {
      setIsModalOpen(true);
    } else {
      navigate("/add-new-idea");
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="sm:flex hidden flex-col overflow-hidden  xl:w-full lg:w-[900px] mid:w-[800px] md:w-[650px] sm:w-[500px] xs:w-[400px] gap-[30px] relative justify-center items-center bg-[#F6F9FB] rounded-2xl p-[24px] w-full">
        <img
          src={validationSectionBg}
          alt=""
          className="absolute top-0 right-0 sm:hidden  md:hidden xl:block "
        />

        <div className="flex justify-between items-center w-full relative z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-body font-semibold heading-s leading-[31.55px]">
              Bring Your Ideas To Reality!
            </h1>
            <p className="text-para font-medium body-s leading-[27px]">
              View your idea scores, reports and suggestions given by our AI
              model.
            </p>
          </div>
          <div className="flex gap-3">
            <ButtonWithSvg
              title={"Add New Idea"}
              icon={AddIcon}
              type="transparent"
              bold
              sm
              isLeft
              className="!border-[2px] !text-[#002A2D]  !border-[#002A2D]  hover:!border-[#002A2D]"
              onClick={StepsIdea}
            />
            {!showAll && businessIdea?.length > 3 && (
              <ButtonWithSvg
                title={"View All"}
                icon={visitIcon}
                type="transparent"
                bold
                sm
                onClick={handleViewAll}
                className="!border-[2px] !text-[#002A2D]  !border-[#002A2D]  hover:!border-[#002A2D]"
              />
            )}
          </div>
        </div>
        <div className="flex justify-center w-full  relative z-10">
          <div className="flex gap-2 w-full flex-wrap  h-max ">
            {businessIdea
              ?.slice(0, showAll ? businessIdea.length : 3)
              .map((card: any, i: any) => (
                <div
                  key={i}
                  className="xs:w-[100%] md:w-[49%] h-full xl:w-[32.0%] cursor-pointer"
                  onClick={() => navigate(`/idea-evaluation/${card?.id}`)}
                >
                  <ValidationSectionCard
                    key={i}
                    card={card}
                    isFirst={i === 0}
                  />
                </div>
              ))}
          </div>
        </div>

        <PlanLimitModal
          title="Idea Validation"
          onCancel={handleCancel}
          isVisible={isModalOpen}
        />
      </div>
      <div className="sm:hidden flex flex-col overflow-hidden  xl:w-full lg:w-[900px] mid:w-[800px] md:w-[650px] sm:w-[500px] xs:w-[400px] gap-[30px] relative justify-center items-center bg-[#F6F9FB] rounded-2xl p-[24px] w-full">
        <img
          src={validationSectionBg}
          alt=""
          className="absolute top-0 right-0 sm:hidden  md:hidden xl:block "
        />

        <div className="flex justify-between items-center w-full relative z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-body font-semibold heading-s leading-[31.55px]">
              Bring Your Ideas To Reality!
            </h1>
            <p className="text-para font-medium body-s leading-[27px]">
              View your idea scores, reports and suggestions given by our AI
              model.
            </p>
          </div>
        </div>
        <div className="flex gap-3  ">
          <ButtonWithSvg
            title={"Add New Idea"}
            icon={AddIcon}
            type="transparent"
            bold
            sm
            isLeft
            className="!border-[2px] !text-[#002A2D]  !border-[#002A2D]  hover:!border-[#002A2D]"
            onClick={StepsIdea}
          />
          {!showAll && businessIdea?.length > 3 && (
            <ButtonWithSvg
              title={"View All"}
              icon={visitIcon}
              type="transparent"
              bold
              sm
              onClick={handleViewAll}
              className="!border-[2px] !text-[#002A2D]  !border-[#002A2D]  hover:!border-[#002A2D]"
            />
          )}
        </div>
        <div className="flex justify-center w-full  relative z-10">
          <div className="flex gap-2 w-full flex-wrap  h-max ">
            {businessIdea
              ?.slice(0, showAll ? businessIdea.length : 3)
              .map((card: any, i: any) => (
                <div
                  key={i}
                  className="xs:w-[100%] md:w-[49%] h-full xl:w-[32.0%] cursor-pointer"
                  onClick={() => navigate(`/idea-evaluation/${card?.id}`)}
                >
                  <ValidationSectionCard
                    key={i}
                    card={card}
                    isFirst={i === 0}
                  />
                </div>
              ))}
          </div>
        </div>

        <PlanLimitModal
          title="Idea Validation"
          onCancel={handleCancel}
          isVisible={isModalOpen}
        />
      </div>
    </>
  );
};

export default ValidationSection;
