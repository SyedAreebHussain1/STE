import { Skeleton } from "antd";

const CardSkeleton = ({ NoOfItems = 3 }: { NoOfItems?: number }) => {
  return (
    <div className="flex items-center gap-4 !h-[200px] overflow-hidden">
      {Array(NoOfItems)
        .fill("")
        .map((_, i) => (
          <div className="border-strokes rounded-xl p-3 flex flex-col gap-2 !h-[200px] !w-[200px]">
            <Skeleton.Image active className="!h-[150px] !w-[150px]" />
            <Skeleton active  paragraph={{ rows: 3, width: 100}}  />;
          </div>
        ))}
    </div>
  );
};

export default CardSkeleton;
