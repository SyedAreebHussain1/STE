import React, { useEffect, useState } from "react";
import Container from "../../../../components/Container";
import { Col, Pagination, Row } from "antd";
import ListingsCard from "../../../../components/Listings/ListingsCard";
import { useDispatch, useSelector } from "react-redux";
import { getInventoriesDetailsApi } from "../../../../redux/api/Inventories";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { scrollToTop } from "../../../../utils/utils";

const InventoriesSection = () => {
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 12,
  });
  const params = useParams();
  const dispatch = useDispatch();
  const getlisting = useSelector((state) => state?.getInventoriesDetail);

  const onChange = (page) => {
    setPageLimit((pre) => ({
      ...pre,
      page: page,
    }));
  };

  useEffect(() => {
    scrollToTop()
    getInventoriesDetailsApi(dispatch, pageLimit, params?.id);
  }, [pageLimit]);
  return (
    <div className="mt-[20px]">
      {getlisting?.data?.data?.items.length > 0 ? (
        <div>
          <Container>
            <Row gutter={[16, 32]}>
              {getlisting?.data?.data?.items?.map((item) => {
                return (
                  <Col xs={24} sm={24} md={12} lg={8} key={nanoid()}>
                    <div className="border-solid rounded-[8px] border-[1px] border-[#E6E6E6] p-[12px]">
                      <ListingsCard
                        image={
                          item?.inventory?.project?.projectPhotos?.[0]?.photo
                        }
                        price={`PKR ${item?.inventory?.price}`}
                        title={item?.inventory?.project?.projectName}
                        location={item?.inventory?.project?.address}
                        size={`${item?.inventory?.landSize} ${item?.inventory?.landArea?.title}`}
                        id={item?.inventory?.id}
                        listingType={item?.listingType}
                        inVentoryType={item?.inventory?.inVentoryType}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
          <div className="flex  justify-center align-middle h-[100px] items-center">
            <Pagination
              pageSize={12}
              current={pageLimit.page}
              onChange={onChange}
              total={getlisting?.data?.data?.meta?.totalPages * 12}
              className="paginationInInventories"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default InventoriesSection;
