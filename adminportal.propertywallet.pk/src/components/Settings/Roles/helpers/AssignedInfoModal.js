import React, { useEffect, useState } from 'react'
import { Button, Card, Modal, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import assignModuleInfoColumns from '../../../../tableColumns/assignModuleInfoColumns.json'
import { getAssignAppModuleApi } from '../../../../redux/api/Settings/Roles'
import { clearGetAssignAppModule } from '../../../../redux/slices/Settings/Roles/GetAssignAppModuleSlice'

const AssignedInfoModal = ({
  visible,
  toggleAssignInfoModal,
  assignModuleInfoData,
  setAssignModuleInfoData,
}) => {
  const dispatch = useDispatch()

  const assignAppModule = useSelector((state) => state.assignAppModule)
  const [dataSource, setDataSource] = useState(null)

  useEffect(() => {
    if (assignModuleInfoData) {
      getAssignAppModuleApi(dispatch, assignModuleInfoData.id)
    }
  }, [dispatch, assignModuleInfoData])

  useEffect(() => {
    if (assignAppModule?.data?.data !== null) {
      const data = assignAppModule?.data?.data.map((item) => {
        return {
          id: item.id,
          modulename: (
            <span className="text-base font-medium text-black">
              {item.title}
            </span>
          ),
          write:
            item.assignAppModule.length !== 0 &&
            item.assignAppModule[0].post == true ? (
              <div className={'w-3 h-3 bg-[#3FC271]   rounded-full mx-auto'} />
            ) : (
              <div
                className="w-3 h-3 rounded-full mx-auto"
                style={{ border: '1px solid red' }}
              />
            ),
          read:
            item.assignAppModule.length !== 0 &&
            item.assignAppModule[0].get == true ? (
              <div className={'w-3 h-3 bg-[#3FC271]   rounded-full mx-auto'} />
            ) : (
              <div
                className="w-3 h-3 rounded-full mx-auto"
                style={{ border: '1px solid red' }}
              />
            ),
          update:
            item.assignAppModule.length !== 0 &&
            item.assignAppModule[0].put == true ? (
              <div className={'w-3 h-3 bg-[#3FC271]   rounded-full mx-auto'} />
            ) : (
              <div
                className="w-3 h-3 rounded-full mx-auto"
                style={{ border: '1px solid red' }}
              />
            ),
          delete:
            item.assignAppModule.length !== 0 &&
            item.assignAppModule[0].delete == true ? (
              <div className={'w-3 h-3 bg-[#3FC271]   rounded-full mx-auto'} />
            ) : (
              <div
                className="w-3 h-3 rounded-full mx-auto"
                style={{ border: '1px solid red' }}
              />
            ),
        }
      })
      setDataSource(data)
    }
  }, [assignAppModule?.data?.data])
  function onCancel() {
    dispatch(clearGetAssignAppModule())
    setAssignModuleInfoData(null)
    toggleAssignInfoModal()
  }

  return (
    <Modal
      title="Assign rights"
      // style={{  }}
      width={1000}
      open={visible}
      onCancel={onCancel}
      footer={[
        <div className="flex justify-end">
          <Button
            size="middle"
            key="4"
            // type="primary"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            onClick={toggleAssignInfoModal}
          >
            Close
          </Button>
        </div>,
      ]}
      centered={true}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '100%' }} bordered={false}>
          <Table
            dataSource={dataSource}
            columns={assignModuleInfoColumns}
            // loading={loading}
            pagination={false}
            scroll={{
              //   x: 1500,
              y: 380,
            }}
            // onClick={handleOnClick}
          />
        </Card>
      </div>
    </Modal>
  )
}

export default AssignedInfoModal
