import { useDispatch, useSelector } from "react-redux";
import { SelectField } from "../../../../../../helpers/inputs/SelectField";
import SectionContainer from "../../../../../SectionContainer";
import { Col, Row } from "antd";
import { useEffect } from "react";
import { getProjectTypeApi } from "../../../../../../redux/api/InventoryManagement";

const ViewInventoryType = ({
  ontypeChange,
  form,
  disabled,
  setProjectSubType,
}: any) => {
  const dispatch = useDispatch();
  const getProjectType = useSelector((state: any) => state.getProjectType);
  useEffect(() => {
    getProjectTypeApi(dispatch, { page: 1, limit: 10 });
  }, []);

  const getProjectSubTypeByProjectTypeID = useSelector(
    (state: any) => state.getProjectSubTypeByProjectTypeID
  );
  return (
    <SectionContainer
      title="Inventory Type"
      subtitle="Set the Inventory Type according to your property"
    >
      <Row gutter={16}>
        <Col lg={8} xs={24}>
          <span className="text-[#292D35] font-medium text-base">
            Inventory Type
          </span>
          <SelectField
            name="inventoryTypes"
            disabled={disabled}
            rules={[{ required: true, message: "Property Type is Required" }]}
            options={getProjectType?.data?.items?.map((item: any) => ({
              label: item.title,
              value: item.id,
            }))}
            className="!h-[48px] mt-2"
            onChange={(id: any) => {
              form.setFieldValue("inventorySubTypes", null);

              ontypeChange(
                id,
                getProjectType?.data?.items?.filter((item: any) => item.id)[0]
                  ?.title
              );
            }}
          />
        </Col>
        <Col lg={8} xs={24}>
          <span className="text-[#292D35] font-medium text-base">
            Inventory Sub-Type
          </span>
          <SelectField
            name="inventorySubTypes"
            disabled={disabled}
            onChange={(e) => {
              const array = getProjectSubTypeByProjectTypeID?.data?.filter(
                (item: any) => item?.id === e
              );
              setProjectSubType(array?.[0]?.title);
            }}
            rules={[
              { required: true, message: "Property Sub-Type is Required" },
            ]}
            options={getProjectSubTypeByProjectTypeID?.data?.map(
              (item: any) => ({
                label: item.title,
                value: item.id,
              })
            )}
            className="!h-[48px] mt-2"
          />
        </Col>
      </Row>
    </SectionContainer>
  );
};

export default ViewInventoryType;
