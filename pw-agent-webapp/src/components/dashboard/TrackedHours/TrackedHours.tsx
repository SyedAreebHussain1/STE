import SectionTitle from "../../SectionTitle"
import { Row, Col } from 'antd'
import HourSummary from "./HourSummary"
import HoursChart from "./HoursChart"
type Props = {}

const TrackedHours = (props: Props) => {
  return (
    <div className="bg-white rounded-[.5rem] shadow-sm p-6">
        <SectionTitle title={'TRACKED HOURS'} />
        <Row gutter={40}>
            <Col xs={24} sm={24} md={4}>
                <HourSummary label="WORKED HOURS" color="#66bb6a" value="533h 35m" />
                <HourSummary label="BREAKS" color="#ffca28" value="73h 7m" />
                <HourSummary label="OVERTIME HOURS" color="#f44336" value="0h 0m" />
            </Col>
            <Col xs={24} sm={24} md={20}>
                <HoursChart />
            </Col>
        </Row>
    </div>
  )
}



export default TrackedHours