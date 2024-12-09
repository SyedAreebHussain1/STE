import { Modal } from "antd";
import { useCallback, useState, useMemo, useRef } from "react";
import { BiCloset, BiWindowClose } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useReactToPrint } from "react-to-print";
import ReactFlow from "reactflow";

const CreateStructureModal = ({
  open,
  troggle,
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  nodeTypes,
}: any) => {
  const customPrintRef = useRef<any>(null);

  const handlePrint = useReactToPrint({
    content: () => customPrintRef.current,
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: a4 !important;
  margin: 0px;
  
      }`,
  });
  return (
    <Modal
      className="CreateStructureModalCss"
      open={open}
      onCancel={troggle}
      closeIcon={<CgClose className="w-[20px] h-[20px] text-white" />}
      maskClosable={false}
      footer={false}
      width={"100vw"}
      style={{ top: 0, marginTop: 0, marginBottom: 0, padding: 0 }}
    >
      <div
        className="w-[100%] h-[100vh] flex flex-col  "
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {/* <div className="d-print-block" ref={customPrintRef}></div> */}
        <div
          className="w-full h-[100vh] flex-1 d-print-block"
          ref={customPrintRef}
        >
          <div className="d-print-block-h1">
            <h1 className=" text-[3rem] w-max">Company structure</h1>
          </div>
          <div className="w-full h-full d-print-block-div">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              fitView={true}
              //   defaultViewport={{
              //     x: 150,
              //     y: 20,
              //     zoom: 0,
              //   }}
            />
          </div>
        </div>
        <div className="flex pb-[20px] justify-center">
          <button
            className="w-[122.88px] text-center py-[9px] bg-white rounded-3xl text-[.98rem] font-semibold"
            onClick={(e) => {
              handlePrint();
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            Print
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateStructureModal;
