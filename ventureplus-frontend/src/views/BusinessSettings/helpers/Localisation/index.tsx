import { Col, Form, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { Dispatch, SetStateAction, useEffect } from "react";
import { SelectedCardType } from "../..";
import RoundedButton from "../../../../components/button/RoundedButton";
import BusinessSettingsLayout from "../BusinessSettingsLayout";
import { getCountriesApi } from "../../../../services/api/country";
import { useDispatch, useSelector } from "react-redux";
import { getLanguagesApi } from "../../../../services/api/language";
import { getCurrenciesApi } from "../../../../services/api/currency";
import { RootState } from "../../../../redux/store";
import {
  getBusinessPlanByIdApi,
  updateBusinessLocalisationApi,
} from "../../../../services/api/BusinessPlan";
import {
  getBusinessByIdApi,
  updateBusinessOverviewApi,
} from "../../../../services/api/Business";

type localisationContentI = {
  headerTitle: SelectedCardType;
  headerDescription: string;
  headerTagTitle: string;
};

type onFinishType = {
  language: number;
  country: string;
  currency: number;
};
const localisationContent: localisationContentI = {
  headerTitle: "Localization",
  headerDescription:
    "Adapting products and services to different regions and cultures ",
  headerTagTitle: "Regional Settings",
};

interface LocalisationI {
  selectedCard: SelectedCardType;
  setSelectedCard: Dispatch<SetStateAction<SelectedCardType>>;
}

const Localisation = ({ selectedCard, setSelectedCard }: LocalisationI) => {
  const [form] = useForm();
  const dispatch = useDispatch();

  const countriesList = useSelector(
    (state: RootState) => state.getCountries?.data
  );
  const languagesList = useSelector(
    (state: RootState) => state.getLanguages?.data
  );
  const currenciesList = useSelector(
    (state: RootState) => state.getCurrencies?.data
  );
  const getBusinessById = useSelector(
    (state: RootState) => state.getBusinessById.data
  );
  const getBusinessPlanById = useSelector(
    (state: RootState) => state.getBusinessPlanById.data
  );
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );

  useEffect(() => {
    if (getBusinessById?.data) {
      form.setFieldsValue({
        currency: getBusinessById?.data?.currencyId,
        country: getBusinessById?.data?.country,
        language: getBusinessPlanById?.data?.languageId,
      });
    }
  }, [getBusinessById, getBusinessPlanById]);

  const onUpdateLocalisation = () => {
    getBusinessPlanByIdApi(
      dispatch,
      currentSelectedBusinessPlan?.businessPlan?.id
    );
  };

  const onUpdateOverview = () => {
    getBusinessByIdApi(dispatch, currentSelectedBusiness?.business?.id);
  };

  const onFinish = (values: onFinishType) => {
    updateBusinessLocalisationApi(
      dispatch,
      currentSelectedBusinessPlan?.businessPlan?.id,
      {
        languageId: values.language,
        currencyId: values.currency,
        country: values.country,
      },
      onUpdateLocalisation
    );
  };

  useEffect(() => {
    getCountriesApi(dispatch);
    getLanguagesApi(dispatch);
    getCurrenciesApi(dispatch);
    if (!getBusinessPlanById)
      getBusinessByIdApi(dispatch, currentSelectedBusiness?.business?.id);
    getBusinessPlanByIdApi(
      dispatch,
      currentSelectedBusinessPlan?.businessPlan?.id
    );
  }, []);

  return (
    <BusinessSettingsLayout
      {...localisationContent}
      selectedCard={selectedCard}
      setSelectedCard={setSelectedCard}
    >
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="editCampaignName"
      >
        <Row gutter={16} className="!w-full">
          <Col xl={14} md={24} xs={24}>
            <div>
              <label htmlFor="currency" className="input-label">
                Currency
              </label>
              <Form.Item
                className="w-full min-h-[48px] mt-2"
                name="currency"
                id="currency"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Select
                  className="w-full min-h-[48px]"
                  placeholder="Select Currency"
                  showSearch
                  filterOption={(input: any, option: any) => {
                    return option?.children
                      ?.toLowerCase()
                      .includes(input.toLowerCase());
                  }}
                >
                  {currenciesList?.length > 0 &&
                    currenciesList?.map((currency: any) => (
                      <Select.Option key={currency?.id} value={currency?.id}>
                        {currency?.name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
          </Col>

          <Col xl={14} md={24} xs={24}>
            <div>
              <label htmlFor="language" className="input-label">
                Language
              </label>
              <Form.Item
                className="w-full min-h-[48px] mt-2"
                name="language"
                id="language"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Select
                  className="w-full min-h-[48px]"
                  placeholder="Select Language"
                  showSearch
                  filterOption={(input: any, option: any) => {
                    return option?.children
                      ?.toLowerCase()
                      .includes(input.toLowerCase());
                  }}
                >
                  {languagesList?.length > 0 &&
                    languagesList?.map((language: any) => (
                      <Select.Option key={language?.id} value={language?.id}>
                        {language?.name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
          </Col>

          <Col xl={14} md={24} xs={24}>
            <div>
              <label htmlFor="country" className="input-label">
                Country
              </label>
              <Form.Item
                className="w-full min-h-[48px] mt-2"
                name="country"
                id="country"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Select
                  className="w-full min-h-[48px]"
                  placeholder="Select Country"
                  showSearch
                  filterOption={(input: any, option: any) => {
                    return option?.children
                      ?.toLowerCase()
                      .includes(input.toLowerCase());
                  }}
                >
                  {countriesList?.length > 0 &&
                    countriesList?.map((country: any) => (
                      <Select.Option key={country?.id} value={country?.name}>
                        {country?.name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
          </Col>
          <Col xl={14} md={24} xs={24}>
            <RoundedButton
              htmlType="submit"
              title={"Save"}
              type="primary"
              className="!w-full"
              sm
            />
          </Col>
        </Row>
      </Form>
    </BusinessSettingsLayout>
  );
};

export default Localisation;
