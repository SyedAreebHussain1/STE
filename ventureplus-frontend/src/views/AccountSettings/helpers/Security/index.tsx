import { Col, Row } from "antd";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import AccountSettingsLayout from "../AccountSettingsLayout";
import SocialConnections from "./helpers/SocialConnections";
import UpdateEmailForm from "./helpers/UpdateEmailForm";
import UpdatePasswordForm from "./helpers/UpdatePasswordForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { getCompanyUserByIdApi } from "../../../../services/api/CompanyUser";

const Security = () => {
  const { isAuth, userData } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const getCompanyUserById = useSelector(
    (state: RootState) => state.getCompanyUserById?.data
  );

  useEffect(() => {
    if (userData?.companyUser?.id)
      getCompanyUserByIdApi(dispatch, userData?.companyUser?.id);
  }, [userData?.companyUser?.id]);

  return (
    <PageContainer>
      <AccountSettingsLayout
        headerTitle="Security"
        headerDescription="Configure your account's security settings and access controls"
        headerTagTitle="Account Security"
        selectedCard="security"
      >
        <Row gutter={16} className="!w-full">
          {/* left side of form */}
          <Col xl={12} lg={24} sm={14}>
            <UpdateEmailForm getCompanyUserById={getCompanyUserById} />
            <UpdatePasswordForm getCompanyUserById={getCompanyUserById} />
          </Col>

          {/* right side of form */}
          <Col xl={12} lg={24} sm={14}>
          </Col>
        </Row>
      </AccountSettingsLayout>
    </PageContainer>
  );
};

export default Security;
