import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
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
import { ColType, FormContentT, initialColors } from "../initialChartData";
import BarChartModal from "./helpers/BarChartModal";

const BarChartComponent = ({
  apiData,
  setPushObject,
  open,
  toggle,
  index,
}: {
  apiData?: any;
  setPushObject: React.Dispatch<React.SetStateAction<any[]>>;
  open: boolean;
  toggle: () => void;
  index: number;
}) => {
  const [form] = useForm();
  const [dataSource, setDataSource] = useState<any[]>(apiData.data.chartData);
  const [columns, setColumns] = useState<ColType[]>([]);
  const [colors, setColors] = useState<string[]>(initialColors);

  const [formContent, setFormContent] = useState<FormContentT>(
    apiData.data.chartStyles
  );

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
                : "bar",
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
                : "bar",
            },
          }));
        }
      });
    }
  }, [columns]);

  function onSave(saveDataSource: any, saveFormContent: any) {
    setFormContent(saveFormContent);
    setDataSource(saveDataSource);
    setPushObject((st) =>
      st.map((item, ind) =>
        ind === index
          ? item?.map((innerItem: any) => {
              return innerItem.id === apiData.id
                ? {
                    ...innerItem,
                    data: {
                      ...innerItem.data,
                      chartStyles: saveFormContent,
                      chartData: saveDataSource,
                    },
                  }
                : innerItem;
            })
          : item
      )
    );
    toggle();
  }

  return (
    <>
      {open && (
        <BarChartModal
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
      <div className="relative w-full h-[350px] mb-2">
        {/* <div className="absolute right-2 top-2 !cursor-pointer z-10">
          <img src={verticalDotsIcon} alt="" onClick={() => toggle()} />
        </div> */}
        <ResponsiveContainer width="100%" height="100%" className={"relative"}>
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
                width={800}
                height={260}
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
                    (formContent?.series[column.key] === "bar" ? (
                      <Bar
                        key={column.key}
                        dataKey={column.key}
                        fill={formContent?.colors[column.key]}
                        stroke={formContent?.colors[column.key]}
                        stackId={formContent?.stackId}
                      />
                    ) : formContent?.series[column.key] === "area" ? (
                      <Area
                        key={column.key}
                        dataKey={column.key}
                        fill={formContent?.colors[column.key]}
                        stroke={formContent?.colors[column.key]}
                        stackId={formContent?.stackId}
                      />
                    ) : (
                      <Line
                        key={column.key}
                        dataKey={column.key}
                        fill={formContent?.colors[column.key]}
                        stroke={formContent?.colors[column.key]}
                      />
                    ))
                )}
              </ComposedChart>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BarChartComponent;
