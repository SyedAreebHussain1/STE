import ColumnCardForPDF from "./ColumnCardForPDF";

interface Props {
  column: {
    id: number;
    name: string;
    color: string;
    bgOpacity: boolean;
    items: [];
    route: string;
  };
  bpdAndCanvasIds: {
    bpdResourcesId: number | null;
    businessModalCanvasId: number | null;
  };
}

const ColumnForPDF = ({ column, bpdAndCanvasIds }: Props) => {
  return (
    <>
      <div className="min-w-[300px]  p-4 bg-[white] border-[#CDD4DF] border-[1px] ">
        <div className="text-[#016A70] font-semibold text-[18px]">
          {column.name}
        </div>

        <div className="mt-[10px]">
          {column?.items?.map((card: any) => (
            <ColumnCardForPDF
              key={card.id}
              data={card}
              bgColor={column.color}
              bgOpacity={column.bgOpacity}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ColumnForPDF;
