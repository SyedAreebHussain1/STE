import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ColorPicker, Modal, Select } from "antd";
import RoundedButton from "../../../../../button/RoundedButton";
import { AnimatePresence, motion } from "framer-motion";
import { cancelIconWhite, deleteIcon } from "../../../../../../assets";

import { infoMessage } from "../../../../../../utils/message";
import {
  CreateHorizontalStuctureNode,
  CreateYouStructureNode,
} from "./HierarchyNodeStructrue";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import HierarchyDiagram from "./Hierarchy";

type Props = {
  open: boolean;
  close: () => void;
  isHorizontal: boolean;
  setIsHorizontal: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  savesetPushObjectHandler: (data: any, isHorizontal: boolean) => void;
};

const HierarchModal: React.FC<Props> = ({
  open,
  close,
  isHorizontal,
  setIsHorizontal,
  data,
  setData,
  savesetPushObjectHandler,
}) => {
  const [customStyleModal, setCustomStyleModal] = useState<any>({});
  const [modalData, setModalData] = useState<any[]>([...data]);

  const [nodes, setNodes] = useState<any>([]);
  const [edges, setEdges] = useState<any>([]);
  const [isHorizontalModal, setIsHorizontalModal] = useState(isHorizontal);
  const nodeTypes = useMemo(
    () => ({
      output: !isHorizontalModal
        ? CreateYouStructureNode
        : CreateHorizontalStuctureNode,
    }),
    [isHorizontalModal]
  );

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: any) => setEdges((eds: any) => addEdge(connection, eds)),
    [setEdges]
  );
  function saveHandler() {
    setData([...modalData]);
    savesetPushObjectHandler([...modalData], isHorizontalModal);
    setIsHorizontal(isHorizontalModal);
    close();
  }
  const deleteHandler = (deleteName: string) => {
    setModalData((pre: any) =>
      pre.filter((item: any, ind: number) => item?.name !== deleteName)
    );
  };
  return (
    <Modal
      centered
      footer={null}
      open={open}
      onCancel={close}
      closeIcon={false}
      closable={false}
      maskClosable={false}
      width="100%"
      className="m-0 p-0 tableforPdf rounded-xl overflow-hidden"
    >
      <div className="flex w-full max-h-max">
        <div className="flex-1 h-[90vh] overflow-y-auto py-[15px] px-[10px]">
          <h1 className="text-[#040615] text-[23px] font-medium border-b-2 border-[#040615] pb-[8px] px-[8px]">
            Diagram
          </h1>
          <div className="flex gap-2 justify-center mt-[10px]">
            <input
              type="checkbox"
              checked={isHorizontalModal}
              onChange={(e) => {
                setIsHorizontalModal(e?.target?.checked);
              }}
            />
            <h2>Horizontal</h2>
          </div>
          <HierarchyDiagram
            setNodes={setNodes}
            setEdges={setEdges}
            data={modalData}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            isHorizontal={isHorizontalModal}
            setIsHorizontal={setIsHorizontalModal}
          />
        </div>
        {/* side bar */}
        <div className="w-max py-[15px] px-[10px] h-[90vh] flex flex-col bg-[#016A70]">
          <div className="flex justify-between border-b-2 border-[#F8FAFC] items-center px-[8px] pb-[8px]">
            <h1 className="text-[#fff] text-[23px] font-medium">Editor</h1>
            <div onClick={close}>
              <img src={cancelIconWhite} alt="cancel icon" />
            </div>
          </div>
          <div className="h-full overflow-y-auto px-[5px]">
            <div className="h-max py-[10px] w-[300px]">
              {modalData?.map((item: any, index: number) => (
                <SideBarForHierarchModal
                  key={index}
                  data={item}
                  modalData={modalData}
                  setModalData={setModalData}
                  index={index}
                  deleteHandler={deleteHandler}
                />
              ))}
              <SideBarVennDiagramForAddModal
                modalData={modalData}
                setModalData={setModalData}
                index={modalData.length}
              />
            </div>
          </div>
          <div className="flex w-full pt-[10px]">
            <RoundedButton
              title={"Save"}
              sm
              className="rounded-lg w-full"
              type="default"
              onClick={saveHandler}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HierarchModal;

type SideBarProps = {
  data: any;
  modalData: any;
  setModalData: React.Dispatch<React.SetStateAction<any>>;
  index: number;
  deleteHandler: (deleteName: string) => void;
};
type SideBarPropsForAdd = {
  modalData: any;
  setModalData: React.Dispatch<React.SetStateAction<any>>;
  index: number;
};

const SideBarForHierarchModal: React.FC<SideBarProps> = ({
  data,
  modalData,
  setModalData,
  index,
  deleteHandler,
}) => {
  const [show, setShow] = useState(false);

  const handleChange = (key: string, value: any) => {
    if (key == "value" && !value) {
      setModalData((prev: any) =>
        prev.map((item: any, ind: number) =>
          ind === index ? { ...item, [key]: value, sets: [] } : item
        )
      );
    } else {
      setModalData((prev: any) =>
        prev.map((item: any, ind: number) =>
          ind === index ? { ...item, [key]: value } : item
        )
      );
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    const nameExists = modalData.some(
      (item: any, idx: number) => idx !== index && item.name === newName
    );

    if (nameExists) {
      e.preventDefault();
      infoMessage("Name Already Exists");
      return;
    }

    setModalData((prevData: any) =>
      prevData.map((item: any, idx: number) => {
        if (idx === index) {
          return {
            ...item,
            name: newName,
          };
        }
        return {
          ...item,
          report_to: item?.report_to === data.name ? newName : item?.report_to,
        };
      })
    );
  };
  return (
    <>
      <div
        className="w-[300px] bg-[#fff] mt-[10px] p-[10px] rounded-xl text-[18px] flex items-center justify-between"
        onClick={() => setShow(!show)}
      >
        <h1>{data?.name}</h1>
        <div>
          <img
            src={deleteIcon}
            onClick={(e) => {
              deleteHandler(data.name);
              e.preventDefault();
              e.stopPropagation();
            }}
            className="w-[18px]"
          />
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", padding: "0 10px" }}
          >
            <div className="py-[10px] flex flex-col gap-2 text-[#fff]">
              <span className="text-[13px] font-normal">Name</span>
              <input
                type="text"
                className="py-[6px] px-[10px] outline-none text-[black] rounded-md text-[16px]"
                value={data?.name}
                onChange={handleNameChange}
              />
              <span className="text-[13px] font-normal">Designation</span>

              <input
                type="text"
                className="py-[6px] px-[10px] outline-none text-[black] rounded-md text-[16px]"
                value={data?.designation}
                onChange={(e) => {
                  handleChange("designation", e?.target?.value);
                }}
              />
              <span className="text-[13px] font-normal">Report to</span>
              <Select
                className="w-full !min-h-[36px]"
                popupClassName={"!min-h-[36px]"}
                value={data?.report_to}
                allowClear
                onChange={(e) => {
                  setModalData((prev: any) =>
                    prev.map((item: any, innerIndex: number) =>
                      innerIndex === index ? { ...item, report_to: e } : item
                    )
                  );
                }}
              >
                {modalData
                  ?.filter((item: any) => item?.name !== data?.name)
                  ?.map((item: any, idx: number) => (
                    <Select.Option
                      className="h-[33px]"
                      value={item?.name}
                      key={idx}
                    >
                      {item?.name}
                    </Select.Option>
                  ))}
              </Select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SideBarVennDiagramForAddModal: React.FC<SideBarPropsForAdd> = ({
  modalData,
  setModalData,
  index,
}) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    report_to: "",
    designation: "",
    name: "",
  });
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;

    setData((pre: any) => ({ ...pre, name: newName }));
  };

  const handleChange = (key: string, value: any) => {
    setData((prev: any) => ({ ...prev, [key]: value }));
  };

  const addListHandler = () => {
    if (!data.name) {
      infoMessage("Add Name First");
      return;
    }
    const nameExists = modalData.some(
      (item: any, idx: number) => idx !== index && item.name === data.name
    );
    if (nameExists) {
      infoMessage("Name Already Exists");
      return;
    }

    setModalData((pre: any) => {
      let arr = [...pre];
      arr.push({ ...data });
      return arr;
    });
    setData({
      report_to: "",
      designation: "",
      name: "",
    });
    setShow(false);
  };

  return (
    <>
      <div
        className="w-[300px] bg-[#fff] mt-[10px] p-[10px] rounded-xl text-[18px]"
        onClick={() => setShow(!show)}
      >
        New List
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", padding: "0 10px" }}
          >
            <div className="py-[10px] flex flex-col gap-2 text-[#fff]">
              <span className="text-[13px] font-normal">Name</span>
              <input
                type="text"
                className="py-[6px] px-[10px] outline-none text-[black] rounded-md text-[16px]"
                value={data?.name}
                onChange={handleNameChange}
              />
              <span className="text-[13px] font-normal">Designation</span>

              <input
                type="text"
                className="py-[6px] px-[10px] outline-none text-[black] rounded-md text-[16px]"
                value={data?.designation}
                onChange={(e) => {
                  handleChange("designation", e?.target?.value);
                }}
              />

              <span className="text-[13px] font-normal">Report to</span>
              <Select
                className="w-full !min-h-[36px]"
                popupClassName={"!min-h-[36px]"}
                value={data?.report_to}
                allowClear
                onChange={(e) => {
                  setData((prev: any) => ({ ...prev, report_to: e }));
                }}
              >
                {modalData
                  ?.filter((item: any) => item?.name !== data?.name)
                  ?.map((item: any, idx: number) => (
                    <Select.Option
                      className="h-[33px]"
                      value={item?.name}
                      key={idx}
                    >
                      {item?.name}
                    </Select.Option>
                  ))}
              </Select>

              <div className="flex w-full mt-4 justify-center">
                <RoundedButton
                  title={"Add List"}
                  sm
                  className="rounded-lg py-[20px] px-[30px] text-[16px]"
                  type="secondary"
                  onClick={addListHandler}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
