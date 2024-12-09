import React, { PureComponent, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useForm } from "antd/es/form/Form";
import { ColType, FormContentT, initialColors } from "../initialChartData";
import SemiCircleChartModal from "./helpers/SemiCircleChartModal";
const SemiCircleChartComponent = ({
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
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [columns, setColumns] = useState<ColType[]>([]);
  const [colors, setColors] = useState<string[]>(initialColors);

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
  }, [apiData.data.chartStyles]);

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
            color: colors[count],
          });
          count++;
        }
      });
      setColumns(newColumn);
    }
  }, [dataSource]);

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
        <SemiCircleChartModal
          open={open}
          onClose={toggle}
          tableColumns={columns}
          dataSource={dataSource}
          setDataSource={setDataSource}
          form={form}
          onSave={onSave}
          formContent={formContent}
          setFormContent={setFormContent}
        />
      )}
      <div className="relative w-full mb-2 h-[350px]">
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
              <PieChart width={800} height={240}>
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
                  cy="70%"
                  outerRadius={80}
                  startAngle={0}
                  endAngle={180}
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
    </>
  );
};

export default SemiCircleChartComponent;
