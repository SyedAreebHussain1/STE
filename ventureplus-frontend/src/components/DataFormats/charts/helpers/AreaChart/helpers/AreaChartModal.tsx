import { Modal } from "antd";
import { useDispatch } from "react-redux";
import AreaChartModalForm from "./AreaChartModalForm";
import AreaChartPreview from "./AreaChartPreview";
import EditableTable from "../../../../ReusableComponents/EditableTable";
import { ColType, FormContentT, initialColors } from "../../initialChartData";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";

interface AreaChartModalProps {
  open?: any | undefined;
  onClose?: any;
  tableColumns: ColType[];
  setTableColumns: React.Dispatch<React.SetStateAction<ColType[]>>;
  dataSource: any[];
  setDataSource: React.Dispatch<React.SetStateAction<any[]>>;
  form?: any;
  formContent: FormContentT;
  onSave: (data: any, formContent: any) => void;

  setFormContent: React.Dispatch<React.SetStateAction<FormContentT>>;
}

type OnFinishType = {
  title: string;
  subtitle: string;
};

const AreaChartModal = ({
  open,
  onClose,
  tableColumns,
  setTableColumns,
  dataSource,
  setDataSource,
  onSave,
  form,
  formContent,
  setFormContent,
}: AreaChartModalProps) => {
  const [columns, setColumns] = useState<ColType[]>([...tableColumns]);
  const [modalDataSource, SetModalDataSource] = useState([...dataSource]);
  const [modalFormContent, setModalFormContent] = useState({ ...formContent });
  const [colors, setColors] = useState<string[]>(initialColors);
  const dispatch = useDispatch();

  const onFinish = (values: OnFinishType) => {
    setTableColumns([...columns]);
    onSave([...modalDataSource], { ...modalFormContent });
  };

  useEffect(() => {
    const newColumn: ColType[] = [];
    let count = -1;
    if (modalDataSource?.[0]) {
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
    }
    setColumns(newColumn);
  }, [modalDataSource]);

  useEffect(() => {
    if (modalDataSource?.[0]) {
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
              [item]: formContent?.colors[item] || colors[i - 2],
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

  return (
    <Modal
      title={"Areachart Preview"}
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
        <div className="bg-primary flex flex-col p-3 gap-2 rounded-md w-[30%]">
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

export default AreaChartModal;
