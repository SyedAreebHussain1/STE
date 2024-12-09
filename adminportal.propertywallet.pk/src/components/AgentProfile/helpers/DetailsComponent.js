import UserInfoField from './UserInfoField'
import Status from '../../../utils/components/Status'
import AgencyName from '../../../components/assest/icon/agencyName.png'
import AgencyLocation from '../../../components/assest/icon/agencyLocation.png'
import NoOfStaff from '../../../components/assest/icon/noOfStaff.png'
import SaleOrderCreated from '../../../components/assest/icon/saleOrderCreated.png'
import TotalReferal from '../../../components/assest/icon/totalReferal.png'
import BusinessCard from '../../../components/assest/icon/business.png'
import { Col, Divider, Row, Button } from 'antd'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useModal } from '../../../utils/hooks/useModal'
import MapModal from './MapModal'

const DetailsComponent = () => {
  const getSearchForAgencyProfile = useSelector(
    (state) => state.getSearchForAgencyProfile
  )
  const [visible, toggle] = useModal()
  return (
    <>
      {visible && (
        <MapModal
          visible={visible}
          toggle={toggle}
          data={{
            lat: Number(
              getSearchForAgencyProfile?.data?.data?.profile?.agency?.latitude
            ),
            lng: Number(
              getSearchForAgencyProfile?.data?.data?.profile?.agency?.longitude
            ),
          }}
        />
      )}
      <div className="mt-[10px]">
        <Row gutter={16}>
          <Col lg={8} sm={24}>
            <div className="bg-white rounded-lg row-span-2">
              <div className="pt-[20px] px-[24px] pb-[58px]">
                <div className="flex justify-between items-center pb-5">
                  <h4 className="text-[15px] text-[#3D4350]">Basic Details</h4>
                  <Status type="active" />
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
                    <img
                      src={'https://placehold.co/90x90'}
                      alt=""
                      className="h-full object-fill"
                    />
                  </div>
                  <span>
                    <h3 className="text-[23px] text-[#1F2228] font-semibold">
                      {getSearchForAgencyProfile?.data?.data?.profile
                        ?.fullName || '-'}
                    </h3>
                  </span>
                  <span className="text-[15px] px-3 py-2 border border-[#C2C6CE] !rounded-full">
                    {getSearchForAgencyProfile?.data?.data?.role?.title || '-'}
                  </span>
                </div>
                <UserInfoField title="" />
                <Divider />
                <div className="flex flex-col gap-8">
                  <UserInfoField
                    title="Agency"
                    value={
                      getSearchForAgencyProfile?.data?.data?.profile?.agency
                        ?.agencyName || '-'
                    }
                    img={'https://placehold.co/50x42'}
                  />
                  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
                    <UserInfoField
                      title="Phone No"
                      value={
                        getSearchForAgencyProfile?.data?.data?.phone || '-'
                      }
                    />
                    <UserInfoField
                      title="Whatsapp No"
                      value={
                        getSearchForAgencyProfile?.data?.data?.phone || '-'
                      }
                    />
                    <UserInfoField
                      title="Email Address"
                      value={
                        getSearchForAgencyProfile?.data?.data?.email || '-'
                      }
                    />
                    <UserInfoField
                      title="Agency city"
                      value={
                        getSearchForAgencyProfile?.data?.data?.profile?.agency
                          ?.city || '-'
                      }
                    />
                    <UserInfoField
                      title="Joining Date"
                      value={
                        getSearchForAgencyProfile?.data?.data?.profile
                          ?.createdAt
                          ? moment(
                              getSearchForAgencyProfile?.data?.data?.profile
                                ?.createdAt
                            ).format('DD-MM-YYYY')
                          : '-'
                      }
                    />
                    <UserInfoField
                      title="User Code"
                      value={
                        getSearchForAgencyProfile?.data?.data?.profile
                          ?.userCode || '-'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={16} sm={24}>
            <Col sm={24} lg={24}>
              <div className="bg-white rounded-lg">
                <div className="pt-[20px] px-[24px] pb-[58px]">
                  <div className="flex justify-between items-center pb-[40px]">
                    <h4 className="text-[15px] text-[#3D4350]">
                      Agency & Inventory Details
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 2xl:grid-cols-3 gap-[37px]">
                    <UserInfoField
                      title="Agency"
                      value={
                        getSearchForAgencyProfile?.data?.data?.profile?.agency
                          ?.agencyName || '-'
                      }
                      img={AgencyName}
                    />
                    <UserInfoField
                      title="Agency Location"
                      value={
                        <Button
                          className="text-xs mt-1"
                          type="default"
                          disabled={
                            !getSearchForAgencyProfile?.data?.data?.profile
                              ?.agency?.latitude &&
                            !getSearchForAgencyProfile?.data?.data?.profile
                              ?.agency?.longitude
                          }
                          onClick={toggle}
                        >
                          View
                        </Button>
                      }
                      img={AgencyLocation}
                    />
                    <UserInfoField
                      title="No of Staff"
                      value={
                        getSearchForAgencyProfile?.data?.data?.staffCount || '0'
                      }
                      img={NoOfStaff}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={24} lg={24}>
              <div className="bg-white rounded-lg">
                <div className="pt-[20px] px-[24px] pb-[58px]">
                  <div className="flex justify-between items-center pb-[40px]">
                    <h4 className="text-[15px] text-[#3D4350]">
                      All Activities
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-dense gap-[37px]">
                    <UserInfoField
                      title="Total Referrals"
                      value={
                        getSearchForAgencyProfile?.data?.data?.totalReferrals ||
                        '-'
                      }
                      img={TotalReferal}
                    />
                    <UserInfoField
                      title="Package"
                      value={
                        getSearchForAgencyProfile?.data?.data?.profile?.agency
                          ?.pwAssignPackage?.pwSubPackage?.pwPackage?.title ||
                        '-'
                      }
                      img={TotalReferal}
                    />
                    <UserInfoField
                      title="Package Plan"
                      value={
                        getSearchForAgencyProfile?.data?.data?.profile?.agency
                          ?.pwAssignPackage?.pwSubPackage?.title || '-'
                      }
                      img={BusinessCard}
                    />
                    <UserInfoField
                      title="Package expiry Date"
                      value={
                        getSearchForAgencyProfile?.data?.data?.profile?.agency
                          ?.pwAssignPackage?.expireAt
                          ? moment(
                              getSearchForAgencyProfile?.data?.data?.profile
                                ?.agency?.pwAssignPackage?.expireAt
                            ).format('DD-MM-YYYY')
                          : '-'
                      }
                      img={SaleOrderCreated}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default DetailsComponent
