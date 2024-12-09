import { Col, Pagination, Row } from "antd";
import PropertyCard from "../../PropertyCard";

type Props = {
  data: any;
  pageLimit: { page: number; limit: number };
  changeHandler: (page: number, limit: number) => void;
};

const PropertiesList = ({ data, pageLimit, changeHandler }: Props) => {
  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <Row gutter={16}>
        {data?.items?.length > 0 &&
          data.items.map((item: any, i: any) => (
            <Col sm={24} md={24} lg={12} xl={12} xxl={8} key={i}>
              <PropertyCard
                id={item?.inventory?.[0]?.id}
                img={item?.projectPhotos?.[0]?.photo}
                address={`${
                  item?.address.length > 40
                    ? `${item?.address.substring(0, 32)}.....`
                    : item?.address
                }`}
                areaSize={item?.inventory?.[0]?.landSize}
                areaTitle={item?.inventory?.[0]?.landArea?.title}
                commission={item?.inventory?.[0]?.cashDealCommissionAmount}
                price={`PKR ${item?.inventory?.[0]?.price}`}
                bed={item?.inventory?.[0]?.bedRooms}
                baths={item?.inventory?.[0]?.washRooms}
              />
            </Col>
          ))}
        <Col sm={24}>
          <div className="flex justify-center py-[20px]">
            <Pagination
              showSizeChanger={false}
              current={pageLimit.page}
              pageSize={pageLimit.limit}
              total={data?.meta?.totalItem}
              onChange={(page, pageLimit) => changeHandler(page, pageLimit)}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PropertiesList;
