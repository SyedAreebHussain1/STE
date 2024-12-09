import {
  areaChartIcon,
  barChartIcon,
  chartsIcon,
  columnChartIcon,
  diagramsIcon,
  donutChartIcon,
  hierarchyIcon,
  localMapIcon,
  mapIcon,
  nationalIcon,
  numberedListIcon,
  othersIcon,
  paragraphIcon,
  pieChartIcon,
  semiCircleChartIcon,
  spiderChartIcon,
  subTitleIcon,
  tableIcon,
  textIcon,
  venIcon,
  worldMapIcon,
} from "../../../assets/viewPlanAssets";
import { FormContentT } from "../../../components/DataFormats/charts/helpers/initialChartData";

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

const menuItemsData: MenuItemsDataI[] = [
  {
    id: 1,
    title: "Charts",
    description: "Add custom headings, sections of texts and  lists.",
    icon: chartsIcon,
    childMenuItems: [
      {
        id: 1,
        title: "Bar",
        type: "Bar",
        description: "Great for comparing data across different categories",
        icon: barChartIcon,
        height: "350px",
        data: {
          chartData: initialData,
          chartStyles: initialChartStyles,
        },
      },
      {
        id: 2,
        title: "Area",
        type: "Area",
        description: "Perfect for visualizing volume and trends over time",
        icon: areaChartIcon,
        height: "350px",
        data: {
          chartData: initialData,
          chartStyles: initialChartStyles,
        },
      },
      {
        id: 3,
        title: "Pie",
        type: "Pie",
        description: "Excellent for showing proportions of a whole",
        icon: pieChartIcon,
        height: "350px",
        data: {
          chartData: data,
          chartStyles: initialChartStyles,
        },
      },
      {
        id: 4,
        title: "Donut",
        type: "Donut",

        description: "A variation of pie chart with a blank centre",
        icon: donutChartIcon,
        height: "350px",
        data: {
          chartData: data,
          chartStyles: initialChartStyles,
        },
      },
      {
        id: 5,
        title: "Semi Circle",
        type: "SemiCircle",

        description: "A variation of pie chart with a blank centre",
        icon: semiCircleChartIcon,
        height: "350px",
        data: {
          chartData: data,
          chartStyles: initialChartStyles,
        },
      },
      {
        id: 6,
        title: "Spider",
        type: "Spider",

        description: "A variation of pie chart with a blank centre",
        icon: spiderChartIcon,
        height: "350px",
        data: {
          chartData: initialData,
          chartStyles: initialChartStyles,
        },
      },
    ],
  },
  {
    id: 2,
    title: "Titles and Text",

    description: "Add custom headings, sections of texts and  lists.",
    icon: textIcon,
    childMenuItems: [
      {
        id: 1,
        title: "Sub Title",
        type: "Sub Title",
        description: "Use sub-headings to define sub-sections of your plan",
        icon: subTitleIcon,
        data: { heading: "Heading" },
      },
      {
        id: 2,
        title: "Paragraph",
        type: "Paragraph",
        description: "A block of text that could include lists or tables",
        icon: paragraphIcon,
        data: { paragraph: "some Content" },
      },
      {
        id: 3,
        title: "Table",
        type: "Table",

        description: "Add custom table",
        icon: tableIcon,
        data: {
          table: [
            {
              Product: "Digital Books",
              "Retail Price": "₨19000",
              "Wholesale Price": "₨17000",
              "Cost Price": "₨15000",
              Subscription: "₨500/month with ₨50 discount",
            },
            {
              Product: "Printed Books",
              "Retail Price": "₨32000",
              "Wholesale Price": "₨30000",
              "Cost Price": "₨25000",
              Subscription: "₨1000/month with ₨100 discount",
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    title: "Diagrams",

    description: "Add custom headings, sections of texts and  lists.",
    icon: diagramsIcon,
    childMenuItems: [
      {
        id: 1,
        title: "Hierarchy",
        type: "Hierarchy",

        description:
          "Ideal for showing relationships in a tree-like structure ",
        icon: hierarchyIcon,
        data: {},
      },
      {
        id: 2,
        title: "Venn",
        type: "Venn",

        description:
          "Perfect for illustrating overlap between different data sets ",
        icon: venIcon,
        data: {
          diagram: [
            {
              sets: ["Good"],
              value: 2,
              name: "Good",
            },
            {
              sets: ["Fast"],
              value: 2,
              name: "Fast",
            },
            {
              sets: ["Cheap"],
              value: 2,
              name: "Cheap",
            },
            {
              sets: ["Fast", "Good"],
              value: 1,
              name: "More expensive",
            },
            {
              sets: ["Cheap", "Good"],
              value: 1,
              name: "Will take time to deliver",
            },
            {
              sets: ["Cheap", "Fast"],
              value: 1,
              name: "Not the best quality",
            },
            {
              sets: ["Cheap", "Fast", "Good"],
              value: 1,
              name: "They're dreaming",
            },
          ],
        },
      },
    ],
  },
  {
    id: 5,
    title: "Others",
    description: "Add custom headings, sections of texts and  lists.",
    icon: othersIcon,
    childMenuItems: [
      {
        id: 1,
        title: "Numbered List",
        type: "Numbered List",

        description: "A numbered list in a single column or multiple columns",
        icon: numberedListIcon,
        data: {
          table: [
            {
              heading: "Number 1",
              lists: ["List 1", "List 2", "List 3"],
            },
            {
              heading: "Number 2",
              lists: ["List 1", "List 2", "List 3"],
            },
          ],
        },
      },
      {
        id: 2,
        title: "Bullet List",
        type: "Bullet List",

        description:
          "A bullet pointed list in a single column or multiple columns",
        icon: areaChartIcon,
        data: {
          table: [
            {
              heading: "Number 1",
              lists: ["List 1", "List 2", "List 3"],
            },
            {
              heading: "Number 2",
              lists: ["List 1", "List 2", "List 3"],
            },
          ],
        },
      },
      {
        id: 3,
        title: "Image List",
        type: "Image List",

        description: "Multiple images displayed in a grid or side-by-side",
        icon: barChartIcon,
        data: {
          images: [
            {
              caption: "Caption 1",
              file: null,
              url: "",
            },
            {
              caption: "Caption 2",
              file: null,
              url: "",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Single Image",
        type: "Single Image",

        description: "Upload a single image",
        icon: areaChartIcon,
        data: {
          images: [
            {
              caption: "Caption 1",
              file: null,
              url: "",
            },
          ],
        },
      },
    ],
  },
];

export default menuItemsData;
