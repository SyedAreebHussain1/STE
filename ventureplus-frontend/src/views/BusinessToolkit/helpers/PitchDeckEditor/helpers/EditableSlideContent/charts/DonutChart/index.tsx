import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import RoundedButton from "../../../../../../../../components/button/RoundedButton";
import useToggle from "../../../../../../../../hooks/useToggle";
import ChartModal from "./helpers/ChartModal";
import {
  FormContentT,
  initialColors,
} from "../../../../../../../../components/DataFormats/charts/helpers/initialChartData";
import {
  disableDirections,
  enableDirections,
} from "../../Temp1EditableComponents/SlideDualList";

const DonutChartComponent = ({
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
  const [colors, setColors] = useState<string[]>(initialColors);
  const [showEditButton, setShowEditButton] = useState(false);

  const [formContent, setFormContent] = useState<FormContentT>({
    ...apiData.data.chartStyles,
  });

  useEffect(() => {
    if (apiData.data.chartData) {
      setDataSource([...apiData.data.chartData]);
    }
  }, [apiData.data.chartData]);

  useEffect(() => {
    if (apiData.data.chartStyles) {
      setFormContent({
        ...apiData.data.chartStyles,
      });
    }
    form.setFieldsValue({ ...apiData.data.chartStyles });
  }, [apiData.data.chartStyles]);

  useEffect(() => {
    const colorsKeys = formContent?.colors
      ? Object.keys(formContent.colors)
      : [];
    if (colorsKeys?.length <= 0) {
      setFormContent((st) => ({
        ...st,
        colors: {},
      }));

      dataSource.map((item, i) => {
        setFormContent((st) => ({
          ...st,
          colors: {
            ...st.colors,
            [item.name]: colors[i],
          },
        }));
      });
    }
  }, [dataSource]);

  const onSave = (data: any, formContent: any) => {
    if (setSlideContent) {
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
                          chartStyles: formContent,
                        },
                      }
                    : innerItem
                ),
              }
            : item
        )
      );
    }
    toggle();
  };

  return (
    <>
      {open && (
        <ChartModal
          open={open}
          toggle={toggle}
          dataSource={dataSource}
          form={form}
          formContent={formContent}
          onSave={onSave}
          setDataSource={setDataSource}
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
        onDragStop={(e, data) => {
          onDrag && onDrag(e, data, index);
        }}
        onResizeStop={(e, data, ref, delta, position) => {
          onResize && onResize(e, data, ref, delta, position, index);
        }}
        minWidth={minWidth}
        minHeight={minHeight}
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
          <ResponsiveContainer width="100%" height="100%">
            <div className="flex flex-col w-full h-full justify-end items-center p-2">
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
                <PieChart
                  className={`${viewOnly ? "cursor-default" : "!cursor-move"}`}
                  width={apiData?.dimensions?.width}
                  height={apiData?.dimensions?.height - 40}
                >
                  {formContent.showLegend && (
                    <Legend
                      align={formContent.align}
                      verticalAlign={formContent.verticalAlignment}
                      layout={formContent.layout}
                    />
                  )}
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={dataSource}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    label
                  >
                    {dataSource.map((entry: any, index: number) => (
                      <Cell
                        key={entry.key}
                        fill={formContent.colors[entry.name]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </div>
          </ResponsiveContainer>
        </div>
      </Rnd>
    </>
  );
};

export default DonutChartComponent;
