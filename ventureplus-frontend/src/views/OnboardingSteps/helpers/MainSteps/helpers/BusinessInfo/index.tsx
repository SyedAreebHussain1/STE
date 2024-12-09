import { Col, Input, Row } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import OnBoardingCountryCity from "./helpers/OnBoardingCountryCity";
import OnBoardingIndustry from "./helpers/OnBoardingIndustry";
import OnBoardingBusinessStage from "./helpers/OnBoardingBusinessStage";
import OnBoardingBusinessName from "./helpers/OnBoardingBusinessName";

const BusinessInfo = ({ state, setState }: any) => {
  const [customIndustry, setCustomIndustry] = useState(false);
  return (
    <div>
      <Row>
        <Col sm={24} md={24} lg={24} className="mt-6 w-full">
          <span className="font-medium !mb-2 text-[.9375rem] text-[#212838]">
            Can you describe what your business does or aims to do?
          </span>
          <TextArea
            placeholder="Enter here"
            className="rounded-[8px] mt-2"
            name="businessDescription"
            value={state?.businessDescription}
            onChange={(e) =>
              setState({ ...state, businessDescription: e.target.value })
            }
            autoSize={{ minRows: 3, maxRows: 5 }}
            style={{ padding: "10px, 14px, 10px, 14px" }}
          />
        </Col>
        <Col sm={24} md={24} lg={24} className=" mt-6 w-full">
          <span className="font-medium !mb-2 text-[.9375rem] text-[#212838]">
            Business Name
          </span>
          <OnBoardingBusinessName state={state} setState={setState} />
        </Col>
        <Col sm={24} md={24} lg={24} className="mt-5 w-full">
          <span className="font-medium !mb-2 text-[.9375rem] text-[#212838]">
            Industry
          </span>
          <OnBoardingIndustry
            setState={setState}
            state={state}
            custom={customIndustry}
            setCustom={setCustomIndustry}
          />
        </Col>
        <Col sm={24} md={24} lg={24} className="mt-2 w-full ">
          <OnBoardingCountryCity setState={setState} state={state} />
        </Col>
        <Col sm={24} md={24} lg={24} className="mt-5 w-full">
          <OnBoardingBusinessStage setState={setState} state={state} />
        </Col>
      </Row>
    </div>
  );
};

export default BusinessInfo;
