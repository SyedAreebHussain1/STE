import { Input, Select } from "antd";
import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { getRoleApi } from "../../../../services/api/onBoardingRoleAndIndustry";
import { QuestionItem } from "../OnBoardingList";

const OnBoardingRoleAndName = ({
  value,
  setValue,
  item,
  custom,
  setCustom,
}: {
  value: any;
  setValue: any;
  item: any;
  custom: boolean;
  setCustom: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [answer, setAnswer] = useState<{ userRole: string; userName: string }>({
    userRole: value.userRole,
    userName: value.userName,
  });

  const getonBoardingRole = useSelector(
    (state: RootState) => state.getonBoardingRole?.data
  );
  const { Option } = Select;
  const dispatch = useDispatch();

  const selectHandler = (val: string, keyVal: keyof typeof answer) => {
    setAnswer((prev) => ({ ...prev, [keyVal]: val }));
    setValue((prev: any) => ({ ...prev, [keyVal]: val }));
  };

  useEffect(() => {
    if (answer.userRole && answer.userName) {
      setValue((prev: any) => ({ ...prev, [item.keyValue]: true }));
    } else {
      setValue((prev: any) => ({ ...prev, [item.keyValue]: false }));
    }
  }, [answer.userRole, answer.userName]);

  useEffect(() => {
    if (!getonBoardingRole) getRoleApi(dispatch);
  }, []);

  return (
    <div className="p-[18px] bg-[#F4F3FF] rounded-lg">
      <h1 className="text-[13px] font-medium text-[#4A5366]">
        Please provide your full name and describe your position or affiliation
        with the business.
      </h1>
      <div className="flex mt-[10px] h-[40px] gap-3">
        <Input
          className={" flex-1 h-full "}
          placeholder="name"
          value={answer.userName}
          onChange={(e) => selectHandler(e.target.value, "userName")}
        />
        {!custom ? (
          <Select
            className={" flex-1 h-full "}
            placeholder={"Select Role"}
            value={answer.userRole !== "" ? answer.userRole : null}
            onChange={(e) => selectHandler(e, "userRole")}
            showSearch
            filterOption={(input: any, option: any) => {
              return option?.children
                ?.toLowerCase()
                .includes(input.toLowerCase());
            }}
            dropdownRender={(menu) => (
              <>
                <div className="w-full border-b-[#9494944d] border-b-[1px] mb-[2px]">
                  <button
                    className="p-[8px] py-[2px] text-[#016a70]  w-full text-left border-[0] shadow-none text-[14px] hover:bg-[#0000000a] rounded-md mb-[4px] font-semibold"
                    onClick={() => setCustom((pre) => !pre)}
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
            className={" flex-1 h-full "}
            placeholder="Enter Role"
            value={answer.userRole}
            onChange={(e) => selectHandler(e.target.value, "userRole")}
          />
        )}
      </div>
    </div>
  );
};

export default OnBoardingRoleAndName;
