import { Col, Row } from "antd";
import { ReactElement } from "react";
import venturelogo from "./../../../assets/logo.png";
type Props = {
  children: ReactElement;
};

const AuthSidebar = ({ children }: Props) => {
  return (
    <div className="!h-[100vh] flex flex-col bg-[#f8fafc]">
      <div className="pl-[50px] pt-[40px] pr-[50px] h-max ">
        <img src={venturelogo} alt="" width={195} />
      </div>
      <Row gutter={0} justify="center" className="h-full flex items-center">
        <Col lg={14} sm={24} xs={24} md={24} className="bg-transparent">
          <div>{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthSidebar;
