import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Spin } from "antd";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getAnswerByIdsApi } from "../../../../../services/api/Question";
import { clearGetAnswerByIds } from "../../../../../redux/slices/Questions/getAnswerByIdsSlice";
import { getFromStorage } from "../../../../../utils/storage";
import { Typewriter } from "../../../../../components/Typewriter";
import { LoadingGIF } from "../../../../../assets";

const IsMcqsForChild = ({
  data,
  setSingleAnswer,
  dataSoucre,
  singleAnswer,
  bpElement
}: any) => {
  const [selected, setSelected] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const [dataSource, setDataSource] = useState<any>([]);
  const [highlightedAnswers, setHighlightedAnswers] = useState<string[]>([]);
  const business = { business: getFromStorage("business") }
  const getPlanId = getFromStorage("businessPlan")
  const currentSelectedBusinessPlan = {
    businessPlan: getPlanId
  }
  const createAnswer = useSelector((state: RootState) => state.createAnswer);
  const getAnswerByIds = useSelector(
    (state: RootState) => state.getAnswerByIds?.data || []
  );
  const [aiLoading, setAiLoading] = useState<boolean>(false);

  const handleSelect = (answer: string) => {
    setSelected(answer);
    setHighlightedAnswers([answer]);
  };
  useEffect(() => {
    if (data) {
      setDataSource(data?.mcqAnswers);
    }
  }, [data]);

  useEffect(() => {
    setSingleAnswer(selected);
  }, [selected]);

  useEffect(() => {
    if (
      currentSelectedBusinessPlan?.businessPlan?.id &&
      data?.id
    ) {
      if (dataSoucre?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]) {
        const keys = Object.keys(dataSoucre);
        const nameEnum: any = keys.filter((item: string, i: number) => {
          return (
            item == "products" ||
            item == "staffings" ||
            item == "equities" ||
            item == "services"
          );
        });
        let str = nameEnum?.[0];
        str = str.slice(0, -1);
        getAnswerByIdsApi(dispatch, {
          questionId: Number(data?.id),
          businessPlanId: Number(currentSelectedBusinessPlan?.businessPlan?.id),
        },
          {
            id: Number(dataSoucre?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]?.id),
            bpType: [`${str}Id`][0] === "equitie" ? "equityId" : [`${str}Id`][0]
          },
        );
      } else {
        getAnswerByIdsApi(dispatch, {
          questionId: Number(data?.id),
          businessPlanId: Number(currentSelectedBusinessPlan?.businessPlan?.id),
        });
      }
    }
  }, [data?.id, dataSoucre]);

  useEffect(() => {
    if (getAnswerByIds?.length > 0) {
      const receivedAnswers = getAnswerByIds?.map((item: any) => item?.answer);
      if (receivedAnswers.length > 0) {
        for (let i = 0; i < receivedAnswers?.length; i++) {
          const element = receivedAnswers?.[i];
          if (element) {
            setHighlightedAnswers(element);
            setSelected(element);
          }
          break
        }
      }
    }
  }, [getAnswerByIds]);
  return (
    <>
      <div className="flex justify-center">
        <Form className="w-[50%]">
          {!aiLoading ? (
            <div className="flex flex-col justify-center" >

              <div className="flex justify-center">
                <h2 className="font-semibold text-[#212838] text-[2.375rem]">
                  <Typewriter key={data?.question} text={data?.question} delay={30} />
                </h2>
              </div>
              <div className="w-full mt-6 ">
                <div className="mt-3 gap-5 z-10 flex flex-col items-center justify-center">
                  {dataSource?.map((item: any) => {
                    const isHighlighted = highlightedAnswers.includes(
                      item.answer
                    );
                    return (
                      <div key={item.id} className="mt-3 gap-5 z-10 flex flex-col items-center justify-center cursor-pointer w-full">
                        <div
                          key={item.id}
                          onClick={() => handleSelect(item.answer.toString())}
                          className={
                            highlightedAnswers == item.answer
                              ? "bg-[#016A70] text-[#F8FAFC] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                              : "bg-[#FFFFFF] text-[#4A5366] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                          }
                        >
                          <span>
                            <h5 className="p-4">
                              {item?.answer}
                            </h5>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <img src={LoadingGIF} style={{ width: "220px", height: "150px" }} />
            </div>
          )}
        </Form>
      </div>
    </>
  );
};

export default IsMcqsForChild;
