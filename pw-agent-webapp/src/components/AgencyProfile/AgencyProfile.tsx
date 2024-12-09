import { Form, FormInstance, Row } from "antd";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import Button from "../../helpers/inputs/Button";
import WebsiteColorsSection from "./Sections/WebsiteColorsSection/WebsiteColorsSection";
import WorkingDays from "./Sections/WorkingDaysSection/WorkingDays";
import AgencyDetailsSection from "./Sections/AgencyDetailsSection/AgencyDetailsSection";
import { useEffect, useState } from "react";
import {
  editAgencyProfileApi,
  getAgencyDetailsApi,
} from "../../redux/api/WebEstate";
import { useDispatch, useSelector } from "react-redux";
import LogoSection from "./Sections/LogoSection/LogoSection";
import { getFromStorage } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { infoMessage } from "../../utils/message";
import dayjs from "dayjs";

type Props = {};

const AgencyProfile = (props: Props) => {
  const [form]: [FormInstance<any>] = Form.useForm();
  const [agencyLogo, setAgencyLogo] = useState("");
  const [days, setDays] = useState<any>([]);
  const getAgencyDetails = useSelector((state: any) => state.getAgencyDetails);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  useEffect(() => {
    getAgencyDetailsApi(dispatch);
  }, []);

  useEffect(() => {
    if (getAgencyDetails?.data) {
      const data = getAgencyDetails?.data;
      form.setFieldValue("address", data?.address);
      form.setFieldValue("agencyName", data?.agencyName);
      form.setFieldValue("city", data?.city);
      form.setFieldValue("noOfBranches", data?.NoOfBranches);
      form.setFieldValue("noOfStaff", data?.NoOfStaffs);
      form.setFieldValue("primaryColor", `#${data?.primaryColor}`);
      form.setFieldValue("secondaryColor", `#${data?.secondaryColor}`);
      form.setFieldValue(
        "workStartTime",
        data?.openHours ? dayjs(data?.openHours) : null
      );
      form.setFieldValue(
        "workEndTime",
        data?.openHours ? dayjs(data?.closeHours) : null
      );
      setAgencyLogo(data?.logo_Url);
      setDays(data?.openDays);
    }
  }, [getAgencyDetails]);
  const onFinist = (val: any) => {
    const agenctid = getFromStorage("user").agencyId;

    if (days?.length < 0) {
      infoMessage("Select Working Days");
      return;
    }
    const body = {
      agencyName: val?.agencyName,
      logo_Url: agencyLogo,
      city: val?.city,
      address: val?.address,
      NoOfBranches: val?.noOfBranches,
      NoOfStaffs: val?.noOfStaff,
      primaryColor: val?.primaryColor?.split("#")?.[1],
      secondaryColor: val?.secondaryColor?.split("#")?.[1],
      openHours: dayjs(val?.workStartTime),
      closeHours: dayjs(val?.workEndTime),
      openDays: days,
    };
    editAgencyProfileApi(agenctid, dispatch, body, onSuccess);
  };
  const onSuccess = () => {
    getAgencyDetailsApi(dispatch);
  };

  return (
    <PageContainer>
      <></>
      <PageHeader title="Agency Profile" />
      <div className="bg-[#FFFFFF] p-[16px] rounded-xl mt-4">
        <Form form={form} onFinish={onFinist}>
          <LogoSection agencyLogo={agencyLogo} setAgencyLogo={setAgencyLogo} />
          <WebsiteColorsSection form={form} />
          <AgencyDetailsSection />
          <WorkingDays days={days} setDays={setDays} />
          <div className="flex justify-end">
            <Button label={"Save and Publish"} variant="filled" />
          </div>
        </Form>
      </div>
    </PageContainer>
  );
};

export default AgencyProfile;
