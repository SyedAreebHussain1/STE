import { Form, InputNumber } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { leftArrowGreenIcon } from "../../../../assets";
import RoundedButton from "../../../../components/button/RoundedButton";
import TextInput from "../../../../components/inputs/TextInput";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import Tag from "../../../../components/tag/tag";
import { RootState } from "../../../../redux/store";
import { createEquityApi } from "../../../../services/api/BusinessPlanSetup/Equity";

interface Props { }

const AddEquity = (props: Props) => {
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    if (loading) return;
    setLoading(true);

    createEquityApi(
      dispatch,
      {
        ...values,
        businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
      },
      onSuccess
    );
  };

  const onSuccess = (res: boolean) => {
    if (res) {
      navigate("/business-plan-setups");
    }
    setLoading(res);
  };
  useEffect(() => {
    form.setFieldValue("share", 0);
  }, []);

  return (
    <PageContainer>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={leftArrowGreenIcon} alt="" />
        <h1 className="text-primary font-medium heading-m">Back</h1>
      </div>
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="addEquityForm"
        className="w-full"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="heading-s font-semibold">Business Plan Setup</h1>
          <p className="body-s text-para mb-12">
            In-depth Analysis of Products, Staffing, Equity, and Services
          </p>
          <div className="flex flex-col w-full border rounded-xl border-strokes p-6 gap-3">
            <Tag title={"Equity"} type="primary" bold />
            <div>
              <label htmlFor="name" className="input-label-sm">
                1. What is the name of the equity holder or entity?
              </label>
              <TextInput
                name="name"
                placeholder="Type your answer here ..."
                className="w-full h-[48px]"
                maxLength={35}
                rules={[
                  {
                    required: true,
                    message: "This field is required!",
                  },
                ]}
              />
            </div>

            <div>
              <label htmlFor="share" className="input-label-sm">
                2. What percentage of equity does this entity hold?
              </label>
              <TextInput
                name="share"
                id="share"
                className="w-[200px] h-[40px] mb-2 "
                maxLength={3}
                onChange={(e) => {
                  if (Number(e.target.value) >= 100) {
                    form.setFieldValue("share", 100);
                  } else if (
                    Number(e.target.value) < 100 &&
                    Number(e.target.value) > 0
                  ) {
                    form.setFieldValue("share", Number(e.target.value));
                  }
                }}
                onKeyDown={(e: any) => {
                  const regex = /[0-9]/;
                  if (e.code === "Space") {
                    e.preventDefault();

                    return;
                  }
                  const allowedKeys = [
                    "Backspace",
                    // "Space",
                    "Shift",
                    "ArrowLeft",
                    "ArrowRight",
                    "ArrowUp",
                    "ArrowDown",
                    "Tab",
                  ];
                  if (allowedKeys.includes(e.key)) {
                    return;
                  }
                  if (!regex.test(e.key)) {
                    e.preventDefault();
                    return;
                  }
                }}
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full mt-6">
          <RoundedButton
            title={"Add Equity"}
            type="primary"
            sm
            bold
            htmlType="submit"
            loading={loading}
            className={`${loading ? "!cursor-not-allowed" : "!cursor-pointer"}`}
          />
        </div>
      </Form>
    </PageContainer>
  );
};

export default AddEquity;
