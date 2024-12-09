import React, { useEffect, useState } from "react";
import MainQuestion from "./helpers/MainQuestion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getBusinessCountApi } from "../../services/api/GetBusinessCount";
import { useNavigate, useParams } from "react-router-dom";
import { Result } from "antd";
import RoundedButton from "../../components/button/RoundedButton";
import { Image404 } from "../../assets";

const Questions = () => {
  const { id } = useParams();
  const [allow, setAllow] = useState(false);
  const getBusinessCount = useSelector(
    (state: RootState) => state?.getBusinessCount
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getChapter = useSelector((state: RootState) => state?.getChapter);
  useEffect(() => {
    if (!getBusinessCount?.data?.data) {
      getBusinessCountApi(dispatch);
    }
  }, []);

  useEffect(() => {
    const businessCount = getBusinessCount?.data?.data;
    if (getChapter?.data?.data && businessCount) {

      const ChaptersCount = businessCount?.allowed?.chapters;
      const userAllow = getChapter?.data?.data
        ?.filter((filterItem: any, index: number) => index < ChaptersCount)
        .find((findItem: any) =>
          findItem?.topics?.find(
            (topicsFindIndex: any) => topicsFindIndex?.id == id
          )
        );
      if (userAllow) {
        setAllow(true);
      } else {
        setAllow(false);
      }
    }
  }, [getChapter, getBusinessCount]);
  return (
    <React.Fragment>
      {allow ? (
        <div className="p-8 overflow-auto w-full">
          <MainQuestion />
        </div>
      ) : (
        <div className="h-[100vh] w-full flex items-center justify-center">
          <Result
            icon={<img src={Image404} className="w-[500px]" />}
            extra={
              <RoundedButton
                title={"Go To Edit Plan"}
                sm
                className="rounded-full px-[30px] text-[15px] mt-0 "
                type="primary"
                onClick={() => navigate("/edit-plan")}
              />
            }
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Questions;
