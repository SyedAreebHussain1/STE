import { Pagination, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { RootState } from "../../redux/store";
import { getAllBusinessPromotionsApi } from "../../services/api/ProductPromotion";
import Banner from "./helpers/Banner";
import ProductCard from "./helpers/ProductCard";

export interface ProductCardI {
  id: number;
  name: string;
  description: string;
  promotionPhotos: PromotionPhoto[];
  createdBy: number;
  userUpVoteExsist: any;
}

interface PromotionPhoto {
  id: number;
  businessPromotionId: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
}

const ProductPromotions = () => {
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const dispatch = useDispatch();
  const [topVote, setTopVote] = useState<boolean>(true);
  const getAllBusinessPromotions = useSelector(
    (state: RootState) => state.getAllBusinessPromotions
  );

  useEffect(() => {
    getAllBusinessPromotionsApi(dispatch, pageLimit, topVote);
  }, [topVote]);

  function onPageChange(pageNumber: any) {
    setPageLimit((pre) => ({ ...pre, page: pageNumber }));
    getAllBusinessPromotionsApi(
      dispatch,
      { page: pageNumber, limit: pageLimit.limit },
      topVote
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <PageContainer>
        <Banner />
        <div className="w-full flex justify-between items-center my-4">
          <Select
            value={topVote}
            className="min-h-[30px] sm:w-60 w-full"
            placeholder="Select"
            onChange={(e) => setTopVote(e)}
          >
            <Select.Option key={"TopVotes"} value={true}>
              Most Upvoted
            </Select.Option>
            <Select.Option key={"TopVotes"} value={false}>
              Most Recent
            </Select.Option>
          </Select>
        </div>
        <Spin spinning={getAllBusinessPromotions?.loading}>
          <div className="flex md:justify-start justify-center w-full">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {getAllBusinessPromotions?.data?.data?.map(
                (card: ProductCardI, i: any) => (
                  <ProductCard
                    key={i}
                    {...card}
                    topVote={topVote}
                    pageLimit={pageLimit}
                  />
                )
              )}
            </div>
          </div>
          <Pagination
            className="mb-4 lg:mb-4 pb-[20px] flex justify-center "
            current={pageLimit?.page}
            total={getAllBusinessPromotions?.data?.data?.meta?.totalItems}
            hideOnSinglePage
            pageSize={pageLimit?.limit}
            showSizeChanger={false}
            responsive={true}
            simple
            onChange={onPageChange}
          />
        </Spin>
      </PageContainer>
    </div>
  );
};

export default ProductPromotions;
