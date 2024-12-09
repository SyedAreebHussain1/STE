import React, { useEffect, useRef, useState } from 'react'
import { getAllProjectsApi } from '../../../../redux/api/Project'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Checkbox } from 'antd'
import { errorMessage } from '../../../../utils/message'
import { debounce } from 'lodash'

const ProjectsList = ({
  addProjectAndProductToList,
  removeProjectAndProductFromList,
  visible,
  searchText,
  propertyType,
  selectedList,
}) => {
  const containerRef = useRef()
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 6,
  })
  const getAllProjects = useSelector((state) => state.getAllProjects)
  const [projectList, setProjectList] = useState([])
  const debouncedGetAllProjectsApi = useRef(
    debounce((dispatch, pageLimit, searchText) => {
      getAllProjectsApi(dispatch, pageLimit, searchText)
    }, 500) // Adjust the debounce delay as per your requirement
  ).current

  useEffect(() => {
    if (visible) {
      debouncedGetAllProjectsApi(dispatch, pageLimit, searchText)
    }
  }, [visible, pageLimit, searchText])
  useEffect(() => {
    containerRef.current.scrollTo(0, 0)
    setProjectList([])
    setPageLimit({
      page: 1,
      limit: 6,
    })
  }, [searchText])
  useEffect(() => {
    if (getAllProjects?.data && pageLimit.page !== 1) {
      setProjectList((prev) => [...prev, ...getAllProjects?.data?.data?.items])
    } else if (getAllProjects?.data && pageLimit.page === 1) {
      setProjectList((prev) => [...getAllProjects?.data?.data?.items])
    }
  }, [getAllProjects?.data])
  useEffect(() => {
    containerRef.current.addEventListener('scroll', function () {
      if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
        // call api
        setPageLimit((prev) => ({
          page: prev.page + 1,
          limit: 6,
        }))
      }
    })
  }, [])
  useEffect(() => {
    if (!visible) {
      // containerRef.current.scrollTo(0, 0);
      setProjectList([])
      setPageLimit({
        page: 1,
        limit: 6,
      })
    }
  }, [visible])
  return (
    <div
      className="h-[257px] overflow-auto bg-white"
      ref={containerRef}
      style={{
        display: visible ? 'block' : 'none',
        boxShadow: '0px 0px 4px 2px #00000021',
        borderRadius: '5px',
      }}
    >
      <div className="flex flex-col gap-[10px]">
        {projectList?.map((item, i) => (
          <div className="py-[8px] px-[10px] text-[#444B54]  relative" key={i}>
            <div className="flex gap-4 items-center">
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    if (selectedList.length === 5) {
                      errorMessage('You are only allowed to select 5')
                      return
                    }
                    addProjectAndProductToList({
                      ...item,
                      id: `${item.id}-project`,
                    })
                  } else {
                    removeProjectAndProductFromList(`${item.id}-project`)
                  }
                }}
                checked={selectedList
                  ?.map((list) => list.id)
                  ?.includes(`${item.id}-project`)}
              />
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <img
                    // src="https://placehold.co/49x42"
                    className="w-[49px] h-[42px]"
                    src={item?.propertyWalletProjectPhoto[0]?.photo}
                    alt=""
                  />
                  <h2>
                    {item?.projectName.length >= 30
                      ? `${item?.projectName.substring(0, 30)}...`
                      : item?.projectName}
                  </h2>
                </div>
                <div>{/* <h4>Broadleaf Homes</h4> */}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsList
