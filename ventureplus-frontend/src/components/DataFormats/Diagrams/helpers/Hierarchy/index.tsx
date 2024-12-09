import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import ReactDOM from "react-dom/client";
import "./helpers/hierarchyStyle.css";
import {
  CreateHorizontalStuctureNode,
  CreateYouStructureNode,
  HierarchNodeStructure,
} from "./helpers/HierarchyNodeStructrue";
import useToggle from "../../../../../hooks/useToggle";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import HierarchModal from "./helpers/HierarchyModal";
import HierarchyDiagram from "./helpers/Hierarchy";

interface Props {
  apiData: any;
  setPushObject: React.Dispatch<React.SetStateAction<any[]>>;
  open: boolean;
  toggle: () => void;
  index: number;
}

const defaultData = [
  // Sample data
  { name: "Anna Brown", designation: "CEO", report_to: null },
  { name: "James Wilson", designation: "CTO", report_to: "Anna Brown" },
  { name: "Maria Lopez", designation: "CMO", report_to: "Anna Brown" },
  {
    name: "Thomas Reed",
    designation: "IT Manager",
    report_to: "James Wilson",
  },
  {
    name: "Susan Hall",
    designation: "Software Development Manager",
    report_to: "James Wilson",
  },
  {
    name: "Nancy King",
    designation: "Digital Marketing Manager",
    report_to: "Maria Lopez",
  },
  {
    name: "Peter Scott",
    designation: "Public Relations Manager",
    report_to: "Maria Lopez",
  },
];
const BasicDoc = ({ apiData, setPushObject, open, toggle, index }: Props) => {
  const [data, setData] = useState(apiData?.data?.diagram || defaultData);
  const [isHorizontal, setIsHorizontal] = useState(
    apiData?.data?.isHorizontal || false
  );
  const [nodes, setNodes] = useState<any>([]);
  const [edges, setEdges] = useState<any>([]);
  const nodeTypes = useMemo(
    () => ({
      output: !isHorizontal
        ? CreateYouStructureNode
        : CreateHorizontalStuctureNode,
    }),
    [isHorizontal]
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

  const savesetPushObjectHandler = (modalData: any, isHorizontal: boolean) => {
    setPushObject((pre: any) =>
      pre.map((item: any, ind: number) =>
        ind === index
          ? item?.map((innerItem: any) =>
              innerItem?.id == apiData?.id
                ? {
                    ...innerItem,
                    data: {
                      diagram: [...modalData],
                      isHorizontal: isHorizontal,
                    },
                  }
                : innerItem
            )
          : item
      )
    );
  };
  return (
    <>
      {open && (
        <HierarchModal
          open={open}
          close={toggle}
          data={data}
          setData={setData}
          savesetPushObjectHandler={savesetPushObjectHandler}
          isHorizontal={isHorizontal}
          setIsHorizontal={setIsHorizontal}
        />
      )}
      {/* old */}
      {/* <div
        className="p-[20px] w-full overflow-hidden flex justify-center"
        onClick={toggle}
      >
         <HierarchNodeStructure data={data} /> 

       
      </div> */}
      {/* new code */}
      <HierarchyDiagram
        setNodes={setNodes}
        setEdges={setEdges}
        data={data}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        isHorizontal={isHorizontal}
        setIsHorizontal={setIsHorizontal}
      />
    </>
  );
};

export default BasicDoc;
