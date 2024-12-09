import React, { useEffect, useRef, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { BsEnvelopeArrowUp } from "react-icons/bs";
import {
  getNotificationApi,
  postNotificationApi,
} from "../../../redux/api/Notification";

interface DataType1 {
  key: number;
  title: number;
  date: string;
  attachment: string;
  action: any;
}

const columns: TableColumnsType<DataType1> = [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const NotificationTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const dispatch = useDispatch();
  const getNotification = useSelector((state: any) => state?.getNotification);
  const postNotification = useSelector((state: any) => state?.postNotification);

  useEffect(() => {
    getNotificationApi(dispatch, pageLimit);
  }, [dispatch, postNotification.data]);

  const onChange = (page: any) => {
    setPageLimit((pre: any) => ({ ...pre, page: page.current }));
    getNotificationApi(dispatch, {
      page: page.current,
      limit: pageLimit.limit,
    });
  };
  const onSuccess = () => {
    setPageLimit((pre: any) => ({ ...pre, page: 1 }));
    getNotificationApi(dispatch, {
      page: 1,
      limit: pageLimit.limit,
    });
  };

  useEffect(() => {
    if (getNotification?.data?.data?.items) {
      setPageLimit((pre: any) => ({
        ...pre,
        page: getNotification?.data?.data?.meta?.currentPage,
      }));
      const data: any = getNotification?.data?.data?.items.map(
        (item: any, i: number) => {
          return {
            key: i + 1,
            title: (
              <span className="font-medium text-[.975rem] ">{item?.title}</span>
            ),
            date: (
              <span className="font-medium text-[.975rem] ">
                {moment(item?.updatedAt).format("D/M/YY")}
              </span>
            ),
            time: (
              <span className="font-medium text-[.975rem] ">
                {moment(item?.updatedAt).format("HH:MM:SS A")}
              </span>
            ),
            action: (
              <div
                className="flex gap-1 items-center mb-3 dark:bg-[#F0F1F3] dark:bg-opacity-50 dark:border-none border-black border-[1px] dark:text-black p-[8px] mt-[5px] cursor-pointer w-max rounded-full "
                onClick={() => {
                  const body = {
                    companyId: item?.companyId,
                    companyDepartmentId: item?.companyDepartmentId,
                    message: item?.message,
                    Status: item?.Status,
                    redirectUrl: item?.redirectUrl,
                    title: item?.title,
                    imageUrl: item?.imageUrl,
                    referenceId: item?.referenceId,
                  };
                  postNotificationApi(dispatch, body, onSuccess);
                }}
              >
                <BsEnvelopeArrowUp size={18} />
                Resend
              </div>
            ),
          };
        }
      );
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getNotification?.data]);

  return (
    <>
      <div>
        <div>
          <div>
            <Table
              scroll={{ x: true }}
              columns={columns}
              dataSource={dataSource}
              onChange={onChange}
              loading={getNotification?.loading || postNotification?.loading}
              pagination={{
                showSizeChanger: false,
                total: getNotification?.data?.data?.meta?.totalItems,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationTable;
