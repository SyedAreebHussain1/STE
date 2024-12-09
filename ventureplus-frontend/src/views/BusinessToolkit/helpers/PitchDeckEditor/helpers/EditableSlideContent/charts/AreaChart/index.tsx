import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Label,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import RoundedButton from "../../../../../../../../components/button/RoundedButton";
import {
  ColType,
  FormContentT,
  initialColors,
} from "../../../../../../../../components/DataFormats/charts/helpers/initialChartData";
import useToggle from "../../../../../../../../hooks/useToggle";
import ChartModal from "./helpers/ChartModal";
import {
  disableDirections,
  enableDirections,
} from "../../Temp1EditableComponents/SlideDualList";

const AreaChartComponent = ({
  apiData,
  slideNo,
  index,
  setSlideContent,
  onDrag,
  onResize,
  minWidth,
  minHeight,
  viewOnly,
}: {
  apiData: any;
  setSlideContent?: any;
  slideNo?: string;
  index: number;
  onResize?: (
    e: any,
    data: any,
    ref: any,
    delta: any,
    position: any,
    index: number
  ) => void;
  onDrag?: (e: any, data: any, index: number) => void;
  minWidth?: number;
  minHeight?: number;
  viewOnly?: boolean;
}) => {
  const [form] = useForm();
  const [open, toggle] = useToggle();
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [columns, setColumns] = useState<ColType[]>([]);
  const [colors, setColors] = useState<string[]>(initialColors);
  const [showEditButton, setShowEditButton] = useState(false);

  const [formContent, setFormContent] = useState<FormContentT>({
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
  });

  useEffect(() => {
    if (apiData.data.chartData) {
      setDataSource([...apiData.data.chartData]);
    }

    if (apiData.data.chartStyles) {
      setFormContent({
        ...apiData.data.chartStyles,
      });
    }
  }, [apiData]);

  useEffect(() => {
    const newColumn: ColType[] = [];
    let count = -1;
    if (dataSource?.[0]) {
      const keys = Object.keys(dataSource?.[0]);
      keys.map((item, i) => {
        if (item !== "key" && item !== "color") {
          newColumn.push({
            title: item.toUpperCase(),
            key: item,
            color: apiData.data.chartStyles?.colors[item] || colors[count],
          });
          count++;
        }
      });
    }
    setColumns(newColumn);
  }, [dataSource]);

  useEffect(() => {
    if (dataSource[0]) {
      const keys = Object.keys(dataSource?.[0]);
      const colorsKeys = apiData.data.chartStyles?.colors
        ? Object.keys(apiData.data.chartStyles.colors)
        : [];
      // adding colors
      keys.map((item, i) => {
        if (item !== "key" && item !== "name") {
          setFormContent((st) =>
            colorsKeys.includes(item)
              ? st
              : {
                  ...st,
                  colors: {
                    ...st.colors,
                    [item]: colors[i - 2],
                  },
                }
          );
        }
      });

      // adding series
      keys.map((item, i) => {
        if (item !== "key" && item !== "name") {
          setFormContent((st) => ({
            ...st,
            series: {
              ...st.series,
              [item]: formContent?.series[item]
                ? formContent?.series[item]
                : "area",
            },
          }));
        }
      });
    }
  }, []);

  useEffect(() => {
    if (dataSource[0]) {
      const keys = Object.keys(dataSource?.[0]);
      setFormContent((st) => ({
        ...st,
        colors: {},
        series: {},
      }));

      // adding colors on column update
      keys.map((item, i) => {
        if (item !== "key" && item !== "name") {
          setFormContent((st) => ({
            ...st,
            colors: {
              ...st.colors,
              [item]: apiData.data.chartStyles?.colors[item] || colors[i - 2],
            },
          }));
        }
      });
      form.setFieldsValue({ ...apiData.data.chartStyles });

      // adding series on column update
      keys.map((item, i) => {
        if (item !== "key" && item !== "name") {
          setFormContent((st) => ({
            ...st,
            series: {
              ...st.series,
              [item]: formContent?.series[item]
                ? formContent?.series[item]
                : "area",
            },
          }));
        }
      });
    }
  }, [columns]);

  function onSave(data: any, updatedFormContent: any) {
    setFormContent(updatedFormContent);
    setDataSource(data);
    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === slideNo
          ? {
              [slideNo]: item[slideNo].map((innerItem: any, i: number) =>
                i === index
                  ? {
                      ...innerItem,
                      data: {
                        chartData: data,
                        chartStyles: {
                          ...updatedFormContent,
                          series: { ...updatedFormContent.series },
                          colors: { ...updatedFormContent.colors },
                        },
                      },
                    }
                  : innerItem
              ),
            }
          : item
      )
    );

    toggle();
  }

  return (
    <>
      {open && (
        <ChartModal
          open={open}
          onClose={toggle}
          tableColumns={columns}
          setTableColumns={setColumns}
          dataSource={dataSource}
          setDataSource={setDataSource}
          form={form}
          onSave={onSave}
          formContent={formContent}
          setFormContent={setFormContent}
        />
      )}

      <Rnd
        size={{
          width: apiData?.dimensions?.width,
          height: apiData?.dimensions?.height,
        }}
        position={{
          x: apiData?.position?.x,
          y: apiData?.position?.y,
        }}
        disableDragging={viewOnly}
        enableResizing={viewOnly ? disableDirections : enableDirections}
        onDragStop={(e, data) => onDrag && onDrag(e, data, index)}
        onResizeStop={(e, data, ref, delta, position) =>
          onResize && onResize(e, data, ref, delta, position, index)
        }
        minWidth={minWidth ? minWidth : 100}
        minHeight={minHeight ? minHeight : 100}
        bounds="parent"
        className={` rounded-lg overflow-hidden p-2 ${
          !viewOnly ? "hover:border hover:border-primary" : ""
        }`}
      >
        <div
          className={`relative w-full h-full  ${
            viewOnly ? "cursor-default" : "cursor-move"
          }`}
          onMouseEnter={() => setShowEditButton(true)}
          onMouseLeave={() => setShowEditButton(false)}
        >
          {!viewOnly && showEditButton && (
            <RoundedButton
              title={"Edit"}
              xs
              bold
              className="!absolute !left-2 !top-2 z-10"
              onClick={() => toggle()}
            />
          )}
          <ResponsiveContainer
            width="100%"
            height="100%"
            className={"relative"}
          >
            <div className="flex flex-col w-full h-full justify-center items-center gap-2 p-2">
              {formContent?.title && (
                <h3 className="mx-auto text-para heading-xs">
                  {formContent?.title}
                </h3>
              )}
              {formContent?.subtitle && (
                <h3 className="mx-auto text-para body-s">
                  {formContent?.subtitle}
                </h3>
              )}
              <div>
                <ComposedChart
                  className={`${viewOnly ? "cursor-default" : "!cursor-move"}`}
                  width={apiData?.dimensions?.width}
                  height={apiData?.dimensions?.height - 60}
                  data={dataSource}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name">
                    <Label
                      value={formContent?.xLabel}
                      offset={0}
                      position="insideBottom"
                    />
                  </XAxis>
                  <YAxis
                    type="number"
                    domain={[
                      Number(formContent?.minimum),
                      Number(formContent?.maximum),
                    ]}
                    label={{
                      value: formContent?.yLabel,
                      angle: -90,
                      position: "insideBottomLeft",
                    }}
                  />
                  <Tooltip />
                  {formContent?.showLegend && (
                    <Legend
                      align={formContent?.align}
                      verticalAlign={formContent?.verticalAlignment}
                      layout={formContent?.layout}
                    />
                  )}

                  {columns.map(
                    (column, i) =>
                      column.key !== "name" &&
                      (formContent.series[column.key] === "bar" ? (
                        <Bar
                          key={column.key}
                          dataKey={column.key}
                          fill={formContent.colors[column.key]}
                          stroke={formContent.colors[column.key]}
                          stackId={formContent.stackId}
                        />
                      ) : formContent.series[column.key] === "area" ? (
                        <Area
                          key={column.key}
                          dataKey={column.key}
                          fill={formContent.colors[column.key]}
                          stroke={formContent.colors[column.key]}
                          stackId={formContent.stackId}
                        />
                      ) : (
                        <Line
                          key={column.key}
                          dataKey={column.key}
                          fill={formContent.colors[column.key]}
                          stroke={formContent.colors[column.key]}
                        />
                      ))
                  )}
                </ComposedChart>
              </div>
            </div>
          </ResponsiveContainer>
        </div>
      </Rnd>
    </>
  );
};

export default AreaChartComponent;
