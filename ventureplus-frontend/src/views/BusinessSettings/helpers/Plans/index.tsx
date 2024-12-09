import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedCardType } from "../..";
import RoundedButton from "../../../../components/button/RoundedButton";
import useToggle from "../../../../hooks/useToggle";
import { RootState } from "../../../../redux/store";
import {
  deleteBusinessPlanApi,
  getAllBusinessPlansByBusinessIdApi,
} from "../../../../services/api/BusinessPlan";
import BusinessSettingsLayout from "../BusinessSettingsLayout";
import AddNewPlanModal from "./helpers/AddNewPlanModal";
import NoPlans from "./helpers/NoPlans";
import PlanCard from "./helpers/PlanCard";
import { setInStorage } from "../../../../utils/storage";
import { setCurrentSelectedBusinessPlan } from "../../../../redux/slices/SelectedBusinessPlan/selectedBusinessPlanSlice";
import PlanLimitModal from "../../../../components/modals/PlanLimitModal";
import ButtonWithSvg from "../../../../components/button/ButtonWithSvg";
import { PlusCircleFilled } from "@ant-design/icons";
import { circularPlusIcon } from "../../../../assets";

type PlansContentI = {
  headerTitle: SelectedCardType;
  headerDescription: string;
  headerTagTitle: string;
};
const plansContent: PlansContentI = {
  headerTitle: "Plans",
  headerDescription:
    "Detailed subscription options and pricing packages for services",
  headerTagTitle: "Subscription Options",
};

interface PlansI {
  selectedCard: SelectedCardType;
  setSelectedCard: Dispatch<SetStateAction<SelectedCardType>>;
}

const Plans = ({ selectedCard, setSelectedCard }: PlansI) => {
  const [open, toggle] = useToggle();
  const [openEdit, toggleEdit] = useToggle();

  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPlan, setEditPlan] = useState(null);
  const dispatch = useDispatch();

  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount?.data
  );

  const getAllBusinessPlans = useSelector(
    (state: RootState) => state.getPlansByBusinessId?.data
  );
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );

  const getPlansByBusinessId = useSelector(
    (state: RootState) => state.getPlansByBusinessId?.data
  );

  const onSetSelectedPlan = (planId: number) => {
    // setSelectedPlan(planId);
  };

  const onDeleteSuccess = () => {
    setSelectedPlan(null);
    getAllBusinessPlansByBusinessIdApi(
      dispatch,
      currentSelectedBusiness?.business?.id
    );

    if (getPlansByBusinessId?.data?.length > 0) {
      setInStorage("businessPlan", getPlansByBusinessId?.data[0]);
      dispatch(setCurrentSelectedBusinessPlan(getPlansByBusinessId?.data[0]));
    }
  };

  const handleDeletePlan = () => {
    if (selectedPlan)
      deleteBusinessPlanApi(dispatch, selectedPlan, onDeleteSuccess);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const isLimitExceeded = () => {
    return (
      Number(getBusinessCount?.data?.allowed?.businessPlanCount) -
        Number(getBusinessCount?.data?.current?.businessplancount) <=
      0
    );
  };

  return (
    <>
      {open && <AddNewPlanModal open={open} onClose={toggle} />}
      {openEdit && (
        <AddNewPlanModal
          open={openEdit}
          onClose={toggleEdit}
          editPlan={editPlan}
          setEditPlan={setEditPlan}
        />
      )}

      <BusinessSettingsLayout
        {...plansContent}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        noPadding={getAllBusinessPlans?.data?.length == 0}
      >
        {getAllBusinessPlans?.data?.length == 0 ? (
          <NoPlans toggle={toggle} />
        ) : (
          <div className="sm:pr-[30px] pr-0 w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-[23px] text-[#212838] font-medium">Plan</h1>
              <ButtonWithSvg
                title={"Add New Plan"}
                type="primary"
                isLeft
                icon={circularPlusIcon}
                onClick={() => {
                  isLimitExceeded() ? setIsModalOpen(true) : toggle();
                }}
              />
            </div>
            <div className="flex gap-4 flex-wrap mb-6 mt-[10px]">
              {getAllBusinessPlans?.data?.map((plan: any) => (
                <PlanCard
                  key={plan?.id}
                  plan={plan}
                  selectedPlanId={selectedPlan}
                  onSetSelectedPlan={onSetSelectedPlan}
                  edit={() => {
                    setEditPlan(plan);
                    toggleEdit();
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </BusinessSettingsLayout>
      <PlanLimitModal
        title="Plan"
        onCancel={handleCancel}
        isVisible={isModalOpen}
      />
    </>
  );
};
export default Plans;
