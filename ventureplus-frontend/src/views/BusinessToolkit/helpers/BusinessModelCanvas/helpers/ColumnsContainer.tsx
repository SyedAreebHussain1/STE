import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { get } from "../../../../../utils/baseApi";
import { ENDPOINT } from "../../../../../utils/endpoints";
import Column from "./Column";
import { getBusinessModelCanvasColumnsApi } from "../../../../../services/api/BusinessToolkit";
import { Spin } from "antd";
import NoCanvas from "./NoCanvas";
import SampleCanvas from "./SampleCanvas";
import ColumnContainerForPDF from "./ColumnContainerForPDF";
import { clearGetBusinessModelCanvasColumns } from "../../../../../redux/slices/BusinessToolkit/BusinessModelCanvas/BusinessModelCanvasSlice";

interface Props {}

const ColumnsContainer = (props: Props) => {
  const dispatch = useDispatch();
  const [bpdAndCanvasIds, setBpdAndCanvasIds] = useState({
    bpdResourcesId: null,
    businessModalCanvasId: null,
  });
  const [columns, setColumns] = useState([
    {
      color: "#CCE1E2",
      bgOpacity: true,
    },
    {
      color: "#E2FFED",
      bgOpacity: false,
    },
    {
      color: "#FDDECC",
      bgOpacity: true,
    },
    {
      color: "#FFFFDD",
      bgOpacity: false,
    },
    {
      color: "#CCE1E2",
      bgOpacity: true,
    },
    {
      color: "#FDDECC",
      bgOpacity: true,
    },
    {
      color: "#E2FFED",
      bgOpacity: false,
    },
    {
      color: "#FDDECC",
      bgOpacity: true,
    },
    {
      color: "#FFFFDD",
      bgOpacity: false,
    },
  ]);
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );
  const businessModelCanvasColumns = useSelector(
    (state: RootState) => state.businessModelCanvasColumns
  );

  useEffect(() => {
    if (currentSelectedBusinessPlan?.businessPlan?.id) {
      getBpdAndCanvasIds();
    }
  }, [currentSelectedBusinessPlan?.businessPlan?.id]);

  const getBpdAndCanvasIds = async () => {
    const apiString = `${ENDPOINT.businessToolKit.getBpdCanvasIdsByPlanId}/${currentSelectedBusinessPlan?.businessPlan?.id}`;
    const { data } = await get<any>(apiString);
    setBpdAndCanvasIds(data);
  };

  useEffect(() => {
    if (bpdAndCanvasIds?.bpdResourcesId) {
      getBusinessModelCanvasColumnsApi(
        dispatch,
        bpdAndCanvasIds?.bpdResourcesId
      );
    }
    return () => {
      dispatch(clearGetBusinessModelCanvasColumns());
    };
  }, [bpdAndCanvasIds]);

  useEffect(() => {
    if (businessModelCanvasColumns?.data?.data?.businessModelData?.length > 0) {
      const newCols = columns.map((column, i) => {
        let route;
        const wordCount =
          businessModelCanvasColumns?.data?.data?.businessModelData?.[
            i
          ]?.name?.split(" ").length;
        if (wordCount > 1) {
          const [word1, word2] =
            businessModelCanvasColumns?.data?.data?.businessModelData?.[
              i
            ]?.name?.split(" ");
          route = word1.toLowerCase().concat(word2);
        } else {
          route =
            businessModelCanvasColumns?.data?.data?.businessModelData?.[
              i
            ]?.name?.toLowerCase();
        }
        return {
          route,
          ...column,
          ...businessModelCanvasColumns?.data?.data?.businessModelData[i],
        };
      });
      setColumns(newCols);
    }
  }, [businessModelCanvasColumns]);

  return (
    <>
      {" "}
      {businessModelCanvasColumns?.data?.data?.businessModelData?.length > 0 ? (
        <>
          <ColumnContainerForPDF />
          <div className="border border-strokes rounded-lg p-3 mt-5 overflow-hidden">
            <div className="flex gap-1 items-center p-2 bg-[white] rounded-xl">
              <h1 className="text-body font-semibold heading-m">
                {" "}
                {currentSelectedBusiness?.business?.name}{" "}
              </h1>
              <h1 className="text-body font-semibold heading-m"> - </h1>
              <h1 className="text-body font-semibold heading-m"> Business Model Canvas - </h1>
              <h1 className="text-primary font-semibold heading-m">
                {" "}
                {businessModelCanvasColumns?.data?.data?.name}{" "}
              </h1>
            </div>
            
              <div className="p-2 flex gap-2 w-full overflow-y-hidden overflow-x-auto custom-scrollbar">
                {columns?.map((column: any, i: number) => (
                  <Column
                    key={i}
                    column={column}
                    bpdAndCanvasIds={bpdAndCanvasIds}
                  />
                ))}
              </div>
          </div>
        </>
      ) : (
        <SampleCanvas />
      )}
    </>
  );
};

export default ColumnsContainer;
