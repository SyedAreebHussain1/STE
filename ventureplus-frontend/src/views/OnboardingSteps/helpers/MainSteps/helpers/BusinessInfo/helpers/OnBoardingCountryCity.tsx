import { Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../../../../components/button/RoundedButton";
import useToggle from "../../../../../../../hooks/useToggle";
import { RootState } from "../../../../../../../redux/store";
import { getCountriesApi } from "../../../../../../../services/api/country";
import MapModal from "./MapModal";
type Answer = {
  country: string | null;
  city: string;
};

interface Props {
  item?: any;
  value?: any;
  setValue?: any;
}

const OnBoardingCountryCity = ({ state, setState }: any) => {
  const dispatch = useDispatch();
  const [open, toggle] = useToggle();
  const [place, setPlace] = useState<any>({
    address: state.address,
    country: state.country,
    city: state.city,
    latitude: state.latitude,
    longitude: state.longitude,
  });
  const countriesList = useSelector(
    (state: RootState) => state.getCountries?.data
  );

  useEffect(() => {
    if (!countriesList) getCountriesApi(dispatch);
  }, []);

  const changeHandler = (val: string, key: string) => {
    if (key != "address") {
      setState((pre: any) => ({ ...pre, [key]: val }));
    }
  };
  const { Option } = Select;

  useEffect(() => {
    if (place?.address) {
      changeHandler(place.country, "country");
      changeHandler(place.address, "address");
      changeHandler(place.city, "city");
    }
  }, [place]);

  return (
    <div className="flex w-full  flex-col  ">
      {open && (
        <MapModal
          open={open}
          closeHandler={toggle}
          place={place}
          setPlace={setPlace}
        />
      )}
      <div className="flex  flex-col gap-3">
        <label className="text-[15px] text-[#212838] font-medium">
          Country
        </label>
        <Select
          placeholder={"Country"}
          value={state.country}
          onChange={(e) => changeHandler(e, "country")}
          showSearch
          filterOption={(input: any, option: any) => {
            return option?.children
              ?.toLowerCase()
              .includes(input.toLowerCase());
          }}
          className=" w-full rounded-md  h-[48px] onBoardingSelectClassForbg "
        >
          {countriesList?.map((opt: any, i: number) => (
            <Option value={opt?.name} key={i}>
              {opt?.name}
            </Option>
          ))}
        </Select>
        <label className="text-[15px] text-[#212838] font-medium mt-2">
          City
        </label>
        <Input
          className=" rounded-md h-[48px] bg-[#FFFFFF]"
          placeholder="City"
          value={state.city}
          onChange={(e) => changeHandler(e.target.value, "city")}
        />
      </div>
      <h1 className="text-center mt-4 mb-1 font-medium text-[15px] text-[#000000]">
        OR
      </h1>
      <RoundedButton
        title={"Select Location"}
        type="primary"
        sm
        className="w-full h-[48px] rounded-lg mt-[10px]"
        onClick={toggle}
      />
    </div>
  );
};

export default OnBoardingCountryCity;
