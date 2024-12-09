import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { RootState } from "../../../../redux/store";
import {
  getProductPromotionByIdApi,
  getProductPromotionStatsApi,
} from "../../../../services/api/ProductPromotion";
import Comments from "./helpers/Comments";
import OthersProduct from "./helpers/OthersProduct";
import OwnProduct from "./helpers/OwnProduct";
import { Spin } from "antd";

const ProductDetail = () => {
  const { isAuth, userData } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoggedinUser, setisLoggedinUser] = useState<boolean | null>(null);
  const getProductPromotionById = useSelector(
    (state: RootState) => state.getProductPromotionById
  );
  const getProductPromotionStats = useSelector(
    (state: RootState) => state.getProductPromotionStats
  );

  useEffect(() => {
    getProductPromotionByIdApi(dispatch, Number(id));
    getProductPromotionStatsApi(dispatch, Number(id));
  }, []);

  useEffect(() => {
    //compare createdById by loggedin user id to determine interface
    if (
      userData?.companyUser?.id &&
      getProductPromotionById?.data?.data?.createdBy
    ) {
      if (
        userData?.companyUser?.id ===
        getProductPromotionById?.data?.data?.createdBy
      ) {
        setisLoggedinUser(true);
      } else {
        setisLoggedinUser(false);
      }
    }
  }, [
    userData?.companyUser?.id,
    getProductPromotionById?.data?.data?.createdBy,
  ]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="xs:w-[98vw]  2xl:w-[1836px]">
        <PageContainer>
          {getProductPromotionById?.loading ? (
            <div
              className={
                "fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50"
              }
            >
              <Spin size="large" />
            </div>
          ) : (
            <>
              {isLoggedinUser === null ? (
                <></>
              ) : isLoggedinUser ? (
                <OwnProduct
                  product={getProductPromotionById?.data?.data}
                  stats={getProductPromotionStats?.data?.data}
                />
              ) : (
                <OthersProduct
                  product={getProductPromotionById?.data?.data}
                  stats={getProductPromotionStats?.data?.data}
                />
              )}
            </>
          )}

          {/* comment section */}
          {
            <Comments
              user={{
                isLoggedinUser,
                profilePhoto: userData?.companyUser?.profilePhoto,
              }}
              reviews={getProductPromotionById?.data?.data?.reviews}
            />
          }
        </PageContainer>
      </div>
    </div>
  );
};

export default ProductDetail;
