import DummyIcon from '../../assest/icon/dummyicon.png'
import PropertiesIcon from '../../assest/icon/properties-icon.png'
import StaffIcon from '../../assest/icon/staff-icon.png'
import LocationIcon from '../../assest/icon/location.png'

const infoBoxStyle = {
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  width: '310px',
  position: 'absolute',
  left: '-200px',
  top: '-200px',
}
const InfoWindowContent = ({ infoBoxData }) => (
  <div style={infoBoxStyle}>
    <div className="flex items-center gap-[10px] mb-[16px]">
      <div className="w-[42px] h-[37px]">
        <img
          src={infoBoxData?.agencyLogo || 'https://placehold.co/45x32'}
          alt=""
          className="object-cover w-[45px] h-[32px]"
        />
      </div>
      <h3 className="text-base">{infoBoxData?.agencyName}</h3>
    </div>
    <div className="flex items-center gap-1 mb-3">
      <div>
        <img src={PropertiesIcon} alt="" />
      </div>
      <h3 className="text-[#667085] text-[12px]">
        {infoBoxData?.propertyCount} Properties
      </h3>
    </div>
    <div className="flex items-center gap-1 mb-3">
      <div>
        <img src={StaffIcon} alt="" />
      </div>
      <h3 className="text-[#667085] text-[12px]">
        {infoBoxData?.agencyNoOfStaff} No of Staff
      </h3>
    </div>
    <div className="flex items-center gap-1">
      <div>
        <img src={LocationIcon} alt="" />
      </div>
      <h3 className="text-[#66708562] text-[12px] font-light">
        {infoBoxData?.agencyAddress}
      </h3>
    </div>
  </div>
)

export default InfoWindowContent
