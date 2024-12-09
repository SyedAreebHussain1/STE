import {
  HorizontalAlignmentType,
  VerticalAlignmentType,
} from "recharts/types/component/DefaultLegendContent";
import { LayoutType } from "recharts/types/util/types";

export type ColType = { title: string; key: string; color: string };
export type SeriesType = "bar" | "area" | "scatter" | "line";

export type FormContentT = {
  align: HorizontalAlignmentType;
  layout: LayoutType;
  maximum?: string | undefined;
  minimum?: string | undefined;
  subtitle: string;
  title: string;
  xLabel?: string;
  yLabel?: string;
  verticalAlignment: VerticalAlignmentType;
  stackId?: undefined | string;
  showLegend: boolean;
  colors: any;
  series?: any;
};

export const initialColors: string[] = [
  "#8884d8",
  "#82ca9d",
  "#5baad0",
  "#FFA7B9",
  "#FBAE2A",
  "#CCE1E2",
  "#99C3C6",
  "#67A6A9",
  "#34888D",
  "#016A70",
  "#01555A",
  "#014043",
];
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
