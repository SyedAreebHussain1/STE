import React, { useEffect, useState } from "react";
import "./helpers/milestone.css";
import { CheckCircle, FlagRounded } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import MilesStoneDesktopView from "./helpers/MilesStoneDesktopView";
import MilesStoneMobileView from "./helpers/MilesStoneMobileView";
import { assignMilestonesToFreelancerAction, getAllMilestonesAndCountAction } from "../../../redux/modules/Milestone/actions";
import { useDispatch, useSelector } from "react-redux";

const MilestoneTimeline = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const mileStoneAndCount = useSelector(state => state.getIn(["getAllMilestonesAndCount"]))
  useEffect(() => {
    getAllMilestonesAndCountAction(dispatch)
    window.addEventListener("resize", function(){
      setWidth(this.innerWidth)
    })
  }, [])
  useEffect(() => {
    if(mileStoneAndCount.data){
      const newData = mileStoneAndCount.data.data.milestoneResult.map(item => {
        return {
          name: item.name,
          commission_earned: item.salesRevenue,
          id: item.id,
          milestoneComission: item.milestoneComission,
          certificate: item.certificate,
          iconUrl: item.iconUrl
        }
      }).sort((a, b) => a.commission_earned - b.commission_earned)
      setData(newData)
      setCount(mileStoneAndCount.data.data.totalCommission.sum !== null ?  mileStoneAndCount.data.data.totalCommission.sum : 0)
    }
  }, [mileStoneAndCount.data])

  useEffect(() => {
    if(data.length > 0 && count !== 0){
      let ids = [];
      for(const key in data){
        if(count >= Number(data[key].commission_earned)){
          ids.push(data[key].id)
        } else {
          break
        }
      }
      if(ids.length > 0){
        for(let i = 0; i < ids.length; i++){
          const body = {
            milestoneId: ids[i]
          }
          assignMilestonesToFreelancerAction(dispatch, body)
        }
      }
    }
  }, [data, count])
  return (
    <>
      {width < 480 ? <MilesStoneMobileView milestones={data} userCurrentCommission={count} /> : <MilesStoneDesktopView  milestones={data} userCurrentCommission={count} />}
    </>
  );
};

export default MilestoneTimeline;
