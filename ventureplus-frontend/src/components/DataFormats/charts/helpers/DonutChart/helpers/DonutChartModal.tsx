import { Modal } from "antd";
import { useDispatch } from "react-redux";
import DonutChartForm from "./DonutChartForm";
import DonutChartPreview from "./DonutChartPreview";
import EditableTable from "../../../../ReusableComponents/EditableTable";
import { ColType, FormContentT, initialColors } from "../../initialChartData";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";

interface DonutChartModalProps {
  open?: any | undefined;
  onClose?: any;
  tableColumns: ColType[];
  dataSource: any[];
  onSave: (data: any, formContent: any) => void;
  setDataSource: React.Dispatch<React.SetStateAction<any[]>>;
  form?: any;
  formContent: FormContentT;
  setFormContent: React.Dispatch<React.SetStateAction<FormContentT>>;
}

type OnFinishType = {
  title: string;
  subtitle: string;
};

const DonutChartModal = ({
  open,
  onClose,
  tableColumns,
  dataSource,
  setDataSource,
  form,
  formContent,
  onSave,
  setFormContent,
}: DonutChartModalProps) => {
  const [columns, setColumns] = useState<ColType[]>([...tableColumns]);
  const [modalDataSource, SetModalDataSource] = useState([...dataSource]);
  const [modalFormContent, setModalFormContent] = useState({ ...formContent });
  const [colors, setColors] = useState<string[]>(initialColors);

  const onFinish = (values: OnFinishType) => {
    onSave([...modalDataSource], { ...modalFormContent });
  };

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
            color: colors[count],
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
        { key: `row_${new Date().getTime()}`, name: "row1", value: 50 },
      ]);
      setColumns([
        { title: "NAME", key: "name", color: "" },
        { title: "VALUE", key: "value", color: "#8884d8" },
      ]);
      setFormContent((pre) => ({
        ...pre,
        colors: {
          row1: "#8884d8",
        },
      }));
    }
  }, []);

  useEffect(() => {
    const colorsKeys = modalFormContent?.colors
      ? Object.keys(modalFormContent.colors)
      : [];
    modalDataSource.map((item, i) => {
      setModalFormContent((st) =>
        colorsKeys.includes(item.name)
          ? st
          : {
              ...st,
              colors: {
                ...st.colors,
                [item.name]: colors[i],
              },
            }
      );
    });
  }, [modalDataSource]);
  return (
    <Modal
      title={"Donutchart Preview"}
      centered
      width={"1000px"}
      height={"700px"}
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
      className="z-50"
    >
      <div className="w-full h-full flex no-padding-modal">
        <div className="flex flex-col gap-2 min-h-[450px] w-[70%] p-3">
          {/* chart preview */}
          <div className="h-[260px] p-1">
            <DonutChartPreview
              data={modalDataSource}
              formContent={modalFormContent}
            />
          </div>
          {/* table */}
          <EditableTable
            columns={columns}
            dataSource={modalDataSource}
            setDataSource={SetModalDataSource}
            isColumnEditable
          />
        </div>
        {/* Form */}
        <div className="bg-primary flex flex-col p-3 gap-2 rounded-md w-[30%] h-[550px] overflow-y-auto custom-scrollbar">
          <h1 className="heading-xs font-medium text-[#fff]">Chart Editor</h1>
          <hr className="border-[#fff]" />
          <DonutChartForm
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

export default DonutChartModal;
