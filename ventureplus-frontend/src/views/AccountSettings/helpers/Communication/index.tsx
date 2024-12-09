import { Col, Row } from "antd";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import AccountSettingsLayout from "../AccountSettingsLayout";
import EmailPreference from "./helpers/EmailPreference";

const Communication = () => {
  return (
    <PageContainer>
      <AccountSettingsLayout
        headerTitle="Communication"
        headerDescription="Set up notification preferences and communication channels"
        headerTagTitle="Notifications"
        selectedCard="communication"
      >
        <Row gutter={[0, 10]} className="!w-full">
          <EmailPreference />
          <Col xl={12} md={24} sm={24} className=" p-2">
            <div className="border border-stroke p-2 rounded-md">
              <h1 className="text-title font-medium paragraph">
                When we'll still get in touch:
              </h1>

              <div className="flex flex-col gap-1 mb-2">
                <h1 className="font-medium body-s text-body">
                  Account & Billing
                </h1>
                <p className="text-para text-[12px]">
                  We will always contact you with important updates regarding
                  your account, subscription, and billing.
                </p>
              </div>

              <div className="flex flex-col gap-1 mb-2">
                <h1 className="font-medium body-s text-body">
                  Reviews & Feedback
                </h1>
                <p className="text-para text-[12px]">
                  We value your opinion and may occasionally request feedback on
                  our company, products, and services.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </AccountSettingsLayout>
    </PageContainer>
  );
};

export default Communication;
