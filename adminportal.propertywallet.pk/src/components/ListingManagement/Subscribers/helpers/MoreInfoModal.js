import React, { useEffect, useState } from 'react'
import { Button, Card, Modal, Table } from 'antd'

const MoreInfoModal = ({ visible, toggleMoreInfoModal, data }) => {
  const [dataSource, setDataSource] = useState(null)

  useEffect(() => {
    if (data !== null) {
      console.log('🚀 ~ useEffect ~ data:', data)
      setDataSource([
        {
          key: '1',
          noOfRefresh: (
            <span className="text-base font-medium text-black">
              {data?.noOfRefresh}
            </span>
          ),
          noListing: (
            <span className="text-base font-medium text-black">
              {data?.noListing}
            </span>
          ),
          numberOfMonth: (
            <span className="text-base font-medium text-black">
              {data?.numberOfMonth}
            </span>
          ),
          noOfUserLimitTotal: (
            <span className="text-base font-medium text-black">
              {data?.noOfUserLimitTotal}
            </span>
          ),
          digitalCatlog: (
            <span className="text-base font-medium text-black">
              {data?.digitalCatlog ? 'Yes' : 'No'}
            </span>
          ),
          hotListing: (
            <span className="text-base font-medium text-black">
              {data?.hotListing}
            </span>
          ),
          noOfAppt: (
            <span className="text-base font-medium text-black">
              {data?.noOfAppt}
            </span>
          ),
        },
      ])
    }
  }, [data])
  function onCancel() {
    toggleMoreInfoModal()
  }

  return (
    <Modal
      title="Subscription information"
      width={1000}
      open={visible}
      onCancel={onCancel}
      footer={false}
      centered={true}
    >
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}
      >
        <Table
          dataSource={dataSource}
          columns={[
            {
              title: 'Refreshes',
              dataIndex: 'noOfRefresh',
              key: 'noOfRefresh',
            },
            {
              title: 'listings',
              dataIndex: 'noListing',
              key: 'noListing',
            },
            {
              title: 'No of Months',
              dataIndex: 'numberOfMonth',
              key: 'numberOfMonth',
            },
            {
              title: 'User limits',
              dataIndex: 'noOfUserLimitTotal',
              key: 'noOfUserLimitTotal',
            },
            {
              title: 'Catalog',
              dataIndex: 'digitalCatlog',
              key: 'digitalCatlog',
            },
            {
              title: 'Hot Listing',
              dataIndex: 'hotListing',
              key: 'hotListing',
            },
            {
              title: 'Appointments',
              dataIndex: 'noOfAppt',
              key: 'noOfAppt',
            },
          ]}
          scroll={{
            //   x: 1500,
            y: 380,
          }}
        />
      </div>
    </Modal>
  )
}

export default MoreInfoModal
