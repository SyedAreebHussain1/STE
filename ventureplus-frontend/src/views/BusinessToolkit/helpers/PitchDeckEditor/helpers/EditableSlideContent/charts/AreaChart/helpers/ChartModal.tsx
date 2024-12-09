import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import AreaChartModalForm from "../../../../../../../../../components/DataFormats/charts/helpers/AreaChart/helpers/AreaChartModalForm";
import AreaChartPreview from "../../../../../../../../../components/DataFormats/charts/helpers/AreaChart/helpers/AreaChartPreview";
import {
    ColType,
    FormContentT,
    initialColors,
} from "../../../../../../../../../components/DataFormats/charts/helpers/initialChartData";
import EditableTable from "../../../../../../../../../components/DataFormats/ReusableComponents/EditableTable";

interface Props {
  open?: any | undefined;
  onClose?: any;
  dataSource: any[];
  tableColumns: ColType[];
  setTableColumns: React.Dispatch<React.SetStateAction<ColType[]>>;
  setDataSource: React.Dispatch<React.SetStateAction<any[]>>;
  onSave: (data: any, formContent: any) => void;

  form?: any;
  formContent: FormContentT;
  setFormContent: React.Dispatch<React.SetStateAction<FormContentT>>;
}

type OnFinishType = {
  title: string;
  subtitle: string;
};

const ChartModal = ({
  open,
  onClose,
  tableColumns,
  setTableColumns,
  dataSource,
  setDataSource,
  form,
  onSave,
  formContent,
  setFormContent,
}: Props) => {
  const [columns, setColumns] = useState<ColType[]>([...tableColumns]);
  const [modalDataSource, SetModalDataSource] = useState([...dataSource]);
  const [modalFormContent, setModalFormContent] = useState({ ...formContent });
  const [colors, setColors] = useState<string[]>(initialColors);

  useEffect(() => {
    const newColumn: ColType[] = [];
    let count = -1;
    if (modalDataSource[0]) {
      const keys = Object.keys(modalDataSource?.[0]);
      keys.map((item, i) => {
        if (item !== "key" && item !== "color") {
          newColumn.push({
            title: item.toUpperCase(),
            key: item,
            color: modalFormContent?.colors[item] || colors[count],
          });
          count++;
        }
      });
    }
    setColumns(newColumn);
  }, [modalDataSource]);

  useEffect(() => {
    if (modalDataSource[0]) {
      const keys = Object.keys(modalDataSource?.[0]);
      setModalFormContent((st) => ({
        ...st,
        colors: {},
        series: {},
      }));

      // adding colors on column update
      keys.map((item, i) => {
        if (item !== "key" && item !== "name") {
          setModalFormContent((st) => ({
            ...st,
            colors: {
              ...st.colors,
              [item]: modalFormContent?.colors[item] || colors[i - 2],
            },
          }));
        }
      });

      // adding series on column update
      keys.map((item, i) => {
        if (item !== "key" && item !== "name") {
          setModalFormContent((st) => ({
            ...st,
            series: {
              ...st.series,
              [item]: modalFormContent?.series[item]
                ? modalFormContent?.series[item]
                : "area",
            },
          }));
        }
      });
    }
  }, [columns]);

  const onFinish = (values: OnFinishType) => {
    setTableColumns([...columns]);
    onSave([...modalDataSource], { ...modalFormContent });
  };

  return (
    <Modal
      title={"Areachart Preview"}
      centered
      width={"1000px"}
      height={"700px"}
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
      className="relative z-50"
    >
      <div className="w-full h-full flex no-padding-modal">
        <div className="flex flex-col gap-2 min-h-[450px] w-[70%] p-3">
          {/* chart preview */}
          <div className="h-[260px] p-1">
            <AreaChartPreview
              data={modalDataSource}
              tableColumns={columns}
              formContent={modalFormContent}
            />
          </div>
          {/* table */}
          <EditableTable
            columns={columns}
            dataSource={modalDataSource}
            setDataSource={SetModalDataSource}
          />
        </div>
        {/* Form */}
        <div className="bg-primary flex flex-col p-3 gap-2 rounded-md w-[30%] h-[550px] overflow-y-auto custom-scrollbar">
          <h1 className="heading-xs font-medium text-[#fff]">Chart Editor</h1>
          <hr className="border-[#fff]" />
          <AreaChartModalForm 
            form={form}
            onFinish={onFinish}
            formContent={modalFormContent}
            setFormContent={setModalFormContent}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ChartModal;
