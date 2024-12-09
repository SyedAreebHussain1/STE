import { Checkbox, Col, Row, Switch } from "antd";
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
  disabled,
  projectType,
  state,
  setUtilitsEditable,
  utilitsEditable,
  setFacingEditable,
  facingEditable,
}: any) => {
  const getUtilites = useSelector((state: any) => state.getUtilites);
  const getFacing = useSelector((state: any) => state.getFacing);

  const dispatch = useDispatch();
  useEffect(() => {
    if (current === 2) {
      getUtilitesApi(dispatch, { page: 1, limit: 10 });
      getFacingApi(dispatch, { page: 1, limit: 20 });
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
              <BedroomsSelect disabled={disabled} setBedRoom={setBedRoom} />
              <WashroomsSelect disabled={disabled} setBathRoom={setBathRoom} />
            </Col>
          )}
          <Col xs={24} className="mb-6">
            {/* <div className="flex justify-end items-center">
              <div className="text-[1.2rem] text-primary font-medium pr-[10px]">
                Utilits Edit
              </div>

              <Switch
                className=" bg-[gray]"
                onChange={(e: any) => setUtilitsEditable(e)}
              />
            </div> */}
            <span className="text-[.9375rem] text-[#292D35] font-medium pb-3 block">
              Utilities
            </span>
            <Row className="items-center">
              {getUtilites?.data?.items?.map((field: any) => (
                <Col xs={24} lg={8} className="px-[8px] mb-[25px]">
                  <Checkbox
                    key={field?.title}
                    id={field?.id}
                    disabled={!utilitsEditable}
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
            {/*<div className="flex justify-end items-center">
               <div className="text-[1.2rem] text-primary font-medium pr-[10px]">
                Facing Edit
              </div>

              <Switch
                className=" bg-[gray]"
                onChange={(e: any) => setFacingEditable(e)}
              />
            </div> */}
            <span className="text-[.9375rem] text-[#292D35] font-medium pb-3 block">
              Facing
            </span>
            <Row className="items-center">
              {getFacing?.data?.items?.map((field: any) => (
                <Col xs={24} lg={8} className="px-[8px] mb-[25px]">
                  {!facingEditable &&
                  state[0].filter(
                    (item: any) => item.facing.title == field?.title
                  ).length > 0 ? (
                    <Checkbox
                      key={field?.title}
                      id={field?.id}
                      disabled={!facingEditable}
                      checked
                    >
                      {field.title}
                    </Checkbox>
                  ) : (
                    <Checkbox
                      key={field?.title}
                      id={field?.id}
                      disabled={!facingEditable}
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
                  )}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </SectionContainer>
    </>
  );
};

function BedroomsSelect({ setBedRoom, disabled }: any) {
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
                if (!disabled) {
                  setSelected(item);
                  setBedRoom(item);
                }
              }}
              key={item}
              className={`w-[47px]  h-[38px] rounded-[.3125rem] flex justify-center items-center border-2 ${
                disabled
                  ? "bg-[#000000] opacity-[0.04] text-white"
                  : item === selected
                  ? "border-primary bg-primary text-white"
                  : "border-[#667085]"
              } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function WashroomsSelect({ setBathRoom, disabled }: any) {
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
                if (!disabled) {
                  setSelected(item);
                  setBathRoom(item);
                }
              }}
              key={item}
              className={`w-[47px]  h-[38px] rounded-[.3125rem] flex justify-center items-center border-2 ${
                disabled && item !== selected
                  ? "bg-[#000000] opacity-[0.04] text-white"
                  : item === selected
                  ? "border-primary bg-primary text-white"
                  : "border-[#667085]"
              } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
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
