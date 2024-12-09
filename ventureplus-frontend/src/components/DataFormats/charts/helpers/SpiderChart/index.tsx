import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  ColType,
  FormContentT,
  initialColors,
  initialData,
} from "../initialChartData";
import SpiderChartModal from "./helpers/SpiderChartModal";

const SpiderChartComponent = ({
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
  index: any;
}) => {
  const [form] = useForm();

  const [dataSource, setDataSource] = useState<any[]>([]);
  const [columns, setColumns] = useState<ColType[]>([]);
  const [colors, setColors] = useState<string[]>(initialColors);
  // formContent is for chart styling
  const [formContent, setFormContent] = useState<FormContentT>(
    apiData.data.chartStyles
  );
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
  }, [apiData.data.chartStyles]);
  // columns are initialized here
  useEffect(() => {
    const newColumn: ColType[] = [];
    let count = -1;
    if (dataSource?.length > 0) {
      const keys = Object.keys(dataSource[0]);
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
      setColumns(newColumn);
    }
  }, [dataSource]);

  // colors are added here to formContent
  useEffect(() => {
    if (dataSource?.length > 0) {
      const keys = Object.keys(dataSource[0]);
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
    }

    form.setFieldsValue({ ...apiData.data.chartStyles });
  }, [dataSource]);

  function onSave(saveDataSource: any, saveFormContent: any) {
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
        <SpiderChartModal
          open={open}
          onClose={toggle}
          tableColumns={columns}
          setTableColumns={setColumns}
          dataSource={dataSource}
          setDataSource={setDataSource}
          form={form}
          formContent={formContent}
          setFormContent={setFormContent}
          onSave={onSave}
        />
      )}
      <div className="relative w-full mb-3 h-[350px]">
        {/* <div className="absolute right-2 top-2 !cursor-pointer z-10">
          <img src={verticalDotsIcon} alt="" onClick={() => toggle()} />
        </div> */}
        <ResponsiveContainer width="100%" height="100%">
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
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={dataSource}
                width={800}
                height={260}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis
                  domain={[
                    Number(formContent.minimum),
                    Number(formContent.maximum),
                  ]}
                />
                <Tooltip />
                {formContent.showLegend && (
                  <Legend
                    align={formContent.align}
                    verticalAlign={formContent.verticalAlignment}
                    layout={formContent.layout}
                  />
                )}

                {columns.map(
                  (column, i) =>
                    column.key !== "name" && (
                      <Radar
                        dataKey={column.key}
                        stroke={formContent.colors[column.key]}
                        fill={formContent.colors[column.key]}
                        fillOpacity={0.5}
                      />
                    )
                )}
              </RadarChart>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SpiderChartComponent;
