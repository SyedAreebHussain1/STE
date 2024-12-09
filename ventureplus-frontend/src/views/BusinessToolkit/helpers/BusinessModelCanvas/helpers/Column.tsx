import { useDispatch } from "react-redux";
import { circularOutlinedAddIcon } from "../../../../../assets/BusinessToolkit";

import {
  getBusinessModelCanvasColumnsApi,
  postCanvasColumnItemApi,
} from "../../../../../services/api/BusinessToolkit";
import ColumnCard from "./ColumnCard";

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

const Column = ({ column, bpdAndCanvasIds }: Props) => {
  const dispatch = useDispatch();
  const addHandler = () => {
    postCanvasColumnItemApi(
      dispatch,
      column?.route,
      {
        title: "New Card",
        value: "Description",
        businessModalCanvasId: bpdAndCanvasIds.businessModalCanvasId,
      },
      onSuccess
    );
  };

  const onSuccess = () => {
    if (bpdAndCanvasIds.bpdResourcesId) {
      getBusinessModelCanvasColumnsApi(
        dispatch,
        bpdAndCanvasIds.bpdResourcesId
      );
    }
  };
  return (
    <>
      <div className="min-w-[300px] rounded-lg h-[600px] p-4 bg-[white] overflow-y-auto custom-scrollbar">
        <div className="flex items-center justify-between">
          <div className="text-body font-medium heading-xs">{column.name}</div>
          <img
            src={circularOutlinedAddIcon}
            alt=""
            className="cursor-pointer"
            onClick={() => addHandler()}
          />
        </div>
        <hr className="border-strokes my-3" />
        <div>
          {column?.items?.map((card: any) => (
            <ColumnCard
              key={card.id}
              data={card}
              bgColor={column.color}
              bgOpacity={column.bgOpacity}
              route={column?.route}
              bpdAndCanvasIds={bpdAndCanvasIds}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
