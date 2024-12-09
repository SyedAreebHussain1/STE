import React, { useEffect, useState } from "react";
import { Table, Input, Button, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import {
  deleteAffiliateUserApi,
  getAffiliateUserApi,
} from "../../../../services/api/Dashboard/Users";
import affilateUserColumn from "../../../../utils/tableColumns/affilateUser.json";

const AffiliateTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCompanyUsers, setFilteredCompanyUsers] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const users = useSelector((state: RootState) => state?.users);

  useEffect(() => {
    getAffiliateUserApi(dispatch, { ...pageLimit }, searchTerm);
  }, [pageLimit, searchTerm]);

  useEffect(() => {
    if (users?.data?.data?.items?.length > 0) {
      const data = users?.data?.data?.items?.map((item: any) => ({
        key: item.id,
        name: (
          <span className="font-normal text-[.75rem] flex items-center gap-1">
            {item.name || "-"}
          </span>
        ),
        email: (
          <span className="font-normal text-[.75rem]">{item.email || "-"}</span>
        ),
        phoneNo: (
          <span className="font-normal text-[.75rem]">
            {item.phoneNo || "-"}
          </span>
        ),
        websiteCount: (
          <span className="font-normal text-[.75rem]">
            {item.websiteCount || "-"}
          </span>
        ),
        signUpsCounts: (
          <span className="font-normal text-[.75rem]">
            {item.signUpsCounts || "-"}
          </span>
        ),
        subscriptionsCounts: (
          <span className="font-normal text-[.75rem]">
            {item.subscriptionsCounts || "-"}
          </span>
        ),
        refLink: (
          <a href={item?.refLink} className="font-normal text-[.75rem]">
            {item.refLink || "-"}
          </a>
        ),
        action: (
          <div className="flex gap-2">
            <Button onClick={() => handleOpenModal(item, true)}>
              Sign Ups
            </Button>
            <Button onClick={() => handleOpenModal(item, false)}>
              Subscriptions
            </Button>
            <DeleteOutlined
              className="text-[20px]"
              onClick={() =>
                deleteAffiliateUserApi(dispatch, Number(item?.id), onSuccess)
              }
            />
          </div>
        ),
      }));

      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [users?.data, searchTerm]);

  const onSuccess = (response: any) => {
    getAffiliateUserApi(dispatch, { page: 1, limit: 10 });
  };

  const handleOpenModal = (affiliateUser: any, isFree: boolean) => {
    filterCompanyUsers(affiliateUser, isFree);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setFilteredCompanyUsers([]);
  };

  const filterCompanyUsers = (affiliateUser: any, isSignUp: boolean) => {
    const filteredData = affiliateUser.companyUser?.filter(
      (companyUser: any) => {
        const packageInfo = companyUser.company?.assignPackage?.[0]?.package;
        if (isSignUp) {
          return affiliateUser.signUpsCounts > 0;
        }
        return packageInfo?.isFree === false;
      }
    );

    if (filteredData?.length > 0) {
      const companyUserData = filteredData.map((companyUser: any) => ({
        key: companyUser.id,
        name: (
          <span className="font-normal text-[.75rem] flex items-center gap-1">
            {companyUser.name || "-"}
          </span>
        ),
        email: (
          <span className="font-normal text-[.75rem]">
            {companyUser.email || "-"}
          </span>
        ),
        phoneNo: (
          <span className="font-normal text-[.75rem]">
            {companyUser.phoneNo || "-"}
          </span>
        ),
        packageTitle: (
          <span className="font-normal text-[.75rem]">
            {companyUser.company?.assignPackage?.[0]?.package?.title || "-"}
          </span>
        ),
        interval: (
          <span className="font-normal text-[.75rem]">
            {companyUser.company?.assignPackage?.[0]?.package?.interval || "-"}
          </span>
        ),
      }));

      setFilteredCompanyUsers(companyUserData);
    } else {
      setFilteredCompanyUsers([]);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search by user"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: 300 }}
          prefix={<SearchOutlined />}
          size="large"
        />
      </div>

      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: 900 }}
          columns={affilateUserColumn}
          loading={users?.loading}
          dataSource={dataSource}
          pagination={{
            total: users?.data?.data?.meta?.totalItems,
            onChange: (total: number, range: number) => {
              setPageLimit({
                page: total,
                limit: range,
              });
            },
          }}
        />
      </div>

      {/* Company users table */}
      {filteredCompanyUsers.length > 0 && (
        <>
          <Modal
            title="Company Users"
            open={isModalVisible}
            onCancel={handleCloseModal}
            width={1100}
            footer={null}
          >
            <Table
              scroll={{ x: 900 }}
              columns={[
                {
                  title: "Name",
                  dataIndex: "name",
                  key: "name",
                },
                {
                  title: "Email",
                  dataIndex: "email",
                  key: "email",
                },
                {
                  title: "Phone No",
                  dataIndex: "phoneNo",
                  key: "phoneNo",
                },
                {
                  title: "Package Title",
                  dataIndex: "packageTitle",
                  key: "packageTitle",
                },
                {
                  title: "Interval",
                  dataIndex: "interval",
                  key: "interval",
                },
              ]}
              dataSource={filteredCompanyUsers}
              pagination={false}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default AffiliateTable;
