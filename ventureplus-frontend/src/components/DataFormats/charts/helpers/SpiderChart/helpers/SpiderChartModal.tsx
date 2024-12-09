import { Modal } from "antd";
import { useDispatch } from "react-redux";
import EditableTable from "../../../../ReusableComponents/EditableTable";
import { ColType, FormContentT, initialColors } from "../../initialChartData";
import SpiderChartModalForm from "./SpiderChartModalForm";
import SpiderChartPreview from "./SpiderChartPreview";
import { useEffect, useState } from "react";

interface SpiderChartModalProps {
  open?: any | undefined;
  onClose?: any;
  tableColumns: ColType[];
  setTableColumns: React.Dispatch<React.SetStateAction<ColType[]>>;
  dataSource: any[];
  setDataSource: React.Dispatch<React.SetStateAction<any[]>>;
  form: any;
  formContent: FormContentT;
  setFormContent: React.Dispatch<React.SetStateAction<FormContentT>>;
  onSave: (data: any, formContent: any) => void;
}

type OnFinishType = {
  title: string;
  subtitle: string;
};

const SpiderChartModal = ({
  open,
  onClose,
  tableColumns,
  setTableColumns,
  dataSource,
  setDataSource,
  form,
  formContent,
  onSave,
  setFormContent,
}: SpiderChartModalProps) => {
  const [columns, setColumns] = useState<ColType[]>([]);
  const [modalDataSource, SetModalDataSource] = useState([...dataSource]);
  const [modalFormContent, setModalFormContent] = useState({ ...formContent });
  const [colors, setColors] = useState<string[]>(initialColors);

  useEffect(() => {
    if (modalDataSource?.length > 0) {
      const keys = Object.keys(modalDataSource[0]);

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
    }
  }, [modalDataSource]);

  useEffect(() => {
    const newColumn: ColType[] = [];
    let count = -1;
    if (modalDataSource?.length > 0) {
      const keys = Object.keys(modalDataSource[0]);
      keys.map((item, i) => {
        if (item !== "key" && item !== "color") {
          newColumn.push({
            title: item.toUpperCase(),
            key: item,
            color: formContent?.colors[item] || colors[count],
          });
          count++;
        }
      });
      setColumns(newColumn);
    }
  }, [modalDataSource]);

  useEffect(() => {
    if (modalDataSource?.length <= 0) {
      SetModalDataSource([
        {
          key: `row_${new Date().getTime()}`,
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
      ]);
      setColumns([
        {
          title: "NAME",
          key: "name",
          color: "",
        },
        {
          title: "UV",
          key: "uv",
          color: "#8884d8",
        },
        {
          title: "PV",
          key: "pv",
          color: "#82ca9d",
        },
        {
          title: "AMT",
          key: "amt",
          color: "#5baad0",
        },
      ]);
      setFormContent((pre) => ({
        ...pre,
        colors: {
          uv: "#8884d8",
          pv: "#82ca9d",
          amt: "#5baad0",
        },
      }));
    }
  }, []);

  const onFinish = (values: OnFinishType) => {
    onSave([...modalDataSource], { ...modalFormContent });
  };

  return (
    <Modal
      title={"Spiderchart Preview"}
      centered
      width={"1000px"}
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
      className="z-50"
    >
      <div className="w-full h-full flex no-padding-modal">
        <div className="flex flex-col gap-2 min-h-[450px] w-[70%] p-3">
          {/* chart preview */}
          <div className="h-[260px] p-1">
            <SpiderChartPreview
              data={modalDataSource}
              tableColumns={columns}
              formContent={modalFormContent}
            />
            {/* <Example /> */}
          </div>
          {/* table */}
          <EditableTable
            columns={columns}
            dataSource={modalDataSource}
            setDataSource={SetModalDataSource}
          />
        </div>
        {/* Form */}
        <div className="bg-primary flex flex-col p-3 gap-2 rounded-md w-[30%]">
          <h1 className="heading-xs font-medium text-[#fff]">Chart Editor</h1>
          <hr className="border-[#fff]" />
          <SpiderChartModalForm
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

export default SpiderChartModal;
