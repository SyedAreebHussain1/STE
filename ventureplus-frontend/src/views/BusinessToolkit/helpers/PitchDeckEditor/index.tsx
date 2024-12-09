import { useState, useRef } from "react";
import { temp1IntroImg } from "../../../../assets/PicthDeckTemplateAssets";
import RoundedButton from "../../../../components/button/RoundedButton";
import { FormContentT } from "../../../../components/DataFormats/charts/helpers/initialChartData";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import Temp1Editor from "./helpers/Temp1/Temp1Editor";
import { aiData } from "./apiData";

export type MenuItemsDataI = {
  id: number;
  title: string;
  description: string;
  icon: string;
  childMenuItems: ChildMenuItemsI[];
};

export type ChildMenuItemsI = {
  id: number;
  title: string;
  description: string;
  icon: string;
  height?: string;
  element?: any;
  data?: any;
  chartStyles?: any;
  type?: any;
};

export const initialData: any[] = [
  {
    key: "1",
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    key: "2",
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    key: "3",
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    key: "4",
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    key: "5",
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    key: "6",
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const data: any[] = [
  { key: "1", name: "Group A", value: 400 },
  { key: "2", name: "Group B", value: 300 },
  { key: "3", name: "Group C", value: 300 },
  { key: "4", name: "Group D", value: 200 },
  { key: "5", name: "Group E", value: 278 },
  { key: "6", name: "Group F", value: 189 },
];

export const initialChartStyles: FormContentT = {
  align: "center",
  layout: "horizontal",
  maximum: "10000",
  minimum: "0",
  subtitle: "",
  title: "",
  xLabel: "",
  yLabel: "",
  verticalAlignment: "bottom",
  stackId: undefined,
  showLegend: true,
  colors: {},
  series: [],
};
const ViewPlan = () => {
  const [slideContent, setSlideContent] = useState<any[]>([
    {
      slide_1: [
        {
          type: "Single Image",
          position: { x: 560, y: 0 },
          dimensions: { width: 300, height: "100%" },
          data: {
            image: temp1IntroImg,
          },
        },
        {
          type: "Paragraph",
          position: { x: 0, y: 0 },
          dimensions: { width: 500, height: 150 },
          data: {
            text: "Cig and Vapes is a company operating in the tobacco industry. We are involved in the growth, preparation for sale, shipment, advertisement, and distribution of tobacco and tobacco-related products globally.",
          },
        },
        //into-heading
        {
          type: "Static Component",
          data: null,
          position: { x: 220, y: 370 },
          dimensions: { width: 310, height: 80 },
        },
      ],
    },
    {
      slide_2: [
        {
          type: "Paragraph",
          position: { x: 400, y: 100 },
          dimensions: { width: 300, height: 200 },
          data: {
            text: "The problem we are addressing is the rising demand for high-quality tobacco products in a global market. Our solution is to provide consistently high-quality products and innovative customer solutions that meet this growing need.",
          },
        },
        {
          type: "Paragraph",
          position: { x: 20, y: 200 },
          dimensions: { width: 800, height: 150 },
          data: {
            text: "Help startups figure out what makes them special and build their brand around it. This involves learning about their competitors and target audience, then creating a clear message that sets them apart. Help startups figure out what makes them special and build their brand around it. This involves learning about their competitors and target audience, then creating a clear message that sets them apart.",
          },
        },
        //rocket image
        {
          type: "Static Component",
          position: { x: 100, y: 100 },
          dimensions: { width: 250, height: 250 },
          data: null,
        },
        //problem statement heading
        {
          type: "Static Component",
          data: null,
          position: { x: 60, y: 370 },
          dimensions: { width: 800, height: 80 },
        },
        //innovative Solution heading
        {
          type: "Static Component",
          data: null,
          position: { x: 150, y: 25 },
          dimensions: { width: 580, height: 50 },
        },
        //bulb image
        {
          type: "Static Component",
          data: null,
          position: { x: 0, y: 90 },
          dimensions: { width: 858, height: 100 },
        },
      ],
    },
    {
      slide_3: [
        {
          type: "PieChart",
          position: { x: 25, y: 170 },
          dimensions: { width: 400, height: 300 },
          data: {
            chartData: [
              { key: "1", name: "Group A", value: 400 },
              { key: "2", name: "Group B", value: 300 },
              { key: "3", name: "Group C", value: 300 },
              { key: "4", name: "Group D", value: 200 },
              { key: "5", name: "Group E", value: 278 },
              { key: "6", name: "Group F", value: 189 },
            ],
            chartStyles: {
              align: "center",
              layout: "horizontal",
              maximum: "10000",
              minimum: "0",
              subtitle: "",
              title: "",
              xLabel: "",
              yLabel: "",
              verticalAlignment: "bottom",
              stackId: undefined,
              showLegend: true,
              colors: {},
              series: [],
            },
          },
        },
        {
          type: "Paragraph",
          position: { x: 25, y: 100 },
          dimensions: { width: 800, height: 110 },
          data: {
            text: "Understanding the market size is important for us. In the US, there are about 32 million small businesses. We're aiming at industries like technology, e-commerce, and professional services, which are about 30 percent of all small businesses",
          },
        },
        {
          type: "DualList",
          position: { x: 430, y: 180 },
          dimensions: { width: 380, height: 155 },
          data: [
            {
              left: "Total Addressable Market (TAM)",
              right: "32 million",
            },
            {
              left: "Serviceable Addressable Market (SAM)",
              right: "9.6 million",
            },
            {
              left: "Serviceable Obtainable Market (SOM)",
              right: "480,000",
            },
          ],
        },
        //market opportunity heading
        {
          type: "Static Component",
          data: null,
          position: { x: 25, y: 0 },
          dimensions: { width: 480, height: 120 },
        },
      ],
    },
    {
      slide_4: [
        {
          type: "AreaChart",
          position: { x: 0, y: 80 },
          dimensions: { width: 400, height: 310 },
          data: {
            chartData: initialData,
            chartStyles: {
              align: "center",
              layout: "horizontal",
              maximum: "10000",
              minimum: "0",
              subtitle: "",
              title: "",
              xLabel: "",
              yLabel: "",
              verticalAlignment: "bottom",
              stackId: undefined,
              showLegend: true,
              colors: {},
              series: [],
            },
          },
        },
        {
          type: "Paragraph",
          position: { x: 400, y: 80 },
          dimensions: { width: 400, height: 120 },
          data: {
            text: "This matrix provides a snapshot of various success metrics for our company, including revenue growth, customer satisfaction, market share, employee retention, innovation, and brand reputation.",
          },
        },
        {
          type: "DualList",
          position: { x: 400, y: 200 },
          dimensions: { width: 450, height: 200 },
          data: [
            {
              left: "20%",
              right: "Annual revenue growth",
            },
            {
              left: "20%",
              right: "Maintain customer satisfaction ratings",
            },
            {
              left: "20%",
              right: "Maintain customer satisfaction ratings",
            },
          ],
        },
        {
          type: "DualList",
          position: { x: 0, y: 100 },
          dimensions: { width: 860, height: 320 },
          data: [
            {
              left: "2021",
              right:
                "In our first year, we successfully launched a new product/service, received positive feedback from early users, and formed partnerships with key industry players.",
            },
            {
              left: "2023",
              right:
                "We expanded into new markets, improved operational efficiency, and saw an increase in customer satisfaction.",
            },
            {
              left: "2025",
              right:
                "We secured funding for growth, refined our offerings based on customer feedback, and formed strategic partnerships.",
            },
            {
              left: "Present",
              right:
                "In our first year, we successfully launched a new product/service, received positive feedback from early users, and formed partnerships with key industry players.",
            },
          ],
        },
        //traction heading
        {
          type: "Static Component",
          data: null,
          position: { x: 350, y: 25 },
          dimensions: { width: 200, height: 60 },
        },
        //milestone heading
        {
          type: "Static Component",
          data: null,
          position: { x: 300, y: 25 },
          dimensions: { width: 250, height: 60 },
        },
      ],
    },
    {
      slide_5: [
        {
          type: "List",
          position: { x: 50, y: 50 },
          dimensions: { width: 345, height: 369 },
          data: {
            heading: "Direct Competitors",
            items: [
              "Offers similar services or products to ours.",
              "Targets the same customer base and market segments.",
              "Competes directly with us in terms of pricing, features, and positioning.",
              "Can be easily identified and recognized as a competitor by customers and industry analysts.",
            ],
          },
        },
        {
          type: "List",
          position: { x: 450, y: 50 },
          dimensions: { width: 345, height: 369 },
          data: {
            heading: "Direct Competitors",
            items: [
              "Offers similar services or products to ours.",
              "Targets the same customer base and market segments.",
              "Competes directly with us in terms of pricing, features, and positioning.",
              "Can be easily identified and recognized as a competitor by customers and industry analysts.",
            ],
          },
        },
      ],
    },
    {
      slide_6: [
        {
          type: "Paragraph",
          position: { x: 25, y: 100 },
          dimensions: { width: 800, height: 120 },
          data: {
            text: "We're your dedicated partners in propelling startups toward success.With a blend of expertise and innovation, we offer comprehensive solutions tailored to meet the specific needs of each venture we work with. From strategic guidance to brand development and digital marketing, we're committed to empowering startups to thrive in competitive markets. Our collaborative approach ensures that we're not just service providers but invested advocates for your growth. Let us be the catalyst for your startup's journey, guiding you towards achieving your goals and beyond.",
          },
        },
        //business model heading
        {
          type: "Static Component",
          data: null,
          position: { x: 250, y: 25 },
          dimensions: { width: 400, height: 60 },
        },
      ],
    },
    {
      slide_7: [
        {
          type: "Paragraph",
          position: { x: 25, y: 100 },
          dimensions: { width: 800, height: 120 },
          data: {
            text: "We're your dedicated partners in propelling startups toward success.With a blend of expertise and innovation, we offer comprehensive solutions tailored to meet the specific needs of each venture we work with. From strategic guidance to brand development and digital marketing, we're committed to empowering startups to thrive in competitive markets. Our collaborative approach ensures that we're not just service providers but invested advocates for your growth. Let us be the catalyst for your startup's journey, guiding you towards achieving your goals and beyond.",
          },
        },
        {
          type: "DualList",
          position: { x: 0, y: 100 },
          dimensions: { width: 860, height: 320 },
          data: [
            {
              left: "2021",
              right:
                "In our first year, we successfully launched a new product/service, received positive feedback from early users, and formed partnerships with key industry players.",
            },
            {
              left: "2023",
              right:
                "We expanded into new markets, improved operational efficiency, and saw an increase in customer satisfaction.",
            },
            {
              left: "2025",
              right:
                "We secured funding for growth, refined our offerings based on customer feedback, and formed strategic partnerships.",
            },
            {
              left: "Present",
              right:
                "In our first year, we successfully launched a new product/service, received positive feedback from early users, and formed partnerships with key industry players.",
            },
          ],
        },
        //cutomer aquisition strategy heading
        {
          type: "Static Component",
          data: null,
          position: { x: 100, y: 25 },
          dimensions: { width: 700, height: 60 },
        },
        //scaling strategy heading
        {
          type: "Static Component",
          data: null,
          position: { x: 250, y: 25 },
          dimensions: { width: 400, height: 60 },
        },
      ],
    },
    {
      slide_8: [
        {
          type: "Paragraph",
          position: { x: 25, y: 80 },
          dimensions: { width: 800, height: 100 },
          data: {
            text: "Understanding the market size is important for us. In the US, there are about 32 million small businesses. We're aiming at industries like technology, e-commerce, and professional services, which are about 30% of all small businesses. That means we're looking at around 9.6 million potential customers. (margins in text)",
          },
        },
        {
          type: "SemiCircleChart",
          position: { x: 25, y: 150 },
          dimensions: { width: 400, height: 300 },
          data: {
            chartData: [
              { key: "1", name: "Group A", value: 400 },
              { key: "2", name: "Group B", value: 300 },
              { key: "3", name: "Group C", value: 300 },
              { key: "4", name: "Group D", value: 200 },
              { key: "5", name: "Group E", value: 278 },
              { key: "6", name: "Group F", value: 189 },
            ],
            chartStyles: {
              align: "center",
              layout: "horizontal",
              maximum: "10000",
              minimum: "0",
              subtitle: "",
              title: "",
              xLabel: "",
              yLabel: "",
              verticalAlignment: "bottom",
              stackId: undefined,
              showLegend: true,
              colors: {},
              series: [],
            },
          },
        },
        {
          type: "PieChart",
          position: { x: 410, y: 150 },
          dimensions: { width: 400, height: 300 },
          data: {
            chartData: [
              { key: "1", name: "Group A", value: 400 },
              { key: "2", name: "Group B", value: 300 },
              { key: "3", name: "Group C", value: 300 },
              { key: "4", name: "Group D", value: 200 },
              { key: "5", name: "Group E", value: 278 },
              { key: "6", name: "Group F", value: 189 },
            ],
            chartStyles: {
              align: "center",
              layout: "horizontal",
              maximum: "10000",
              minimum: "0",
              subtitle: "",
              title: "",
              xLabel: "",
              yLabel: "",
              verticalAlignment: "bottom",
              stackId: undefined,
              showLegend: true,
              colors: {},
              series: [],
            },
          },
        },
        //financial projections heading
        {
          type: "Static Component",
          data: null,
          position: { x: 200, y: 25 },
          dimensions: { width: 500, height: 60 },
        },
      ],
    },
    {
      slide_9: [
        {
          type: "Paragraph",
          position: { x: 25, y: 100 },
          dimensions: { width: 800, height: 120 },
          data: {
            text: "Our plan for using funds generated from investors is straightforward. We'll allocate 40% towards further developing our products, ensuring they stay competitive and meet customer needs",
          },
        },
        {
          type: "DualList",
          position: { x: 25, y: 200 },
          dimensions: { width: 480, height: 200 },
          data: [
            {
              left: "Product Development",
              right: "40%",
            },
            {
              left: "Marketing and Sales",
              right: "40%",
            },
            {
              left: "Infrastructure and Operations",
              right: "40%",
            },
            {
              left: "Expansion and Growth Initiatives",
              right: "40%",
            },
          ],
        },
        //use of funds heading
        {
          type: "Static Component",
          data: null,
          position: { x: 25, y: 0 },
          dimensions: { width: 350, height: 120 },
        },
      ],
    },
    {
      slide_10: [
        {
          type: "Users",
          position: { x: 350, y: 25 },
          dimensions: { width: 430, height: 350 },
          data: [
            {
              name: "Dani Martinez",
              designation: "Chief Executive Officer",
              imgURL:
                "https://e7.pngegg.com/pngimages/416/62/png-clipart-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer.png",
            },
            {
              name: "Dani Martinez",
              designation: "Chief Executive Officer",
              imgURL:
                "https://e7.pngegg.com/pngimages/416/62/png-clipart-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer.png",
            },
            {
              name: "Dani Martinez",
              designation: "Chief Executive Officer",
              imgURL:
                "https://e7.pngegg.com/pngimages/416/62/png-clipart-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer.png",
            },
            {
              name: "Dani Martinez",
              designation: "Chief Executive Officer",
              imgURL:
                "https://e7.pngegg.com/pngimages/416/62/png-clipart-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer.png",
            },
          ],
        },

        //team heading
        {
          type: "Static Component",
          data: null,
          position: { x: 25, y: 25 },
          dimensions: { width: 150, height: 60 },
        },
        //team img
        {
          type: "Static Component",
          data: null,
          position: { x: 25, y: 80 },
          dimensions: { width: 300, height: 300 },
        },
      ],
    },
  ]);

  return (
    <PageContainer>
      {" "}
      <div>
        {" "}
        <div className="flex justify-end items-center my-4 w-full gap-3">
          <RoundedButton title={"Preview"} type="transparent" sm bold />
          <RoundedButton title={"Save"} type="primary" sm bold />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {slideContent.map((slide, i) => (
              <a href={`#Slide#${i + 1}`} key={i}>
                <div className="h-[121px] w-[261px] bg-[white] border rounded-lg flex justify-center items-center heading-s font-bold">
                  {i + 1}
                </div>
              </a>
            ))}
          </div>
          <Temp1Editor
            slideContent={slideContent}
            setSlideContent={setSlideContent}
          />
        </div>
      </div>
    </PageContainer>
  );
};
export default ViewPlan;
