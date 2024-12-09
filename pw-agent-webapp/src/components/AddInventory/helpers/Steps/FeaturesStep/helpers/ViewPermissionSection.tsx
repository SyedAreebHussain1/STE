import React, { useEffect } from "react";
import SectionContainer from "../../../../../SectionContainer";
import { Col, Form, Row, Select } from "antd";
import { SelectField } from "../../../../../../helpers/inputs/SelectField";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { getViewUserApi } from "../../../../../../redux/api/InventoryManagement";
import { getFromStorage } from "../../../../../../utils/storage";

const ViewPermissionSection = () => {
  const dispatch = useDispatch();
  const getViewUser = useSelector((state: any) => state.getViewUser);

  useEffect(() => {
    const user = getFromStorage("user");
    getViewUserApi(dispatch, user?.userId, user?.role);
  }, []);

  return (
    <SectionContainer
      title={"View User"}
      subtitle={"Select users who can view the inventory."}
    >
      <Row gutter={24}>
        <Col xs={24} lg={8}>
          <span className="text-[#292D35] font-medium text-base">Users</span>
          <Form.Item name="viewUserIds" required={false}>
            <Select
              labelInValue
              className="w-full min-h-[40px]"
              mode="multiple"
            >
              {getViewUser?.data?.map((val: any, i: any) => (
                <Select.Option key={i} value={val.profile?.userId}>
                  {val?.profile?.fullName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </SectionContainer>
  );
};

export default ViewPermissionSection;
