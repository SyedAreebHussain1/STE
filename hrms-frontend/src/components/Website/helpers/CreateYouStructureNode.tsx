import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export function CreateYouStructureNode({ data }: any) {
  return (
    <>
      <div className="px-[50px] py-[20px] rounded-[50px] bg-[#3ED0D6] min-w-[250px]">
        <Handle type="target" position={Position.Top} />

        <h1 className="text-[1rem] text-[#1E1E1E] font-semibold leading-[1.05rem]">
          {data?.userName}
        </h1>
        <h2 className="text-[0.819rem] text-[#1E1E1E] font-medium">
          {data?.userPosition}
        </h2>

        <Handle type="source" position={Position.Bottom} id="a" />
      </div>
    </>
  );
}
