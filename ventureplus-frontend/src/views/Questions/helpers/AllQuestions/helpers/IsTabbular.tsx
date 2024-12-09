import { useEffect, useState } from "react";
import TextInput from "../../../../../components/inputs/TextInput";
import { getAnswerByIdsApi } from "../../../../../services/api/Question";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Typewriter } from "../../../../../components/Typewriter";
import { getFromStorage } from "../../../../../utils/storage";
import { Button, Col, Row } from "antd";
import { errorMessage } from "../../../../../utils/message";
const IsTabbular = ({ data, setTabbularData }: any) => {
  const dispatch: AppDispatch = useDispatch()
  const [monthDataAutoFill, setMonthDataAutoFill] = useState<any>(null)
  const getPlanId = getFromStorage("businessPlan");
  const currentSelectedBusinessPlan = {
    businessPlan: getPlanId,
  };
  // const currentSelectedBusinessPlan = useSelector(
  //   (state: RootState) => state.currentSelectedBusinessPlan
  // );
  const getAnswerByIds = useSelector(
    (state: RootState) => state.getAnswerByIds
  );

  useEffect(() => {
    if (currentSelectedBusinessPlan?.businessPlan?.id && data?.id) {
      getAnswerByIdsApi(dispatch, { questionId: Number(data?.id), businessPlanId: Number(currentSelectedBusinessPlan?.businessPlan?.id) })
    }
  }, [data?.id])

  const columns = data?.tableColumns?.map((col: any) => ({
    id: col.id,
    value: col.value.charAt(0).toUpperCase() + col.value.slice(1),
  }));

  const rows = data?.tableRows.map((row: any) => ({
    id: row.id,
    value: `FY${row.value}`,
  }));
  const [dataOne, setDataOne] = useState(
    data?.tableRows.map((row: any) => ({
      id: row.id,
      year: `FY${row.value}`,
      values: data?.tableColumns.reduce((acc: any, column: any) => {
        acc[column.id] = 0;
        return acc;
      }, {}),
    }))
  );
  useEffect(() => {
    if (data?.tableColumns && data?.tableRows) {
      setDataOne(
        data?.tableRows?.map((row: any) => ({
          id: row?.id,
          year: `${row.value}`,
          values: data?.tableColumns?.reduce((acc: any, column: any) => {
            acc[column?.id] = 0;
            return acc;
          }, {}),
        }))
      )
    }
  }, [data?.tableColumns, data?.tableRows])
  useEffect(() => {
    if (getAnswerByIds?.data?.length > 0) {
      for (let i = 0; i < getAnswerByIds?.data?.length; i++) {
        if (getAnswerByIds?.data?.[i]?.tableValues) {
          const updatedData = data?.tableRows?.map((row: any) => {
            const rowData = {
              id: row?.id,
              year: `${row.value}`,
              values: data?.tableColumns?.reduce((acc: any, column: any) => {
                const answer = getAnswerByIds?.data?.[i]?.tableValues?.find((item: any) => item.rowId === row?.id && item.columnId === column.id);
                acc[column.id] = answer ? answer.value : 0;
                return acc;
              }, {}),
            };
            return rowData;

          });
          setDataOne(updatedData);
        }
      }
    }
  }, [getAnswerByIds?.data])
  const handleInputChange = (id: number, columnId: number, value: any) => {
    setDataOne((prevData: any) =>
      prevData.map((row: any) =>
        row.id === id
          ? { ...row, values: { ...row.values, [columnId]: value } }
          : row
      )
    );
  };

  useEffect(() => {
    const formattedData = {
      valueObjects: dataOne?.flatMap((row: any) =>
        Object.keys(row.values).map((colId) => ({
          rowId: row?.id,
          columnId: Number(colId),
          value: row.values[colId],
        }))
      ),
    }
    setTabbularData(formattedData)
  }, [dataOne])

  const handleMonthAutoFill = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const { value } = event.target;
    setMonthDataAutoFill((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  function handleSaveAutoFill() {
    if (!monthDataAutoFill?.monthlyGrowthRate || !monthDataAutoFill?.monthSale) {
      errorMessage("Please enter both monthly growth rate and month sale values.");
      return;
    }
    const growthRate = parseFloat(monthDataAutoFill.monthlyGrowthRate) / 100;
    let previousValue = parseFloat(monthDataAutoFill.monthSale);
    const updatedData = dataOne.map((row: any) => ({
      ...row,
      values: calculateRowValues(row.values),
    }));
    setDataOne(updatedData); // Updates data with values
    function calculateRowValues(values: any) {
      return Object.keys(values).reduce((acc: any, columnId, index) => {
        if (index === 0) {
          acc[columnId] = previousValue;
        } else {
          previousValue *= 1 + growthRate;
          acc[columnId] = previousValue.toFixed(2); // Rounded

        }
        return acc;
      }, {});
    }

  }
  return (
    <div>
      {data?.autoFill && <Row className="justify-end">
        <Col sm={24} md={12} lg={4}>
          <TextInput
            isNumber
            className="h-[45px]"
            name="monthlyGrowthRate"
            placeholder="Monthly Growth Rate"
            onChange={(event: any) => handleMonthAutoFill(event, "monthlyGrowthRate")}
          />
          <TextInput
            isNumber
            className="h-[45px]"
            name="monthSale"
            placeholder="Month Sale"
            onChange={(event: any) => handleMonthAutoFill(event, "monthSale")}
          />
          <div className="flex justify-end">
            <Button onClick={handleSaveAutoFill}>
              Save
            </Button>
          </div>
        </Col>
      </Row>}
      <div className="p-2">
        <h2 className="mb-12 mt-1 font-semibold text-[#212838] text-center text-[2.375rem]">
          <Typewriter text={data?.question} delay={30} />
        </h2>
        <table>
          <thead>
            <tr>
              <th></th>
              {columns?.reverse().map((column: any) => (
                <th
                  className="text-[#414040] text-[1rem] font-bold p-1"
                  key={column?.id}
                >
                  {column?.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataOne?.map((row: any) => (
              <tr className=" p-1" key={row.id}>
                <td className=" h-[50px] flex items-center mt-1">
                  {" "}
                  <span className="bg-[#016A70] text-[#FFFFFF] text-[13px] py-[2px] pl-2 !rounded-lg">
                    {row.year}
                  </span>
                </td>
                {columns?.map((column: any) => (
                  <td key={column.id} className=" p-1">
                    <TextInput
                      isNumber
                      value={row?.values[column.id]}
                      onChange={(e) =>
                        handleInputChange(row?.id, column.id, e.target.value)
                      }
                      className="h-[45px]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default IsTabbular;
