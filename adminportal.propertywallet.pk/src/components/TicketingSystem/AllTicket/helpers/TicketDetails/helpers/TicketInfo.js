import { Divider, Tooltip } from 'antd'
import UserInfoField from '../../../../../AppUser/UserDetail/heplers/UserInfoField'
import moment from 'moment'
const TicketInfo = ({ data }) => {
  return (
    <>
      <div className="bg-white rounded-lg row-span-2">
        <div className="pt-[20px] px-[24px] pb-[58px]">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
              <UserInfoField
                title="Customer Name"
                value={data?.customerName || '-'}
              />
              <UserInfoField
                title="Joining Date"
                value={
                  data?.createdAt
                    ? moment(data?.createdAt).format('MM/DD/YYYY')
                    : '-'
                }
              />
              <UserInfoField title="Phone No" value={data?.phoneNo || '-'} />
              <div>
                <span className="text-[#667085] text-xs font-medium">
                  Email Address
                </span>
                <div>
                  <span>
                    {' '}
                    <h4 className="text-[#1F2228] break-words">
                      {data?.customerEmail || '-'}
                    </h4>
                  </span>{' '}
                </div>
              </div>
              <UserInfoField title="Priority" value={data?.priority || '-'} />
              <UserInfoField
                title="Description"
                value={
                  <Tooltip title={data?.shortDescription}>
                    {data?.shortDescription.length > 20
                      ? `${data?.shortDescription.substring(0, 20)}...`
                      : data?.shortDescription || '-'}
                  </Tooltip>
                }
              />
            </div>
            <Divider />
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
              <div>
                <UserInfoField
                  title="Name"
                  value={<span>{data?.createdByUser?.fullName}</span> || '-'}
                />
              </div>
              <div>
                <span className="text-[#667085] text-xs font-medium">
                  Email Address
                </span>
                <div>
                  <span>
                    {' '}
                    <h4 className="text-[#1F2228] break-words">
                      {data?.createdByUser?.email || '-'}
                    </h4>
                  </span>{' '}
                </div>
              </div>
              <div>
                <UserInfoField
                  title="Phone No"
                  value={data?.createdByUser?.phone || '-'}
                />
              </div>
              <div>
                <div>
                  <span className="text-[#667085] text-xs font-medium">
                    Department
                  </span>
                  <div>
                    <span>
                      {' '}
                      <h4 className="text-[#1F2228] break-words">
                        {data?.createdByUser?.department?.title || '-'}
                      </h4>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketInfo
