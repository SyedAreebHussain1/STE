import { Button, Card, Modal, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import assignModuleColumns from '../../../../tableColumns/assignModuleColumns.json'
import {
  assignModuleRoleApi,
  getAssignAppModuleApi,
} from '../../../../redux/api/Settings/Roles'
import { useDispatch, useSelector } from 'react-redux'
import { errorMessage } from '../../../../utils/message'
import { AddTypeToArr } from '../../../../utils/utils'
import { clearGetAssignAppModule } from '../../../../redux/slices/Settings/Roles/GetAssignAppModuleSlice'

const AssignModuleModal = ({
  visible,
  toggleAssignModuleModal,
  assignModuleData,
  setAssignModuleData,
}) => {
  const dispatch = useDispatch()
  const assignAppModuleData = useSelector((state) => state.assignAppModule)
  const assignModuleRole = useSelector((state) => state.assignModuleRole)
  const [dataSource, setDataSource] = useState(null)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    if (assignModuleData) {
      getAssignAppModuleApi(dispatch, assignModuleData.id)
    }
  }, [dispatch, assignModuleData])
  const onChangeVal = (check, id, name) => {
    if (name === 'assignModule') {
      let newArr = posts.map((item) => {
        if (item.id === id && check === true) {
          item.assignAppModule = [
            {
              get: false,
              post: false,
              put: false,
              delete: false,
              adminRoleId: assignModuleData.id,
              appModuleId: item.id,
              id: item.id,
            },
          ]
        } else if (item.id === id && check === false) {
          item.assignAppModule = []
        }
        return item
      })
      setPosts(newArr)
    } else {
      let newArr = posts.map((item) => {
        if (item.id === id) {
          item.assignAppModule[0][[name]] = check
        }
        return item
      })
      setPosts(newArr)
    }
  }

  useEffect(() => {
    if (assignAppModuleData?.data?.data !== null) {
      let arrayCopy = JSON.parse(JSON.stringify(assignAppModuleData))
      setPosts(arrayCopy?.data?.data)
    }
  }, [assignAppModuleData?.data?.data])

  useEffect(() => {
    if (posts?.length > 0) {
      const data = posts.map((item, i) => {
        return {
          id: item.id,
          modulename: (
            <span className="text-base font-medium text-black">
              {item.title}
            </span>
          ),
          module: (
            <input
              type="checkbox"
              className="input bg-[##FFFFFF] h-[18px] w-[18px] cursor-pointer"
              checked={item.assignAppModule.length === 0 ? false : true}
              onChange={(e) =>
                onChangeVal(e.target.checked, item.id, 'assignModule')
              }
            />
          ),
          write: (
            <input
              type="checkbox"
              className="input bg-[##FFFFFF] h-[18px] w-[18px] cursor-pointer"
              checked={
                item.assignAppModule.length !== 0 &&
                item.assignAppModule[0].post === true
              }
              disabled={item.assignAppModule.length === 0}
              onChange={(e) => onChangeVal(e.target.checked, item.id, 'post')}
            />
          ),
          read: (
            <input
              type="checkbox"
              className="input bg-[##FFFFFF] h-[18px] w-[18px] cursor-pointer"
              checked={
                item.assignAppModule.length !== 0 &&
                item.assignAppModule[0].get === true
              }
              disabled={item.assignAppModule.length === 0}
              onChange={(e) => onChangeVal(e.target.checked, item.id, 'get')}
            />
          ),
          update: (
            <input
              type="checkbox"
              className="input bg-[##FFFFFF] h-[18px] w-[18px] cursor-pointer"
              checked={
                item.assignAppModule.length !== 0 && item.assignAppModule[0].put
              }
              disabled={item.assignAppModule.length === 0}
              onChange={(e) => onChangeVal(e.target.checked, item.id, 'put')}
            />
          ),
          delete: (
            <input
              type="checkbox"
              className="input bg-[##FFFFFF] h-[18px] w-[18px] cursor-pointer"
              checked={
                item.assignAppModule.length !== 0 &&
                item.assignAppModule[0].delete === true
              }
              disabled={item.assignAppModule.length === 0}
              onChange={(e) => onChangeVal(e.target.checked, item.id, 'delete')}
            />
          ),
        }
      })
      setDataSource(data)
    }
  }, [posts])

  function handleSubmit() {
    let tempArr = []
    let tempArrFromApi = []
    for (let i = 0; i < posts.length; i++) {
      const { assignAppModule } = posts[i]
      if (assignAppModule.length === 0) {
        continue
      }
      if (
        assignAppModule.length !== 0 &&
        assignAppModule[0]?.get === false &&
        assignAppModule[0]?.post === false &&
        assignAppModule[0]?.put === false &&
        assignAppModule[0]?.delete === false
      ) {
        errorMessage(
          'Please Check one of above rights after Check the module. Thank You'
        )
        return
      } else if (
        assignAppModule.length !== 0 ||
        assignAppModule[0]?.get !== false ||
        assignAppModule[0]?.post !== false ||
        assignAppModule[0]?.put !== false ||
        assignAppModule[0]?.delete !== false
      ) {
        tempArr.push({
          get: assignAppModule[0]?.get,
          post: assignAppModule[0]?.post,
          put: assignAppModule[0]?.put,
          delete: assignAppModule[0]?.delete,
          adminRoleId: assignAppModule[0]?.adminRoleId,
          appModuleId: assignAppModule[0]?.appModuleId,
        })
      }
    }
    for (let i = 0; i < assignAppModuleData?.data?.data.length; i++) {
      const { assignAppModule } = assignAppModuleData?.data?.data[i]
      if (assignAppModule.length === 0) {
        continue
      }
      tempArrFromApi.push({
        get: assignAppModule[0]?.get,
        post: assignAppModule[0]?.post,
        put: assignAppModule[0]?.put,
        delete: assignAppModule[0]?.delete,
        adminRoleId: assignAppModule[0]?.adminRoleId,
        appModuleId: assignAppModule[0]?.appModuleId,
      })
    }

    const res = AddTypeToArr(tempArrFromApi, tempArr)

    // call api
    if (res.length > 0) {
      const body = {
        data: [...res],
      }
      assignModuleRoleApi(dispatch, body, onSuccess)
    }
  }
  function onSuccess() {
    dispatch(clearGetAssignAppModule())
    toggleAssignModuleModal()
    setAssignModuleData(null)
  }
  function onCancel() {
    dispatch(clearGetAssignAppModule())
    toggleAssignModuleModal()
    setAssignModuleData(null)
  }

  return (
    <Modal
      title="Assign rights"
      // style={{  }}
      width={1000}
      open={visible}
      onCancel={onCancel}
      footer={[
        <div className="flex justify-end" key={'footer-extra'}>
          <Button
            size="middle"
            key="4"
            // type="primary"
            className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
            onClick={toggleAssignModuleModal}
          >
            Close
          </Button>
          <Button
            size="middle"
            key="5"
            // type="primary"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            onClick={handleSubmit}
            loading={assignModuleRole.loading}
          >
            Update
          </Button>
        </div>,
      ]}
      centered={true}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '100%' }} bordered={false}>
          <Table
            dataSource={dataSource}
            columns={assignModuleColumns}
            // loading={loading}
            pagination={false}
            scroll={{
              //   x: 1500,
              y: 380,
            }}
            loading={assignAppModuleData.loading}
          />
        </Card>
      </div>
    </Modal>
  )
}

export default AssignModuleModal
