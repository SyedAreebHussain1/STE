import React, { useEffect } from 'react'
import MainInitialQuestion from './helpers/MainInitialQuestion'
import { getBusinessPlanInfoApi } from '../../services/api/PlanSetup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getFromStorage, setInStorage } from '../../utils/storage';
import { getAllBusinessPlansByBusinessIdApi } from '../../services/api/BusinessPlan';
import { setCurrentSelectedBusinessPlan } from '../../redux/slices/SelectedBusinessPlan/selectedBusinessPlanSlice';

const InitialBusinessPlanTwo = () => {
    const dispatch = useDispatch()
    const getBusinessPlanInfo = useSelector(
        (state: RootState) => state.getBusinessPlanInfo
    );
    const getPlanId = getFromStorage("businessPlan")
    const business = getFromStorage("business")
    const businessPlan = getFromStorage("businessPlan");

    const getPlansByBusinessId = useSelector(
        (state: RootState) => state.getPlansByBusinessId?.data
    );
    const currentSelectedBusinessPlan = useSelector((state: RootState) => state?.currentSelectedBusinessPlan?.businessPlan)
    const currentSelectedBusiness = useSelector((state: RootState) => state?.currentSelectedBusiness.business)
    const plansByBusinessId = useSelector((state: RootState) => state?.getPlansByBusinessId)
    useEffect(() => {
        if (getBusinessPlanInfo?.data === null && currentSelectedBusinessPlan?.businessPlan?.id) {
            getBusinessPlanInfoApi(currentSelectedBusinessPlan?.businessPlan?.id, dispatch);
        }
        else if (getBusinessPlanInfo?.data === null) {
            getAllBusinessPlansByBusinessIdApi(dispatch, !currentSelectedBusiness?.id ? business.id : currentSelectedBusiness?.id);
        }
    }, []);

    useEffect(() => {
        if (plansByBusinessId?.data?.data?.[0]?.id) {
            getBusinessPlanInfoApi(plansByBusinessId?.data?.data?.[0]?.id, dispatch);
        }
    }, [plansByBusinessId?.data?.data?.[0]])

    useEffect(() => {
        if (getPlansByBusinessId?.data?.length > 0) {
            if (businessPlan) {
                dispatch(setCurrentSelectedBusinessPlan(businessPlan));
            } else if (getPlansByBusinessId?.data?.length > 0) {
                setInStorage("businessPlan", getPlansByBusinessId?.data?.[0]);
                dispatch(
                    setCurrentSelectedBusinessPlan(getPlansByBusinessId?.data?.[0])
                );
            } else {
                setInStorage("businessPlan", null);
                dispatch(setCurrentSelectedBusinessPlan(null));
            }
        }
    }, [getPlansByBusinessId]);


    return (
        <React.Fragment>
            <div className="p-0 w-full">
                <MainInitialQuestion />
            </div>
        </React.Fragment>
    )
}

export default InitialBusinessPlanTwo