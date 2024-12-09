import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Select } from "antd";
import { AppDispatch } from "../../redux/store";
import SelectFieldWithLoadMore from "./SelectFieldWithLoadMore";

type ApiFunction = (
  id: number,
  dispatch: AppDispatch,
  { page, limit }: { page: number; limit: number },
  onSuccess?: (data: any) => void,
  search?: string
) => Promise<void>;

type ApiFunctionWithoutOutID = (
  dispatch: AppDispatch,
  { page, limit }: { page: number; limit: number },
  onSuccess?: (data: any) => void,
  search?: string
) => Promise<void>;

interface Props {
  byId?: number;
  name: string;
  api?: ApiFunction;
  apiwithoutId?: ApiFunctionWithoutOutID;
  onChange?: (value: any, name: string) => void;
  loading: boolean;
  lebal?: string;
  callaApi?: boolean;
  disable?: boolean;
  labelCustom?: (val: any) => void;
  multiple?: boolean;
  valueCustom?: (val: any) => void;
  searching?: boolean;
  placeholder?: any;
  className?: any;
};

const SelectFieldComponent = ({
  byId,
  name,
  api,
  onChange,
  loading,
  apiwithoutId,
  lebal,
  callaApi,
  disable,
  labelCustom,
  valueCustom,
  multiple = false,
  searching = false,
  placeholder,
}: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const searchRef: any = useRef();

  const dispatch: AppDispatch = useDispatch();

  const handleChange = () => {
    // if Api Take Id
    if (api && byId && searching == false) {
      api(
        byId,
        dispatch,
        { page: pageLimit.page + 1, limit: pageLimit.limit },
        onSuccessLoadMore
      );
    }
    // if Api Take Id and Search
    else if (api && byId && searching) {
      api(
        byId,
        dispatch,
        { page: pageLimit.page + 1, limit: pageLimit.limit },
        onSuccessLoadMore,
        searchValue
      );
    }
    // if Api dont Take Id
    else if (apiwithoutId && searching == false) {
      apiwithoutId(
        dispatch,
        { page: pageLimit.page + 1, limit: pageLimit.limit },
        onSuccessLoadMore
      );
    }
    // if Api dont Take Id but take search
    else if (apiwithoutId && searching) {
      apiwithoutId(
        dispatch,
        { page: pageLimit.page + 1, limit: pageLimit.limit },
        onSuccessLoadMore,
        searchValue
      );
    }

    setPageLimit((pre) => ({ ...pre, page: pre.page + 1 }));
  };

  const onSuccessLoadMore = (data: any) => {
    if (data.length > 0) {
      setData((pre) => [...pre, ...data]);
    }
  };

  const handleSearch = (search: string | undefined) => {
    if (api && byId) {
      api(
        byId,
        dispatch,
        { page: 1, limit: pageLimit.limit },
        onSearchSuccess,
        search
      );
    } else if (apiwithoutId) {
      apiwithoutId(
        dispatch,
        { page: 1, limit: pageLimit.limit },
        onSearchSuccess,
        search
      );
    }
    setPageLimit((pre) => ({ ...pre, page: 1 }));
  };

  useEffect(() => {
    if (callaApi) {
      if (api && byId) {
        api(byId, dispatch, { page: 1, limit: 10 }, onSuccess);
      } else if (apiwithoutId) {
        apiwithoutId(dispatch, { page: 1, limit: 10 }, onSuccess);
      }
      setPageLimit({ page: 1, limit: 10 });
    }
  }, [callaApi]);

  useEffect(() => {
    if (api && byId) {
      setSearchValue(undefined);
      api(byId, dispatch, { page: 1, limit: 10 }, onSuccess);
      setPageLimit({ page: 1, limit: 10 });
    }
  }, [byId]);

  useEffect(() => {
    if (apiwithoutId) {
      setSearchValue(undefined);
      apiwithoutId(dispatch, pageLimit, onSuccess);
    }
  }, []);

  const onSuccess = (data: any) => {
    setData(data);
  };
  const onSearchSuccess = (data: any) => {
    if (data?.length > 0) {
      setData(data);
    } else {
      setData([]);
    }
  };

  // search timer 5ms
  const onSearch = (e: any) => {
    setSearchValue(e);
    clearTimeout(searchRef.current);
    if (searching) {
      searchRef.current = setTimeout(() => {
        handleSearch(e);
      }, 500);
    }
  };

  const { Option } = Select;
  return (
    <SelectFieldWithLoadMore
      placeholder={placeholder ? placeholder : ""}
      multiple={multiple}
      data={data}
      disable={disable ? true : false}
      onChange={onChange ? (e) => onChange(e, name) : () => {}}
      loading={loading}
      searching={searching}
      onSearch={onSearch}
      loadmore={handleChange}
      searchValue={searchValue}
      option={data?.map((val, i) => (
        <Option key={i} value={valueCustom ? valueCustom(val) : val.id}>
          {labelCustom ? labelCustom(val) : lebal ? val?.[lebal] : val?.title}
        </Option>
      ))}
      name={name}
    />
  );
};
export default SelectFieldComponent;
