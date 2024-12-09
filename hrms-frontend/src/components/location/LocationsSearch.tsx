import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const LocationsSearch = () => {
  const [focused, setFocused] = useState(false);
  function onInputFocus() {
    setFocused(true);
  }
  function onInputBlur() {
    setFocused(false);
  }
  return (
    <div className="flex mx-4 py-3 items-center gap-3 border-b border-[#ff843340]">
      <CiSearch size={"20"} color={focused ? "#FF8433" : "#000"} />
      <input
        placeholder="Search Locations"
        className="flex-grow focus-visible:outline-none bg-transparent"
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
    </div>
  );
};

export default LocationsSearch;
