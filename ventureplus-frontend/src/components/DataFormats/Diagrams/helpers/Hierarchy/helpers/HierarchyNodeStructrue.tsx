export function HierarchNodeStructure({ data }: any) {
  return (
    <>
      <div className="hierarchy">
        {data?.map((item: any, index: any) => (
          <HierarchyItem key={index} {...item} index={index} />
        ))}
      </div>
    </>
  );
}

const HierarchyItem = ({ label, children, className, index }: any) => {
  return (
    <div className="hierarchy-item">
      <div className={"border-[1px] p-4 bg-white rounded-lg"}>{label}</div>
      {children?.length > 0 && (
        <div className="w-full flex justify-center hierarchy-children-hr mt-[10px]">
          <hr className={`  bg-[gray] h-[2px] w-full`} />
        </div>
      )}
      {children && children?.length > 0 && (
        <div className="hierarchy-children">
          {children.map((child: any, index: any) => (
            <div className="hierarchy-connector" key={index}>
              <HierarchyItem {...child} index={index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
// new code
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export function CreateYouStructureNode({ data }: any) {
  return (
    <>
      <div className="px-[50px] py-[20px] rounded-xl bg-[#3ED0D6] min-w-[250px]">
        <Handle type="target" position={Position.Top} isConnectable={false} />

        <h1 className="text-[1rem] text-[#1E1E1E] font-semibold leading-[1.05rem]">
          {data?.userName}
        </h1>
        <h2 className="text-[0.819rem] text-[#1E1E1E] font-medium">
          {data?.userPosition}
        </h2>

        <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          isConnectable={false}
        />
      </div>
    </>
  );
}
export function CreateHorizontalStuctureNode({ data }: any) {
  return (
    <>
      <div className="px-[50px] py-[20px] rounded-xl bg-[#3ED0D6] min-w-[250px]">
        <Handle type="target" position={Position.Left} isConnectable={false} />

        <h1 className="text-[1rem] text-[#1E1E1E] font-semibold leading-[1.05rem]">
          {data?.userName}
        </h1>
        <h2 className="text-[0.819rem] text-[#1E1E1E] font-medium">
          {data?.userPosition}
        </h2>

        <Handle
          type="source"
          position={Position.Right}
          id="a"
          isConnectable={false}
        />
      </div>
    </>
  );
}
