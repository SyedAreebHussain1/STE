import { Col, Row } from "antd";
import OrganizeLocations from "./OrganizeLocations";
import LocationHeader from "./LocationHeader";
import Map from "./Map";
import { useEffect, useState } from "react";
import { ContentType } from "./SelectMapOrList";
import LocationTable from "./LocationTable";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyLocationApi } from "../../redux/api/Location";

const Location = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>(null);
  const getCompanyLocation = useSelector(
    (state: any) => state?.getCompanyLocation
  );

  useEffect(() => {
    getCompanyLocationApi(dispatch);
  }, []);

  useEffect(() => {
    if (getCompanyLocation?.data) {
      setData({
        lat: getCompanyLocation?.data?.latitude,
        lng: getCompanyLocation?.data?.longitude,
        locationRadius: getCompanyLocation?.data?.locationRadius,
        address: getCompanyLocation?.data?.address,
      });
    } else {
      setData(null);
    }
  }, [getCompanyLocation]);

  return (
    <Row>
      <Col xs={24}>
        {data && <LocationHeader data={data} />}
        <div className="h-[100vh] ">{data ? <Map data={data} /> : ""}</div>
      </Col>
    </Row>
  );
};

export default Location;
