import { Checkbox, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SectionContainer from "../../../../../SectionContainer";
import { getFromStorage } from "../../../../../../utils/storage";
import {
  getFacingApi,
  getUtilitesApi,
} from "../../../../../../redux/api/InventoryManagement";

const UtilitiesSection = ({
  current,
  setBedRoom,
  setBathRoom,
  setUtilies,
  setFacing,
}: any) => {
  const [projectType, setProjectType] = useState(null);

  const getUtilites = useSelector((state: any) => state.getUtilites);
  const getFacing = useSelector((state: any) => state.getFacing);

  const dispatch = useDispatch();
  useEffect(() => {
    if (current === 2) {
      getUtilitesApi(dispatch, { page: 1, limit: 10 });
      getFacingApi(dispatch, { page: 1, limit: 20 });
      const projectTypeName = getFromStorage("projectType");
      if (projectTypeName) {
        setProjectType(projectTypeName);
      }
    }
  }, [current]);
  return (
    <>
      <SectionContainer
        title={
          projectType === "Homes"
            ? "Rooms, Utilities and Facing"
            : "Utilities and Facing"
        }
        subtitle={
          projectType === "Homes"
            ? "Provide the rooms, Facing & Utilities for the inventory"
            : "Provide Facing & Utilities for the inventory"
        }
      >
        <Row gutter={16} className="mb-6">
          {projectType === "Homes" && (
            <Col xs={24}>
              <BedroomsSelect setBedRoom={setBedRoom} />
              <WashroomsSelect setBathRoom={setBathRoom} />
            </Col>
          )}
          <Col xs={24} className="mb-6">
            <span className="text-[.9375rem] text-[#292D35] font-medium pb-3 block">
              Utilities
            </span>
            <Row className="items-center">
              {getUtilites?.data?.items?.map((field: any) => (
                <Col xs={24} lg={8} className="px-[8px] mb-[25px]">
                  <Checkbox
                    key={field?.title}
                    id={field?.id}
                    onChange={(e: any) => {
                      if (e?.target?.checked) {
                        setUtilies((pre: any) => [...pre, field?.id]);
                      } else if (!e?.target?.checked) {
                        setUtilies((pre: any) =>
                          pre.filter((item: any) => item !== field?.id)
                        );
                      }
                    }}
                  >
                    {field.title}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={24} className="mb-6">
            <span className="text-[.9375rem] text-[#292D35] font-medium pb-3 block">
              Facing
            </span>
            <Row className="items-center">
              {getFacing?.data?.items?.map((field: any) => (
                <Col xs={24} lg={8} className="px-[8px] mb-[25px]">
                  <Checkbox
                    key={field?.title}
                    id={field?.id}
                    onChange={(e: any) => {
                      if (e?.target?.checked) {
                        setFacing((pre: any) => [...pre, field?.id]);
                      } else if (!e?.target?.checked) {
                        setFacing((pre: any) =>
                          pre.filter((item: any) => item !== field?.id)
                        );
                      }
                    }}
                  >
                    {field.title}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </SectionContainer>
    </>
  );
};

function BedroomsSelect({ setBedRoom }: any) {
  const [selected, setSelected] = useState("");
  const values = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <div className=" mb-6">
      <span className="text-[.9375rem] text-[#292D35] font-medium pb-3 block">
        Bedrooms
      </span>
      <div className="flex gap-3 items-center mb-6">
        {values.map((item) => {
          return (
            <div
              onClick={() => {
                setSelected(item);
                setBedRoom(item);
              }}
              key={item}
              className={`w-[47px] cursor-pointer h-[38px] rounded-[.3125rem] flex justify-center items-center border-2 ${
                item === selected
                  ? "border-primary bg-primary text-white"
                  : "border-[#667085]"
              } `}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function WashroomsSelect({ setBathRoom }: any) {
  const [selected, setSelected] = useState("");
  const values = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <>
      <span className="text-[.9375rem] text-[#292D35] font-medium pb-3 block">
        Washrooms
      </span>
      <div className="flex gap-3 items-center mb-6">
        {values.map((item) => {
          return (
            <div
              onClick={() => {
                setSelected(item);
                setBathRoom(item);
              }}
              key={item}
              className={`w-[47px] cursor-pointer h-[38px] rounded-[.3125rem] flex justify-center items-center border-2 ${
                item === selected
                  ? "border-primary bg-primary text-white"
                  : "border-[#667085]"
              } `}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UtilitiesSection;
