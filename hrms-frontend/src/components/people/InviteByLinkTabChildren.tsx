import { Button, Col, Divider, Row } from "antd";
import generateIcon from "../../assets/generateIcon.svg";
import TextInput from "../../helpers/inputs/TextInput";

type Props = {};

const InviteByLinkTabChildren = (props: Props) => {
  return (
    <div>
      <div>
        <p>
          Share this link with team members to invite them to your organization.
          Visit our <span className="text-primary">help article</span> to learn
          more about signing up via invitation link.
        </p>
      </div>
      <Divider />
      <div>
        <Row gutter={16}>
          <Col xs={20} lg={21} sm={21} md={21}>
            <TextInput className="w-full h-[40px]" />
          </Col>
          <Col xs={3} lg={3} sm={3} md={3}>
            <Button className="h-[40px] dark:bg-dark-primary bg-light-primary text-[#fff]">
              Copy
            </Button>
          </Col>
        </Row>
        <div className="mt-[15px]">
          <span className="text-primary flex cursor-pointer text-[.9rem] font-medium">
            <img src={generateIcon} alt="" /> &nbsp; Generate new link
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="https://web.jibble.io/img/empty-state-add-members.e82362fb.svg"
          alt=""
        />
      </div>
    </div>
  );
};
export default InviteByLinkTabChildren;
