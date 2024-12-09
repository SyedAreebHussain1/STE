import { Pagination, Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import RoundedButton from "../../../../components/button/RoundedButton";
import { RootState } from "../../../../redux/store";
import {
  getBusinessPromotionStatsApi,
  getProductPromotionsByBusinessIdApi,
} from "../../../../services/api/ProductPromotion";
import ProductCard from "./helpers/ProductCard";
import ProductStats from "./helpers/ProductStats";
import ButtonWithSvg from "../../../../components/button/ButtonWithSvg";
import { noProductsImg } from "../../../../assets/ProductPromotions";
import { rightArrowIcon } from "../../../../assets";
import NoProducts from "./helpers/NoProducts";
import PlanLimitModal from "../../../../components/modals/PlanLimitModal";

interface Props {}
export type ProductCardT = {
  id: number;
  title: string;
  img: string;
  industry: string;
  rating: number;
  upvotes: number;
  createdAt: number;
};

const PromoteYourProduct = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );
  const getProductPromotionsByBusinessId = useSelector(
    (state: RootState) => state.getProductPromotionsByBusinessId
  );
  const businessStats = useSelector(
    (state: RootState) => state.getBusinessPromotionStats.data
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentSelectedBusiness?.business?.id)
      getProductPromotionsByBusinessIdApi(
        dispatch,
        pageLimit,
        currentSelectedBusiness?.business?.id
      );
  }, [currentSelectedBusiness?.business?.id]);

  function onPageChange(pageNumber: any) {
    setPageLimit((pre) => ({ ...pre, page: pageNumber }));
    getProductPromotionsByBusinessIdApi(
      dispatch,
      { page: pageNumber, limit: pageLimit.limit },
      currentSelectedBusiness?.business?.id
    );
  }

  useEffect(() => {
    if (currentSelectedBusiness?.business?.id)
      getBusinessPromotionStatsApi(
        dispatch,
        currentSelectedBusiness?.business?.id
      );
  }, [currentSelectedBusiness?.business?.id]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <div className="flex flex-col gap-4">
        <ProductStats stats={businessStats?.data} />

        <div className="flex justify-end items-center my-3">
          <RoundedButton
            title={"Add New Promotion"}
            type="primary"
            sm
            onClick={() => {
              getProductPromotionsByBusinessId?.data?.data?.items?.length <= 0
                ? navigate("/product/create")
                : setIsModalOpen(true);
            }}
          />
        </div>

        <Spin spinning={getProductPromotionsByBusinessId?.loading}>
          <div className="flex gap-2 flex-wrap">
            {getProductPromotionsByBusinessId?.data?.data?.items?.map(
              (card: any) => (
                <ProductCard key={card?.id} {...card} />
              )
            )}
          </div>
          {getProductPromotionsByBusinessId?.data?.data?.items?.length ===
            0 && <NoProducts />}
          <Pagination
            className="mb-4 lg:mb-4 pb-[20px] flex justify-center "
            current={pageLimit?.page}
            total={
              getProductPromotionsByBusinessId?.data?.data?.meta?.totalItems
            }
            hideOnSinglePage
            pageSize={pageLimit?.limit}
            showSizeChanger={false}
            responsive={true}
            simple
            onChange={onPageChange}
          />
        </Spin>
      </div>
      <PlanLimitModal
        title="Business"
        onCancel={handleCancel}
        isVisible={isModalOpen}
      />
    </PageContainer>
  );
};

export default PromoteYourProduct;
