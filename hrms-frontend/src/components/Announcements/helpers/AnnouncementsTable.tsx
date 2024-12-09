import React, { useEffect, useRef, useState } from "react";
import { Col, DatePicker, Divider, Row, Table } from "antd";
import type { TableColumnsType } from "antd";
import deleteIcon from "../../../assets/deleteIcon.png";
import editIcon from "../../../assets/editPenIcon.png";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../helpers/inputs/TextInput";
import {
  deleteAnnouncementsApi,
  getAnnouncementsApi,
} from "../../../redux/api/Announcements";
import AddOrEditAnnouncement from "./AddOrEditAnnouncement";
import useToggle from "../../../hooks/useToggle";
import moment from "moment";
import RoundedButton from "../../../helpers/button/RoundedButton";
import { IoMdDownload } from "react-icons/io";
import dayjs from "dayjs";

interface DataType1 {
  key: "1";
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
    title: "Attachment",
    dataIndex: "attachment",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const AnnouncementsTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<any>("");
  const [editId, setEditId] = useState<any>(null);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const dispatch = useDispatch();
  const [open, troggle] = useToggle();
  const getAnnouncements = useSelector((state: any) => state?.getAnnouncements);
  const deleteAnnouncements = useSelector(
    (state: any) => state?.deleteAnnouncements
  );
  const ref = useRef<any>();

  useEffect(() => {
    getAnnouncementsApi(dispatch, pageLimit);
  }, [dispatch]);

  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      getAnnouncementsApi(
        dispatch,
        { page: 1, limit: pageLimit.limit },
        { title: searchValue }
      );
      setPageLimit((pre: any) => ({ ...pre, page: 1 }));
    }, 1000);
  }, [searchValue]);

  const onChange = (page: any) => {
    setPageLimit((pre: any) => ({ ...pre, page: page.current }));
    getAnnouncementsApi(dispatch, {
      page: page.current,
      limit: pageLimit.limit,
    });
  };
  const deletehandler = (id: any) => {
    deleteAnnouncementsApi(dispatch, id, onSuccessDelete);
  };

  const dateSearching = (value: any) => {
    let date = "";
    if (value) {
      date = dayjs(value)?.format("YYYY-MM-DD");
    }
    getAnnouncementsApi(
      dispatch,
      { page: 1, limit: pageLimit.limit },
      { title: searchValue, date: date }
    );
  };

  const onSuccessDelete = () => {
    setPageLimit((pre: any) => ({ ...pre, page: 1 }));
    getAnnouncementsApi(dispatch, { page: 1, limit: pageLimit.limit });
  };

  const createDownloadLink = (url: any, filename: any) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.textContent = "Download Image";
    downloadLink.style.display = "block";
    downloadLink.style.marginTop = "10px";
    downloadLink.click();
    return;
  };

  const handleButtonClick = (url: any) => {
    const filename = "downloaded-image.pdf";
    createDownloadLink(url, filename);
  };

  useEffect(() => {
    setEditId(null);
    if (getAnnouncements?.data?.data?.items) {
      setPageLimit((pre: any) => ({
        ...pre,
        page: getAnnouncements?.data?.data?.meta?.currentPage,
      }));
      const data: any = getAnnouncements?.data?.data?.items.map(
        (item: any, i: number) => {
          return {
            key: i,
            title: (
              <span className="font-medium text-[.975rem] ">{item?.title}</span>
            ),
            date: (
              <span className="font-medium text-[.975rem] ">
                {moment(item?.createdAt).format("D/M/YY")}
              </span>
            ),
            attachment: (
              <div>
                {item?.attachment?.url ? (
                  <RoundedButton
                    onClick={() => handleButtonClick(item?.attachment?.url)}
                    title={
                      <div className=" flex items-center gap-1">
                        <IoMdDownload size={16} />
                        Download
                      </div>
                    }
                    className=" dark:text-black text-light-primary border-light-primary dark:!bg-white dark:hover:!bg-white dark:border-black"
                  />
                ) : (
                  "-"
                )}
              </div>
            ),
            action: (
              <div className={`flex  gap-2 items-center`}>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setEditId(item?.id);
                    troggle();
                  }}
                >
                  <img src={editIcon} alt="" />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => deletehandler(item?.id)}
                >
                  <img src={deleteIcon} alt="" />
                </span>
              </div>
            ),
          };
        }
      );
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAnnouncements?.data]);

  return (
    <>
      {open && (
        <AddOrEditAnnouncement open={open} onClose={troggle} id={editId} />
      )}
      <div>
        <div>
          <Row gutter={16}>
            <Col xs={12} md={8}>
              <p className="font-normal dark:text-white text-[#344054] text-[.8125rem] dark-input-label ">
                Search Announcement
              </p>
              <div>
                <TextInput
                  className=" !h-[39px]  dark-input"
                  placeholder="Enter name"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e?.target?.value)}
                />
              </div>
            </Col>
            <Col xs={12} md={8}>
              <p className="font-normal dark:text-white text-[#344054] text-[.8125rem] dark-input-label ">
                Date
              </p>
              <div>
                <DatePicker
                  className={"dark-input !h-[39px]"}
                  onChange={(e) => dateSearching(e)}
                />
              </div>
            </Col>
          </Row>
          <Divider />
          <div>
            <Table
              scroll={{ x: true }}
              columns={columns}
              dataSource={dataSource}
              onChange={onChange}
              loading={
                getAnnouncements?.loading || deleteAnnouncements?.loading
              }
              pagination={{
                showSizeChanger: false,
                total: getAnnouncements?.data?.data?.meta?.totalItems,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementsTable;
