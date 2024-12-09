import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { AppDispatch } from "../../redux/store";
import SelectFieldWithLoadMore from "./SelectFieldWithLoadMore";

type ApiFunction = (
  id: number,
  dispatch: AppDispatch,
  { page, limit }: { page: number; limit: number },
  onSuccess?: (data: any) => void
) => Promise<void>;

type ApiFunctionWithoutOutID = (
  dispatch: AppDispatch,
  { page, limit }: { page: number; limit: number },
  onSuccess?: (data: any) => void
) => Promise<void>;

type Props = {
  byId?: number;
  name: string;
  api?: ApiFunction;
  apiwithoutId?: ApiFunctionWithoutOutID;
  onChange?: (value: string, name: string) => void;
  loading: boolean;
  lebal?: string;
  callaApi?: boolean;
  disable?: boolean;
  labelCustom?: (val: any) => void;
  multiple?: boolean;
  required?: boolean;
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
  multiple = false,
  required = true,
}: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });

  const dispatch: AppDispatch = useDispatch();
  const onSuccessLoadMore = (data: any) => {
    if (data.length > 0) {
      setData((pre) => [...pre, ...data]);
    }
  };

  const handleChange = () => {
    if (api && byId) {
      api(
        byId,
        dispatch,
        { page: pageLimit.page + 1, limit: pageLimit.limit },
        onSuccessLoadMore
      );
    } else if (apiwithoutId) {
      apiwithoutId(
        dispatch,
        { page: pageLimit.page + 1, limit: pageLimit.limit },
        onSuccessLoadMore
      );
    }
    setPageLimit((pre) => ({ ...pre, page: pre.page + 1 }));
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
      api(byId, dispatch, { page: 1, limit: 10 }, onSuccess);
      setPageLimit({ page: 1, limit: 10 });
    }
  }, [byId]);

  useEffect(() => {
    if (apiwithoutId) {
      apiwithoutId(dispatch, pageLimit, onSuccess);
    }
  }, []);

  const onSuccess = (data: any) => {
    setData(data);
  };

  const { Option } = Select;
  return (
    <SelectFieldWithLoadMore
      required={required}
      multiple={multiple}
      data={data}
      disable={disable ? true : false}
      onChange={onChange ? (e) => onChange(e.value, name) : () => {}}
      loading={loading}
      loadmore={handleChange}
      option={data?.map((val, i) => (
        <Option key={i} value={val.id}>
          {labelCustom ? labelCustom(val) : lebal ? val?.[lebal] : val?.title}
        </Option>
      ))}
      name={name}
    />
  );
};
export default SelectFieldComponent;
