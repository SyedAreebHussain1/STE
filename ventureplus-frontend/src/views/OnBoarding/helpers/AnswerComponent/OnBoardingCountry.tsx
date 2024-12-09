import { Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../components/button/RoundedButton";
import useToggle from "../../../../hooks/useToggle";
import { RootState } from "../../../../redux/store";
import { getCountriesApi } from "../../../../services/api/country";
import MapModal from "./mapModal";
import { QuestionItem } from "../OnBoardingList";
type Answer = {
  country: string | null;
  city: string;
};

interface Props {
  item: QuestionItem;
  value: any;
  setValue: any;
}

const OnBoardingCountry = ({ value, setValue, item }: Props) => {
  const [place, setPlace] = useState<any>({
    address: value.address,
    country: value.country,
    city: value.city,
    latitude: value.latitude,
    longitude: value.longitude,
  });
  const [open, toggle] = useToggle();
  const [answer, setAnswer] = useState<Answer>({ country: null, city: "" });
  const countriesList = useSelector(
    (state: RootState) => state.getCountries?.data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesList) getCountriesApi(dispatch);
  }, []);

  const changeHandler = (val: string, key: string) => {
    setValue((pre: any) => ({ ...pre, [key]: val }));
    if (key != "address") {
      setAnswer((pre) => ({ ...pre, [key]: val }));
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

  useEffect(() => {
    if (answer?.country && answer?.city) {
      setValue((pre: any) => ({ ...pre, [item.keyValue]: true }));
    } else {
      setValue((pre: any) => ({ ...pre, [item.keyValue]: false }));
    }
  }, [answer, item.keyValue, setValue]);

  useEffect(() => {
    setAnswer({
      country: value.country || null,
      city: value.city || "",
    });
  }, [value]);

  return (
    <div className="flex flex-col w-full ">
      {open && (
        <MapModal
          open={open}
          closeHandler={toggle}
          place={place}
          setPlace={setPlace}
        />
      )}
      <div className="flex flex-col gap-3">
        <label className="text-[15px] font-medium">Country</label>
        <Select
          placeholder={"Country"}
          value={answer.country}
          onChange={(e) => changeHandler(e, "country")}
          showSearch
          filterOption={(input: any, option: any) => {
            return option?.children
              ?.toLowerCase()
              .includes(input.toLowerCase());
          }}
          className=" w-full rounded-md h-[40px]  onBoardingSelectClassForbg "
        >
          {countriesList?.map((opt: any, i: number) => (
            <Option value={opt?.name} key={i}>
              {opt?.name}
            </Option>
          ))}
        </Select>
        <label className="text-[15px] font-medium">City</label>
        <Input
          className=" rounded-md h-[40px] bg-[#FFFFFF]"
          placeholder="City"
          value={answer.city}
          onChange={(e) => changeHandler(e.target.value, "city")}
        />
      </div>
      <h1 className="text-center mt-4 mb-1 font-bold">OR</h1>
      <RoundedButton
        title={"Select Location"}
        type="primary"
        sm
        className="w-full rounded-lg mt-[10px]"
        onClick={toggle}
      />
    </div>
  );
};

export default OnBoardingCountry;