import { Col } from "antd";
import SectionContainer from "../../SectionContainer";
import TextInput from "../../../../../helpers/inputs/TextInput";
import CopyImg from "./../../../../../assets/copy-icon.svg";
import { errorMessage, successMessage } from "../../../../../utils/message";
type Props = {};

const PermalinksSection = (props: Props) => {
  return (
    <SectionContainer
      title="Social Media Links"
      subtitle="Provide your social media links"
    >
      <Col xs={8}>
        <label
          htmlFor="youtube1"
          className="text-[#667085] text-base font-medium"
        >
          Video link 1 (youtube)
        </label>
        <TextInput
          rules={[{ required: false }]}
          placeholder="Video link 1 (youtube)"
          suffix={<img src={CopyImg} className="cursor-pointer" />}
          name="youtube1"
          id="youtube1"
          className="h-[48px] mt-2"
        />
      </Col>
      <Col xs={8}>
        <label
          htmlFor="youtube2"
          className="text-[#667085] text-base font-medium"
        >
          Video link 2 (youtube)
        </label>
        <TextInput
          rules={[{ required: false }]}
          placeholder="Video link 2 (youtube)"
          suffix={<img src={CopyImg} className="cursor-pointer" />}
          name="youtube2"
          id="youtube2"
          className="h-[48px] mt-2"
        />
      </Col>
      <Col xs={8}>
        <label
          htmlFor="youtube3"
          className="text-[#667085] text-base font-medium"
        >
          Video link 3 (youtube)
        </label>
        <TextInput
          rules={[{ required: false }]}
          placeholder="Video link 3 (youtube)"
          suffix={<img src={CopyImg} className="cursor-pointer" />}
          name="youtube3"
          id="youtube3"
          className="h-[48px] mt-2"
        />
      </Col>

      <Col xs={8}>
        <label
          htmlFor="facebook"
          className="text-[#667085] text-base font-medium"
        >
          Facebook
        </label>
        <TextInput
          rules={[{ required: false }]}
          placeholder="Facebook Link"
          suffix={<img src={CopyImg} className="cursor-pointer" />}
          name="facebook"
          id="facebook"
          className="h-[48px] mt-2"
        />
      </Col>
      <Col xs={8}>
        <label
          htmlFor="linkedin"
          className="text-[#667085] text-base font-medium"
        >
          Linkedin
        </label>
        <TextInput
          rules={[{ required: false }]}
          placeholder="Linkedin Link"
          suffix={<img src={CopyImg} className="cursor-pointer" />}
          name="linkedin"
          id="linkedin"
          className="h-[48px] mt-2"
        />
      </Col>
      <Col xs={8}>
        <label
          htmlFor="instagram"
          className="text-[#667085] text-base font-medium"
        >
          Instagram
        </label>
        <TextInput
          rules={[{ required: false }]}
          placeholder="Instagram Link"
          suffix={<img src={CopyImg} className="cursor-pointer" />}
          name="instagram"
          id="instagram"
          className="h-[48px] mt-2"
        />{" "}
      </Col>
    </SectionContainer>
  );
};

export default PermalinksSection;
