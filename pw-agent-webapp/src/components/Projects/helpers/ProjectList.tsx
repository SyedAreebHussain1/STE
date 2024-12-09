import { Col, Pagination, Row } from "antd";
import ProjectCard from "../../ProjectCard";

type Props = {
  data: any;
  pageLimit: { page: number; limit: number };
  changeHandler: (page: number, limit: number) => void;
};

const ProjectList = ({ data, pageLimit, changeHandler }: Props) => {
  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <Row gutter={16}>
        {data?.items?.length > 0 &&
          data.items.map((item: any, i: any) => (
            <Col sm={24} md={24} lg={12} xl={12} xxl={8} key={i}>
              <ProjectCard
                id={item?.id}
                img={item?.projectPhotos?.[0]?.photo}
                address={`${
                  item?.address.length > 30
                    ? `${item?.address.substring(0, 23)}.....`
                    : item?.address
                }`}
                area={`${item?.inventory?.[0]?.landSize} ${item?.inventory?.[0]?.landArea?.title}`}
                commission={item?.inventory?.[0]?.cashDealCommissionAmount}
                title={item?.projectName}
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

export default ProjectList;
