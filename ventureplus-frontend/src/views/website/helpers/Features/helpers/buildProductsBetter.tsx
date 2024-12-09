import { useState } from "react";
import {
  FeatureImage,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
} from "../../../../../assets/website";

const BuildProductsBetter = () => {
  return (
    <div className=" flex-col items-center relative mt-[50px] hidden md:flex">
      <div className="flex flex-col items-center gap-[20px] ">
        <h1 className="  text-[#01B847] text-[18px] font-medium">FEATURES</h1>
        <div className="flex flex-col items-center w-[600px] mt-[10px] ">
          <h1 className="heading-xl  font-bold w-full text-center ">
            A look at our features
          </h1>
          <p className="text-[#4A5366] mt-[20px] heading-xs text-center mb-3">
            From navigating the complexities of business planning to a suite of
            entrepreneur tools we’re here to help you make informed decisions,
            mitigate risks, and steer your venture to success.
          </p>
        </div>
      </div>
      <SectionForBuildProductsBetter
        num="01"
        heading="AI Powered Idea Validation"
        para="Venture Plus leverages advanced AI technologies, including Gemini Pro and our proprietary LLM model, to provide thorough validation of business ideas."
        image={Feature1}
        hoverContent={[
          {
            heading: "Real-Time Industry Data Gathering",
            para: "Our tool continuously gathers and analyzes real-time industry data, market trends, and competitor information so that your idea can be validated thoroughly.",
          },
          {
            heading: "Venture Plus Idea Scoring:",
            para: "Venture Plus will implement a scoring system to evaluate the viability of business ideas based on several key factors. Each idea will be assessed on a scale of 1 to 100, with scores derived from the following criteria:",
            list: [
              "Problem Identification: Clarity and significance of the problem the business aims to solve.",
              "Solution Fit: How well the proposed solution addresses the identified problem.",
              "Market Assessment: Evaluation of market size, growth potential, and target audience.",
              "Unique Value Proposition: Distinctiveness of the offering compared to competitors.",
              "Financial Viability: Feasibility of the business model and financial projections.",
              "Scalability: Potential for growth and expansion in the market.",
            ],
          },
        ]}
      />
      <SectionForBuildProductsBetter
        num="02"
        heading="Personalized Financial Projections"
        para="Create and analyze your business’s revenue streams, expenses, and growth projections, accessing real-time market data and industry benchmarks for accurate financial forecasts."
        image={Feature2}
        hoverContent={[
          {
            heading:
              "Analyze Revenue Streams, Expenses, and Growth Projections",
            para: "Utilize advanced analytics to dissect various revenue streams and categorize expenses. By understanding where income is generated and how costs are incurred, users can create accurate growth projections. This analysis helps identify the most profitable avenues and areas needing cost control.",
          },
          {
            heading: "Access Real-Time Market Data and Industry Benchmarks",
            para: "Integrate real-time market data and industry benchmarks to enhance the accuracy of financial forecasts. By comparing against industry standards, users can ensure their projections are realistic and grounded in current market conditions. This feature allows for timely adjustments based on emerging trends and economic shifts.",
          },
          {
            heading: "Identify Potential Risks and Opportunities",
            para: "Employ AI-driven insights to pinpoint potential risks and opportunities inherent in the business model. By analyzing external factors such as market volatility, regulatory changes, and competitive dynamics, Venture Plus helps users prepare for uncertainties and capitalize on favorable conditions.",
          },
          {
            heading: "Generate Detailed Financial Statements",
            para: "Automatically generate comprehensive financial statements, including:",
            list: [
              "Income Statements: Track revenue, expenses, and profitability over specific periods, providing insights into operational efficiency.",
              "Balance Sheets: Offer a snapshot of the company’s financial position at a given time, detailing assets, liabilities, and equity.",
            ],
          },
        ]}
      />
      <SectionForBuildProductsBetter
        num="03"
        heading="Automated Competitor Analysis"
        para="Identify and analyze relevant competitors based on your business idea and location, gathering information on their products, pricing, marketing strategies, and customer reviews. Highlight key differentiators and potential areas for improvement compared to your competitors."
        image={Feature4}
        hoverContent={[
          {
            heading: "Identifying Relevant Competitors",
            para: "Identify and analyze competitors that are pertinent to your business idea and geographic location. This process involves gathering essential information that will inform your strategy and positioning in the market.",
          },
          {
            heading: "Gathering Competitor Information",
            para: "Collect comprehensive data on competitors' products, pricing strategies, marketing approaches, and customer reviews. This information is crucial for understanding how competitors operate and what makes them successful or vulnerable.",
          },
          {
            heading: "Highlighting Key Differentiators",
            para: "Analyze and highlight the key differentiators that set your business apart from competitors. Understanding these unique aspects will help you articulate your value proposition more effectively.",
          },
        ]}
      />
      <SectionForBuildProductsBetter
        num="04"
        heading="Real Time Data Integration"
        para="Continuously monitor and integrate relevant industry data, market trends, and economic indicators, ensuring you have up-to-date information. Receive real-time updates and notifications on significant changes or opportunities, allowing you to quickly adapt to shifting market conditions and capitalize on new opportunities."
        image={Feature3}
        hoverContent={[
          {
            heading: "Continuous Monitoring of Industry Data",
            para: "Implement systems to continuously monitor industry data, ensuring that you are always informed about the latest trends and economic shifts. This proactive approach allows for timely adjustments in your business strategy.",
          },
          {
            heading: "Integration of Market Trends",
            para: "Integrate relevant market trends into your planning process. By understanding current market dynamics, you can make informed decisions that align with consumer behavior and preferences.",
          },
          {
            heading: "Data Pattern Analysis",
            para: "Analyze data patterns to identify emerging trends. This analytical capability helps you forecast potential market shifts and adapt your strategies accordingly, ensuring you remain competitive.",
          },
          {
            heading: "Adapting to Shifting Market Conditions",
            para: "Quickly adapt your business strategies to respond to shifting market conditions. This agility is crucial for maintaining a competitive edge and seizing new opportunities as they arise.",
          },
          {
            heading: "Capitalizing on New Opportunities",
            para: "By staying informed and agile, you can capitalize on new opportunities that may not be immediately apparent. This proactive approach to business planning enhances your chances of success in a dynamic marketplace.",
          },
        ]}
      />
    </div>
  );
};
export default BuildProductsBetter;
type sectionProps = {
  heading: string;
  para: string;
  num: string;
  image: string;
  hoverContent: HoverContentProps[];
};
type HoverContentProps = {
  heading: string;
  para?: string;
  list?: string[];
};
const SectionForBuildProductsBetter = ({
  heading,
  para,
  num,
  image,
  hoverContent,
}: sectionProps) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="FeatureSection  w-full mt-[20px] "
      onMouseEnter={() => setHover((pre) => !pre)}
      onMouseLeave={() => setHover((pre) => !pre)}
    >
      <div className="px-[50px] w-full  h-full">
        <div className="w-full flex h-full bg-[#F2F4F8] p-[14px] rounded-xl gap-[10px] overflow-hidden FeatureSectionDiv">
          <div
            className={` h-full rounded-2xl FeatureSectionImage w-full `}
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* <img src={FeatureImage} className=" h-full" /> */}
          </div>

          <div
            className={`FeatureSectionContent h-full bg-[#212838] rounded-xl overflow-hidden p-[60px] ${hover ? "py-[30px]" : ""
              }`}
          >
            <div
              className={`p-[20px]  FeatureSectionContentWithOutHover text-[#F8FAFC]`}
            >
              <h1 className="heading-s font-bold ">{num}</h1>
              <h1 className="heading-s font-bold">{heading}</h1>
              <p className="mt-[60px] heading-xs text-[#E3E7EF]">{para}</p>
            </div>
            <div className="FeatureSectionContentWithHover">
              <h1 className="heading-s font-bold text-[#F8FAFC]">{heading}</h1>
              <div className="flex flex-col flex-wrap gap-[20px] text-[18px] max-h-[80vh] w-full">
                {hoverContent?.length > 0 &&
                  hoverContent?.map((item: any, index: number) => (
                    <div key={index} className="xs:w-full lg:w-[48%]">
                      <h1 className=" font-bold text-[#E3E7EF] mt-[20px] mb-[5px]">
                        {index + 1}. {item?.heading}
                      </h1>
                      {item?.para && (
                        <p className="font-medium text-[#E3E7EF] mt-[10px] mb-[5px]">
                          {item?.para}
                        </p>
                      )}

                      <ul className="text-[#CDD4DF] font-normal">
                        {item?.list?.length > 0 &&
                          item?.list?.map(
                            (innerItem: any, innnerIndex: number) => (
                              <li key={innnerIndex}>{innerItem}</li>
                            )
                          )}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
