import React, { useEffect, useState } from "react";
import { Button, Input, Select, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import couponsColumn from "../../../../utils/tableColumns/couponsColumn.json";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  deleteAllBlogsApi,
  getAllBlogsApi,
} from "../../../../services/api/Dashboard/Blogs/allBlogs";
import { deleteCouponApi, getCouponApi } from "../../../../services/api/Dashboard/Coupons";

const CouponTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [modalData, setModalData] = useState<any>(null);
  // const coupons = useSelector((state: RootState) => state?.allBlogs);
  const blogsCategory = useSelector((state: RootState) => state?.blogsCategory);
  const coupons = useSelector((state : RootState) => state?.coupons)
  const dispatch = useDispatch();

  useEffect(() => {
    getCouponApi(dispatch);
  }, []);


  useEffect(() => {
    if (coupons?.data?.data?.length > 0) {
      const data = coupons?.data?.data?.map((item: any) => {

        return {
          key: item.id,
          name: (
            <span className="font-normal text-[.75rem]  flex items-center gap-1">
              {item.name}
            </span>
          ),
          duration: (
            <span className="font-normal text-[.75rem]"> {item.duration}</span>
          ),
          percent_off: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item?.percent_off}
            </span>
          ),
          usageLimit: <span className="font-normal text-[.75rem]"> {item.usageLimit}</span>,
          usedCoupon: (
            <span className="font-normal text-[.75rem]"> {item.usedCoupon}</span>
          ),
          action: (
            <div className="flex gap-2">
              <DeleteOutlined
                className="text-[20px]"
                onClick={() =>
                  deleteCouponApi(dispatch, item?.couponCode, () =>
                    getCouponApi(dispatch))
                }
              />
            </div>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [coupons?.data]);

  const onSuccess = () => {
    getCouponApi(dispatch);
  };

  return (
    <>
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: true }}
          columns={couponsColumn}
          loading={coupons?.loading}
          dataSource={dataSource}
        />
      </div>
    </>
  );
};

export default CouponTable;
