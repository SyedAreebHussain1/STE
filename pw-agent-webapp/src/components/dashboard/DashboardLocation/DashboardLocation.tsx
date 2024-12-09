import SectionTitle from "../../SectionTitle";
import { Row, Col } from "antd";
import Map from "./Map";
type Props = {};

const Location = (props: Props) => {
  return (
    <div className="bg-white rounded-[.5rem] shadow-sm p-6">
      <SectionTitle title={"Location"} />
      <Map />
    </div>
  );
};

export default Location;
