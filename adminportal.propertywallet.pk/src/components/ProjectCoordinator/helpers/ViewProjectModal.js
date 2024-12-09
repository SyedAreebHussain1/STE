import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Divider, Form, Modal, Row, Table, Tooltip } from 'antd'
import { getProjectByIDForModalApi } from '../../../redux/api/ProjectCoordinator'
import projectForProjectCooColumns from '../../../tableColumns/projectForProjectCooColumns.json'

const ViewProjectModal = ({ visible, toggle, value }) => {
  const [dataSource, setDataSource] = useState([])

  const dispatch = useDispatch()
  const getAllProjectForProjectCoo = useSelector(
    (state) => state.getAllProjectForProjectCoo
  )

  // useEffect(() => {
  //   if (visible) {
  //     getProjectByIDForModalApi(dispatch, value?.id)
  //   }
  // }, [value, visible])

  // useEffect(() => {
  //   // console.log(getAllProjectForProjectCoo)
  //   if (getAllProjectForProjectCoo?.data) {
  //     const data = getAllProjectForProjectCoo?.data?.data?.map((item) => {
  //       return {
  //         projectname: item?.projectName || '-',
  //         description: item?.description ? (
  //           <Tooltip placement="top" title={item?.description}>
  //             {item?.description?.substring(0, 18)}...
  //           </Tooltip>
  //         ) : (
  //           '-'
  //         ),
  //         address: item?.address ? (
  //           <Tooltip placement="top" title={item?.address}>
  //             {item?.address?.substring(0, 18)}...
  //           </Tooltip>
  //         ) : (
  //           '-'
  //         ),
  //         city: item?.city || '-',
  //         builderName: item?.builderName || '-',
  //       }
  //     })

  //     setDataSource(data)
  //   }
  // }, [getAllProjectForProjectCoo?.data])
  return (
    <Modal
      width={'841px'}
      title={
        <h3 className="text-[15px] font-medium leading-[22px] text-[#181818]">
          All Project
        </h3>
      }
      open={visible}
      onCancel={toggle}
      footer={null}
      centered={true}
    >
      <Divider />
      <>
        <Row className="bg-white">
          <Col lg={24} xs={24}>
            <Table
              dataSource={dataSource}
              columns={projectForProjectCooColumns}
              scroll={{ x: true }}
              loading={getAllProjectForProjectCoo.loading}
              //   pagination={{
              //     total:
              //       getAllProjectForProjectCoo?.data?.data?.meta?.totalPages *
              //       getAllProjectForProjectCoo?.data?.data?.meta?.itemsPerPage,
              //   }}
            />
          </Col>
        </Row>
      </>
    </Modal>
  )
}

export default ViewProjectModal
