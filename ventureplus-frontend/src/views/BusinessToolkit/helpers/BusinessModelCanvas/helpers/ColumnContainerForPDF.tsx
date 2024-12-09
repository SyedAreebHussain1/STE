import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { get } from "../../../../../utils/baseApi";
import { ENDPOINT } from "../../../../../utils/endpoints";
import { getBusinessModelCanvasColumnsApi } from "../../../../../services/api/BusinessToolkit";
import ColumnForPDF from "./ColumnForPDF";
import { useReactToPrint } from "react-to-print";
import RoundedButton from "../../../../../components/button/RoundedButton";

const ColumnContainerForPDF = () => {
  const dispatch = useDispatch();
  const [bpdAndCanvasIds, setBpdAndCanvasIds] = useState({
    bpdResourcesId: null,
    businessModalCanvasId: null,
  });
  const [columns, setColumns] = useState([
    {
      color: "#CCE1E2",
      bgOpacity: true,
      name: "",
    },
    {
      color: "#E2FFED",
      bgOpacity: false,
      name: "",
    },
    {
      color: "#FDDECC",
      bgOpacity: true,
      name: "",
    },
    {
      color: "#FFFFDD",
      bgOpacity: false,
      name: "",
    },
    {
      color: "#CCE1E2",
      bgOpacity: true,
      name: "",
    },
    {
      color: "#FDDECC",
      bgOpacity: true,
      name: "",
    },
    {
      color: "#E2FFED",
      bgOpacity: false,
      name: "",
    },
    {
      color: "#FDDECC",
      bgOpacity: true,
      name: "",
    },
    {
      color: "#FFFFDD",
      bgOpacity: false,
      name: "",
    },
  ]);
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );
  //   const currentSelectedBusiness = useSelector(
  //     (state: RootState) => state.currentSelectedBusiness
  //   );
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
  const customPrintRef = useRef<any>(null);
  const handlePrint = useReactToPrint({
    content: () => customPrintRef.current,
    copyStyles: true,

    pageStyle: `
      @page {
        size: landscape;
        margin: 20px;
      }
      body {
      -webkit-print-color-adjust: exact;
      }
      .scale-down {
      zoom: 0.5; 
    }
      
    `,
  });

  return (
    <>
      <div className="flex justify-end mt-[15px]">
        <RoundedButton
          title={"Download"}
          type="primary"
          onClick={handlePrint}
          sm
        />
      </div>
      <div
        className=" bg-black w-full h-full printComponentHide"
        ref={customPrintRef}
      >
        <div className="scale-down  ">
          {columns?.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateRows: "auto auto ",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto auto auto",
                }}
              >
                {columns
                  ?.filter((item) => item?.name === "Key Partner")
                  ?.map((column: any, i: number) => (
                    <ColumnForPDF
                      key={i}
                      column={column}
                      bpdAndCanvasIds={bpdAndCanvasIds}
                    />
                  ))}

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "auto auto",
                  }}
                >
                  {["Key Activities", "Key Resources"].map((name) =>
                    columns
                      ?.filter((item) => item?.name === name)
                      ?.map((column: any, i: number) => (
                        <ColumnForPDF
                          key={i}
                          column={column}
                          bpdAndCanvasIds={bpdAndCanvasIds}
                        />
                      ))
                  )}
                </div>

                {columns
                  ?.filter((item) => item?.name === "Valid Proposition")
                  ?.map((column: any, i: number) => (
                    <ColumnForPDF
                      key={i}
                      column={column}
                      bpdAndCanvasIds={bpdAndCanvasIds}
                    />
                  ))}

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "auto auto",
                  }}
                >
                  {["Customer Relationship", "Channels"].map((name) =>
                    columns
                      ?.filter((item) => item?.name === name)
                      ?.map((column: any, i: number) => (
                        <ColumnForPDF
                          key={i}
                          column={column}
                          bpdAndCanvasIds={bpdAndCanvasIds}
                        />
                      ))
                  )}
                </div>

                {columns
                  ?.filter((item) => item?.name === "Customer Segments")
                  ?.map((column: any, i: number) => (
                    <ColumnForPDF
                      key={i}
                      column={column}
                      bpdAndCanvasIds={bpdAndCanvasIds}
                    />
                  ))}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto ",
                }}
              >
                {columns
                  ?.filter((item) => item?.name === "Cost Structure")
                  ?.map((column: any, i: number) => (
                    <ColumnForPDF
                      key={i}
                      column={column}
                      bpdAndCanvasIds={bpdAndCanvasIds}
                    />
                  ))}
                {columns
                  ?.filter((item) => item?.name === "Revenue Streams")
                  ?.map((column: any, i: number) => (
                    <ColumnForPDF
                      key={i}
                      column={column}
                      bpdAndCanvasIds={bpdAndCanvasIds}
                    />
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ColumnContainerForPDF;
