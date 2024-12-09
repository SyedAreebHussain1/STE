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
  value: any;
  setValue: any;
  item: QuestionItem;
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
  }, [answer]);

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
      <h1 className="text-[18px] font-medium text-[#212838]">
        If the business will operate internationally select the country that the
        head office will be situated in.
      </h1>
      <RoundedButton
        title={"Select Location"}
        type="primary"
        sm
        className="w-full rounded-lg mt-[10px]"
        onClick={toggle}
      />
      <div className="flex flex-col gap-3">
        <Select
          placeholder={"country"}
          value={answer.country}
          disabled
          onChange={(e) => changeHandler(e, "country")}
          className="w-full rounded-md h-[40px] "
        >
          {countriesList?.map((opt: any, i: number) => (
            <Option value={opt?.name} key={i}>
              <p className="mt-0 mb-0">{opt?.name}</p>
            </Option>
          ))}
        </Select>
        <Input
          className="rounded-md h-[40px]"
          placeholder="city"
          value={answer.city}
          onChange={(e) => changeHandler(e.target.value, "city")}
        />
      </div>
    </div>
  );
};

export default OnBoardingCountry;
