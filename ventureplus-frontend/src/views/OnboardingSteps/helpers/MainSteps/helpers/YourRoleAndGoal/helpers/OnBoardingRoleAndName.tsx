import { Button, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../../redux/store";
import { getRoleApi } from "../../../../../../../services/api/onBoardingRoleAndIndustry";

const OnBoardingRoleAndName = ({ setState, state, setCustom, custom }: any) => {
  const getonBoardingRole = useSelector(
    (state: RootState) => state.getonBoardingRole?.data
  );
  const { Option } = Select;
  const dispatch = useDispatch();

  const selectHandler = (val: string, keyVal: string) => {
    setState((prev: any) => ({ ...prev, [keyVal]: val }));
    // setValue((prev: any) => ({ ...prev, [keyVal]: val }));
  };

  useEffect(() => {
    if (!getonBoardingRole) getRoleApi(dispatch);
  }, []);

  return (
    <div className=" sm:bg-[#FFFFFF] bg-none rounded-lg w-full">
      <div className="flex flex-col mt-[] gap-3 pb-[]">
        <div className="w-full h-full flex flex-col">
          <label className="text-[15px] font-medium text-[#212838] mb-3">
            Your Role
          </label>
          {!custom ? (
            <Select
              className="h-[48px] onBoardingSelectClassForbg"
              placeholder="Select Role"
              value={state.userRole !== "" ? state.userRole : null}
              onChange={(e) => selectHandler(e, "userRole")}
              showSearch
              filterOption={(input: any, option: any) =>
                option?.children?.toLowerCase().includes(input.toLowerCase())
              }
              dropdownRender={(menu) => (
                <>
                  <div className="w-full border-b-[#9494944d] border-b-[1px] mb-[2px]">
                    <button
                      className="p-[8px] py-[2px] text-[#016a70] w-full text-left border-[0] shadow-none text-[14px] hover:bg-[#0000000a] rounded-md mb-[4px] font-semibold"
                      onClick={() => {
                        setCustom(true);
                        setState((prev: any) => ({ ...prev, userRole: "" }));
                      }}
                    >
                      <span className="text-[16px] mr-2">+</span>Add Custom
                    </button>
                  </div>
                  {menu}
                </>
              )}
            >
              {getonBoardingRole?.map((opt: any, i: number) => (
                <Option value={opt?.title} key={i}>
                  {opt?.title}
                </Option>
              ))}
            </Select>
          ) : (
            <Input
              className="h-[40px] bg-[#FAFAFA]"
              placeholder="Enter Role"
              value={state.userRole}
              onChange={(e) => selectHandler(e.target.value, "userRole")}
              onBlur={() => {
                if (state.userRole === "") {
                  setCustom(false);
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OnBoardingRoleAndName;
