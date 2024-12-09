import { Col, Form, FormInstance, Row } from "antd";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import AgencyProfileSetupHeader from "./helpers/AgencyProfileSetupHeader";
import WebsiteColorsSection from "./helpers/Sections/WebsiteColorsSection/WebsiteColorsSection";
import WebsiteDetailsSection from "./helpers/Sections/WebsiteDetailsSection/WebsiteDetailsSection";
import UploadImagesSections from "./helpers/Sections/UploadImagesSections/UploadImagesSections";
import PermalinksSection from "./helpers/Sections/PermalinksSection/PermalinksSection";
import Button from "../../helpers/inputs/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editwebsiteApi, getwebsiteApi } from "../../redux/api/WebEstate";
import useSelection from "antd/es/table/hooks/useSelection";
import { useNavigate } from "react-router-dom";
import { getFromStorage } from "../../utils/storage";

type Props = {};

const AddNewWebEstate = (props: Props) => {
  const [form]: [FormInstance<any>] = Form.useForm();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [webPhoto, setWebPhoto] = useState<any>([]);
  const getWebsite = useSelector((state: any) => state.getWebsite);
  useEffect(() => {
    getwebsiteApi(dispatch);
  }, []);

  useEffect(() => {
    if (getWebsite?.data) {
      const data = getWebsite?.data?.profile?.agency?.agencyDigitalCatalogue;
      form.setFieldValue("aboutAgency", data?.aboutAgency);
      form.setFieldValue("agencyEmail", data?.agencyEmail);
      form.setFieldValue("agencyTagline", data?.agencyTagLine);
      form.setFieldValue("fontColor", `#${data?.fontColor}`);
      form.setFieldValue("primaryColor", `#${data?.primaryColor}`);
      form.setFieldValue("facebook", data?.facebookUrl);
      form.setFieldValue("instagram", data?.InstagramUrl);
      form.setFieldValue("linkedin", data?.linkedInUrl);

      for (let i = 0; i < data?.catalogueVideo?.length; i++) {
        form.setFieldValue(`youtube${i + 1}`, data?.catalogueVideo[i]?.url);
      }
      setWebPhoto(data?.cataloguePhoto?.map((val: any) => val?.url));
    }
  }, [getWebsite]);
  const onFinish = (val: any) => {
    const youtubeVideo = [];
    for (let i = 0; i < 3; i++) {
      if (val?.[`youtube${i + 1}`]) {
        youtubeVideo.push(val?.[`youtube${i + 1}`]);
      }
    }

    const body = {
      agencyEmail: val?.agencyEmail,
      fontColor: val?.fontColor.split("#")?.[1],
      primaryColor: val?.primaryColor.split("#")?.[1],
      aboutAgency: val?.aboutAgency,
      facebookUrl: val?.facebook,
      InstagramUrl: val?.instagram,
      linkedInUrl: val?.linkedin,
      agencyTagLine: val?.agencyTagline,
      photo: webPhoto,
      video: youtubeVideo,
    };
    editwebsiteApi(dispatch, body, onSuccess);
  };
  const onSuccess = () => {
    navigator(-1);
  };
  const userRole = getFromStorage("user")?.role;
  return (
    <PageContainer>
      <PageHeader title="WebEstate" />
      <div className="bg-[#FFFFFF] p-[16px] rounded-xl mt-4">
        {userRole === "agentOwner" && <AgencyProfileSetupHeader />}
        <Form form={form} onFinish={onFinish}>
          <WebsiteColorsSection form={form} />
          <WebsiteDetailsSection />
          <UploadImagesSections webPhoto={webPhoto} setWebPhoto={setWebPhoto} />
          <PermalinksSection />
          <div className="flex justify-end">
            <Button label={"Save and Publish"} variant="filled" />
          </div>
        </Form>
      </div>
    </PageContainer>
  );
};

export default AddNewWebEstate;
