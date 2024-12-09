import { Col, Row } from "antd";
import { ReactElement } from "react";
import venturelogo from "./../../../assets/venturelogo.png";
type Props = {
  children: ReactElement;
};

const AuthSidebar = ({ children }: Props) => {
  return (
    <div>
      <div className="pt-[1rem] px-[1rem]">
        <img src={venturelogo} alt="" width={300} />
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
