import { Col, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useRef, useState } from "react";
import { useUpload } from "../../../hooks/useUpload";
import BusinessCardCarousel from "./BusinessCardCarousel";
import PreviewCardForm from "./BusinessCardForm";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../../redux/api/auth";

const PreviewCard = () => {
  const [form] = useForm();
  const [imageOrFile, setImageOrFile] = useState({
    masterPlan: "",
    projectOrProperty: [],
    document: [],
  });
  const [
    masterPlanImages,
    setMasterPlanImages,
    masterPlanImagesPreviews,
    deleteMasterPlanImages,
    resetMasterPlanImages,
    filesCountMasterPlan,
  ] = useUpload();
  const dispatch = useDispatch();
  const customPrintRef = useRef<any>(null);
  const getProfile = useSelector((state: any) => state.getProfile);
  const [logoURL, setLogoURL] = useState("");

  const handlePrint = useReactToPrint({
    content: () => customPrintRef.current,
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: a4 !important;
  margin: 0px;
  
      }`,
  });

  useEffect(() => {
    if (masterPlanImagesPreviews?.[0]?.url) {
      [setLogoURL(masterPlanImagesPreviews?.[0]?.url)];
    }
  }, [masterPlanImagesPreviews]);

  useEffect(() => {
    form.setFieldsValue({
      agentName: getProfile?.data?.profile?.fullName,
      agencyName: getProfile?.data?.profile?.agency?.agencyName,
      number: getProfile?.data?.phone,
      email: getProfile?.data?.email,
      agencyAddress: getProfile?.data?.profile?.agency?.address,
    });

    setLogoURL(getProfile?.data?.profile?.agency?.logo_Url);
  }, [getProfile]);

  return (
    <Row gutter={[60, 30]} className="mt-4">
      <Col xs={24} md={24} lg={24} xl={12}>
        <BusinessCardCarousel
          form={form}
          previewImg={logoURL}
          customPrintRef={customPrintRef}
          logoURL={getProfile?.data?.profile?.agency?.logo_Url}
        />
      </Col>
      <Col xs={24} md={24} lg={24} xl={12}>
        <PreviewCardForm
          form={form}
          imageOrFile={imageOrFile}
          setImageOrFile={setImageOrFile}
          masterPlanImages={masterPlanImages}
          setMasterPlanImages={setMasterPlanImages}
          filesCountMasterPlan={filesCountMasterPlan}
          masterPlanImagesPreviews={masterPlanImagesPreviews}
          handlePrint={handlePrint}
        />
      </Col>
    </Row>
  );
};

export default PreviewCard;
