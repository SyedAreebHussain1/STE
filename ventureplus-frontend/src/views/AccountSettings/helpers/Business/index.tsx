import { Col, Row } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { imgPlaceholder } from "../../../../assets/accountSettingsAssets";
import RoundedButton from "../../../../components/button/RoundedButton";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import useToggle from "../../../../hooks/useToggle";
import { RootState } from "../../../../redux/store";
import AccountSettingsLayout from "../AccountSettingsLayout";
import NewBusinessModal from "./helpers/NewBusinessModal";
import PlanLimitModal from "../../../../components/modals/PlanLimitModal";

const Business = () => {
  const [open, toggle] = useToggle();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getBusinesses = useSelector(
    (state: RootState) => state.getBusinesses?.data
  );
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount
  );

  const isLimitExceeded = () => {
    return (
      Number(getBusinessCount?.data?.data?.allowed?.businessCount) -
        Number(getBusinessCount?.data?.data?.current?.businesscount) <=
      0
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {open && <NewBusinessModal open={open} onClose={toggle} />}
      <PageContainer>
        <AccountSettingsLayout
          headerTitle="Business"
          headerDescription="Oversee company details, classifications, and operational settings"
          headerTagTitle="Company Info"
          selectedCard="business"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-title font-semibold heading-xs">
              Your Businesses
            </h1>
            <div className="flex gap-4 items-center flex-wrap">
              <div className="flex gap-4 flex-wrap items-center">
                {getBusinesses?.data?.businesses?.map((business: any) => (
                  <div
                    key={business?.name}
                    className="sm:flex hidden flex-col gap-2 p-2 items-center justify-center"
                  >
                    <img src={imgPlaceholder} alt="" />
                    <h1 className="body-s font-semibold text-title">
                      {business?.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:hidden flex  gap-4 items-center flex-wrap">
              <div className="flex gap-4 flex-wrap items-center">
                {getBusinesses?.data?.businesses?.map((business: any) => (
                  <div
                    key={business?.name}
                    className="flex flex-col gap-2 p-2 items-center justify-center w-full"
                  >
                    <img src={imgPlaceholder} alt="" />
                    <h1 className="body-s font-semibold text-title">
                      {business?.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <Row className="!w-full">
              <Col sm={8}>
                <RoundedButton
                  title={"New Business"}
                  type="primary"
                  className="w-full"
                  sm
                  onClick={() =>
                    isLimitExceeded() ? setIsModalOpen(true) : toggle()
                  }
                />
              </Col>
            </Row>
          </div>
          <PlanLimitModal
            title="Business"
            onCancel={handleCancel}
            isVisible={isModalOpen}
          />
        </AccountSettingsLayout>
      </PageContainer>
    </>
  );
};

export default Business;
