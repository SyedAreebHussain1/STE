import { Col, Row } from "antd";
import { ReactElement } from "react";
import PwLogo from "./../../../assets/pw-logo.svg";
type Props = {
  children: ReactElement;
};

const AuthSidebar = ({ children }: Props) => {
  return (
    <div>
      <div className="pt-[2.5rem] px-[4.375rem]">
        <img src={PwLogo} alt="" width={200} />
      </div>
      <Row gutter={0} justify="center">
        <Col lg={14} sm={24} xs={24} md={24} className="bg-transparent">
          <div>{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthSidebar;
