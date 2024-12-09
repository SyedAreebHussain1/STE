import { Button, Col, Form, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import PropertyTypeSelect, {
  PropertyTypeOptions,
} from "./helpers/PropertyTypeSelect";
import InputButton from "../../helpers/inputs/InputButton";
import { useNavigate } from "react-router-dom";
import {
  getProjectApi,
  getProjectForSelectFieldApi,
} from "../../redux/api/InventoryManagement";
import { useDispatch, useSelector } from "react-redux";
import SelectFieldComponent from "../../helpers/inputs/SelectFieldComponent";
import { infoMessage } from "../../utils/message";

type Props = {
  open: boolean;
  close: () => void;
};

const ChoosePropertyTypeModal = ({ open, close }: Props) => {
  const [current, setCurrent] = useState<PropertyTypeOptions>(
    PropertyTypeOptions.PROJECT
  );
  const [projectID, setProjectID] = useState(0);
  const navigate = useNavigate();
  function handleContinue() {
    if (current === "existing") {
      if (!projectID) {
        infoMessage("Select Project");
        return;
      }
      const projectDetail = getProjectForSelectField?.data?.items?.filter(
        (val: any) => val?.id === projectID
      );

      navigate(`add-inventory?type=${current}&projectId=${projectID}`, {
        state: projectDetail[0],
      });
    } else {
      navigate(`add-inventory?type=${current}`);
    }
  }

  const getProjectForSelectField = useSelector(
    (state: any) => state.getProjectForSelectField
  );

  return (
    <Modal
      title="Select Property Type"
      centered
      open={open}
      onCancel={close}
      footer={false}
      width={779}
    >
      <div className="px-8 py-9">
        <div className="mb-[2.125rem] flex flex-col gap-[.125rem]">
          <h2 className="text-[#344054] text-[1.1719rem] font-semibold">
            Choose the Property Type
          </h2>
          <h3 className="text-[#667085] text-[.9375rem] font-medium">
            Select the property type that you want to add in inventory.
          </h3>
        </div>
        <PropertyTypeSelect
          current={current}
          setCurrent={(value: PropertyTypeOptions) => setCurrent(value)}
        />
        {current === PropertyTypeOptions.EXISTING && (
          <div className="mt-7">
            <span className="text-[#667085] text-base font-medium">
              Select Project
            </span>
            <SelectFieldComponent
              name="projectId"
              apiwithoutId={getProjectForSelectFieldApi}
              loading={getProjectForSelectField?.loading}
              onChange={(val: any) => setProjectID(val)}
              labelCustom={(val: any) => val.projectName}
            />
          </div>
        )}
        <div className="flex justify-end">
          <InputButton
            className="w-[236px] h-[48px]  bg-primary text-[white] text-[1rem] font-bold mt-[3.5rem] rounded-xl"
            name="Continue"
            onClick={handleContinue}
          />
        </div>
      </div>
    </Modal>
  );
};
export default ChoosePropertyTypeModal;
