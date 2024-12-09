import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { theme } from "antd";

const UsersSearch = () => {
  const themeAnt = theme.getDesignToken();

  const [focused, setFocused] = useState(false);
  function onInputFocus() {
    setFocused(true);
  }
  function onInputBlur() {
    setFocused(false);
  }
  return (
    <div className="flex mx-4 py-3 items-center gap-3 border-b border-secondary">
      <CiSearch size={"20"} color={focused ? themeAnt.colorPrimary : "#000"} />
      <input
        placeholder="Search Members"
        className="flex-grow focus-visible:outline-none bg-transparent"
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
    </div>
  );
};

export default UsersSearch;
