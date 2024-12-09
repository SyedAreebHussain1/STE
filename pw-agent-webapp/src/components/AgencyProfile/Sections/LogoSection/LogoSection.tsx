import { useEffect, useState } from "react";
import { useUpload } from "../../../../hooks/useUpload";
import SectionContainer from "../../SectionContainer";
import { Col, Row } from "antd";
import LogosUpload from "../../../../helpers/Upload/LogosUpload";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageApi } from "../../../../redux/api/WebEstate";

type Props = {
  agencyLogo: any;
  setAgencyLogo: any;
};

const LogoSection = ({ agencyLogo, setAgencyLogo }: Props) => {
  const uploadProjectImage = useSelector(
    (state: any) => state.uploadProjectImage
  );

  useEffect(() => {
    if (uploadProjectImage?.data) {
      setAgencyLogo(uploadProjectImage?.data?.[0]);
    }
  }, [uploadProjectImage]);

  const dispatch = useDispatch();

  const [
    logo,
    setLogo,
    logoPreviews,
    deletelogo,
    resetLogo,
    filesCountMasterPlan,
  ] = useUpload();
  useEffect(() => {
    if (logo?.length > 0) {
      const formData = new FormData();
      formData.append("files", logo[0]);
      uploadImageApi(dispatch, formData);
    }
  }, [logo]);
  return (
    <SectionContainer
      title="Agency logo"
      subtitle="Logo must be in high quality."
    >
      <Col xs={24} lg={4}>
        <div className="flex items-center justify-center  h-[100px] w-[100px]  ">
          <img
            src={agencyLogo}
            className="w-full h-full rounded-full"
            alt="Your logo"
          />
        </div>
      </Col>
      <Col xs={24} lg={5}>
        <div className="flex items-center h-full">
          <LogosUpload
            name="logo"
            files={logo}
            setFiles={setLogo}
            supportedFileTypes={["png", "jpg", "jpeg"]}
            supportedText={"Files Supported  JPG,JPEG,PNG"}
            fileName="INVENTORYIMAGES"
            fileUploadLimit={1}
            filesCount={filesCountMasterPlan}
          />
        </div>
      </Col>
    </SectionContainer>
  );
};

export default LogoSection;
