import { Divider, Form, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import RoundedButton from "../../../../../components/button/RoundedButton";
import TextInput from "../../../../../components/inputs/TextInput";
import { getLanguagesApi } from "../../../../../services/api/language";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import TextArea from "antd/es/input/TextArea";
import {
  createBusinessPlanApi,
  getAllBusinessPlansByBusinessIdApi,
  updateBusinessPlanApi,
} from "../../../../../services/api/BusinessPlan";
import { getFromStorage } from "../../../../../utils/storage";
import { setInStorage } from "../../../../../utils/storage";
import { setCurrentSelectedBusinessPlan } from "../../../../../redux/slices/SelectedBusinessPlan/selectedBusinessPlanSlice";
import { getBusinessCountApi } from "../../../../../services/api/GetBusinessCount";

interface AddNewPlanModalProps {
  open?: any | undefined;
  onClose?: any;
  editPlan?: any;
  setEditPlan?: any;
}

type OnFinishType = {
  title: string;
  description: string;
  languageId: number;
};

const AddNewPlanModal = ({
  open,
  onClose,
  editPlan,
  setEditPlan,
}: AddNewPlanModalProps) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // const businessCount = getFromStorage("businessCount");
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount
  );

  const businessCount = getBusinessCount?.data?.data;

  const plan = businessCount?.current?.businessplancount;

  const subscribedPlan = businessCount?.allowed?.businessPlanCount;

  const isPlanLimitExceeded = subscribedPlan ? subscribedPlan <= plan : false;

  const languagesList = useSelector(
    (state: RootState) => state.getLanguages?.data
  );
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );

  const onFinish = (values: OnFinishType) => {
    if (editPlan) {
      // edit plan Api
      setLoading(true);
      updateBusinessPlanApi(dispatch, editPlan?.id, { ...values }, onUpdate);
    } else {
      createBusinessPlanApi(
        dispatch,
        {
          ...values,
          businessId: currentSelectedBusiness?.business?.id,
        },
        onSuccess
      );
    }
  };

  const onUpdate = (res: any) => {
    setInStorage("businessPlan", res?.data);
    dispatch(setCurrentSelectedBusinessPlan(res?.data));
    onClose();
    setLoading(false);
    setEditPlan(null);
    getAllBusinessPlansByBusinessIdApi(
      dispatch,
      currentSelectedBusiness?.business?.id
    );
    getBusinessCountApi(dispatch);
  };

  const onSuccess = (res: any) => {
    //setting newly created plan as selected business plan
    setInStorage("businessPlan", res?.data);
    dispatch(setCurrentSelectedBusinessPlan(res?.data));

    onClose(false);

    getAllBusinessPlansByBusinessIdApi(
      dispatch,
      currentSelectedBusiness?.business?.id
    );
    getBusinessCountApi(dispatch);
  };

  useEffect(() => {
    if (!languagesList) getLanguagesApi(dispatch);
  }, []);

  useEffect(() => {
    if (editPlan) {
      form.setFieldsValue({
        title: editPlan?.title,
        description: editPlan?.description,
        languageId: editPlan?.languageId,
      });
    }
  }, [editPlan]);

  return (
    <Modal
      title={`${editPlan ? "Update" : "Create"} Plan`}
      centered
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
    >
      <Form
        onFinish={onFinish}
        name="addNewUsers"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
        className="mt-4"
      >
        <div className="sm:flex block gap-2 justify-between items-center">
          <div className="w-full">
            <label htmlFor="title" className="input-label-sm">
              Plan Name
            </label>
            <TextInput
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              maxLength={25}
              id="title"
              name="title"
              className="min-h-[48px] "
              placeholder="Enter plan name"
            />
          </div>

          <div className="w-full">
            <label htmlFor="languageId" className="input-label-sm">
              Language
            </label>
            <Form.Item
              className="w-full min-h-[48px]"
              name="languageId"
              id="languageId"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Select
                className="w-full min-h-[48px]"
                placeholder="Please Select"
                showSearch
                filterOption={(input: any, option: any) => {
                  return option?.children
                    ?.toLowerCase()
                    .includes(input.toLowerCase());
                }}
              >
                {languagesList?.length > 0 &&
                  languagesList?.map((language: any) => (
                    <Select.Option key={language?.id} value={language?.id}>
                      {language?.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="description" className="input-label-sm">
            Description
          </label>
          <Form.Item
            className="w-full min-h-[48px]"
            name="description"
            id="description"
          >
            <TextArea
              placeholder="Enter Description"
              style={{ height: 120, resize: "none" }}
            />
          </Form.Item>
        </div>
        <div className="flex justify-between gap-2">
          <RoundedButton
            onClick={() => onClose(false)}
            type="danger"
            title={"Cancel"}
            loading={loading}
            sm
          />

          <div className="flex gap-2 items-center">
            <RoundedButton
              title={editPlan ? "Update" : "Add"}
              type="primary"
              sm
              loading={loading}
              htmlType="submit"
            />
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default AddNewPlanModal;
