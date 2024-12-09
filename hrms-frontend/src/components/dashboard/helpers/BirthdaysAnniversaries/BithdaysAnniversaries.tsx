import {  Col,  List, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getUpCommingAnniversariesApi,
  getUpCommingBirthdaysApi,
} from "../../../../redux/api/Dashboard";
import { useEffect } from "react";
import { RootState } from "../../../../redux/store";
import moment from "moment";
export const formatDate = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day: number = date.getUTCDate();
  const monthIndex: number = date.getUTCMonth();
  const year: number = date.getUTCFullYear();

  const formattedDate: string = `${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
};
const BirthdaysAnniversaries = () => {
  const dispatch = useDispatch();
  const pageLimit = { page: 1, limit: 5 };
  useEffect(() => {
    getUpCommingAnniversariesApi(dispatch, pageLimit);
  }, []);
  const getUpcommingAnniversaries = useSelector(
    (state: RootState) => state.GetAnniversaries
  );
  const UpcommingAnniversaries = getUpcommingAnniversaries?.data?.data?.items;

  useEffect(() => {
    getUpCommingBirthdaysApi(dispatch, pageLimit);
  }, []);
  const getUpcommingBirthdays = useSelector(
    (state: RootState) => state.getUpcommingBirthdays
  );
  const Data = getUpcommingBirthdays?.data?.data?.items;
  const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
  return (
    <Row className="w-full !m-0  pr-[8px] " gutter={16}>
      <Col xs={24} md={12} className="pr-[8px]">
        <div className="p-6 dark:bg-dark-grayprimary  dark:text-dark-secondary h-[606px] bg-white rounded-lg shadow-sm w-full ">
          <h1 className="text-[15px] font-bold">🎂- Upcomming Birthdays</h1>
          <div className="px-10  w-full mt-[20px]">
            {" "}
            <ListItems data={Data} />{" "}
          </div>
        </div>
      </Col>
      <Col xs={24} md={12} className="pr-[8px]">
        <div className="p-6  dark:bg-dark-grayprimary dark:text-dark-secondary h-[606px] bg-white rounded-lg shadow-sm   w-full ">
          <h1 className="text-[15px] font-bold">🎂- Upcomming Anniversaries</h1>

          <div className="px-10  w-full mt-[20px]">
            <ListItems data={UpcommingAnniversaries} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BirthdaysAnniversaries;
function ListItems({ data }: { data: any }) {
  return (
    <div className="flex w-full">
      <List
        className="w-full"
        dataSource={data}
        renderItem={(item: any) => (
          <List.Item className="flex  dark:text-white h-[60px] border-none  justify-center items-center px-8 w-full">
            <div className="flex justify-between w-full items-center">
              <div className="w-[200px] overflow-hidden">
                {item?.joiningDate ? (
                  <div className="flex flex-col">
                    {" "}
                    <p>
                      {moment().year() - moment(item?.joiningDate).year()} Years
                    </p>
                    <p>
                      {moment(item?.joiningDate).format("MMMM")}{" "}
                      {moment(item?.joiningDate).year()}
                    </p>
                  </div>
                ) : (
                  <p>{formatDate(item?.dateOfBirth)}</p>
                )}
              </div>
              <div className="flex justify-center items-center mt-6  w-[150px]  flex-col">
                <span className={`h-[10px] w-[2px] bg-light-primary`}></span>
                <span
                  className={`h-[20px] w-[20px] border-2 rounded-full border-light-primary`}
                ></span>
                <span className={`h-[35px] w-[2px] bg-light-primary`}></span>
              </div>
              <div
                className={`${
                  item.today || item.tommorow ? "mr-[-45px]" : ""
                } flex justify-start  items-center  w-[300px] overflow-hidden`}
              >
                <div className="flex  justify-center items-center">
                  <img
                    className="rounded-full h-7 w-7"
                    src={item?.profilePhoto}
                  />
                  <div className="flex flex-col p-4">
                    <h1 className="font-bold text-[12px]">
                      {item?.companyUserProfile?.name}
                    </h1>
                    <p className="text-[10px]">{item?.designation}</p>
                  </div>

                  {moment().format("yyy-mm-D") ===
                    formatDate(item?.dateOfBirth) ||
                    (moment().format("yyy-mm-D") ===
                      formatDate(item?.joiningDate) && (
                      <p className="bg-purple-200 rounded-xl p-2 text-purple-600">
                        Today
                      </p>
                    ))}
                  {moment().add(1, "day").format("YYYY-MM-DD") ===
                    formatDate(item?.dateOfBirth) ||
                    (moment().add(1, "day").format("YYYY-MM-DD") ===
                      formatDate(item?.joiningDate) && (
                      <p className="bg-purple-200 rounded-xl p-2 text-purple-600">
                        Tommorow
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
