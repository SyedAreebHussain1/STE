import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { DatePicker, theme } from "antd";
import dayjs from "dayjs";

const UsersSearch = ({ onSearch, userSearch, onDateChange }: any) => {
  const [focused, setFocused] = useState(false);
  function onInputFocus() {
    setFocused(true);
  }
  const themeAnt = theme.getDesignToken();
  function onInputBlur() {
    setFocused(false);
  }
  const disabledEndDate: any = (endDate: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate && endDate > today;
  };

  return (
    <div className="flex mx-4 py-3 items-center justify-between gap-3 border-b border-secondary">
      <div className="flex items-center dark:text-white">
        <CiSearch size={"20"} color={focused ? themeAnt.colorPrimary : ""} />
        <input
          placeholder="Search Members "
          className="flex-grow focus-visible:outline-none bg-transparent "
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          value={userSearch}
          onChange={(e: any) => onSearch(e.target.value)}
        />
      </div>
      <div>
        <DatePicker
          className={"dark-input"}
          onChange={(e) =>
            e ? onDateChange(dayjs(e).format("YYYY-MM-DD")) : onDateChange(null)
          }
          disabledDate={disabledEndDate}
        />
      </div>
    </div>
  );
};

export default UsersSearch;
