import { Button, Modal, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { agencyReviewVisibilityApi } from '../../../redux/api/WebEstate';
type ReviewShowAddHideModalProps = {
    checkValue: boolean | number | string | null | any | undefined,
    setCheckValue: (e: null | number | string | boolean) => void,
}
const ReviewShowAddHideModal = ({ checkValue, setCheckValue }: ReviewShowAddHideModalProps) => {
    const dispatch: AppDispatch = useDispatch()
    const agencyReviewVisibility = useSelector((state: any) => state?.agencyReviewVisibility)
    function onSuccess() {
        setCheckValue(null)
    }
    return (
        <Modal
            title={checkValue?.reviewVisibilty ? "Hide On Website" : "Show On website"}
            centered
            width={553}
            open={checkValue ? true : false}
            onOk={() => setCheckValue(null)}
            onCancel={() => setCheckValue(null)}
            footer={null}
        >
            <Row gutter={16}>
                <Col xs={24} sm={24} lg={24} md={24}>
                    <div className='p-[7px] text-[1rem] mt-1 mb-1'>
                        {checkValue?.reviewVisibilty ? <p>Kindly confirm the decision to hide this review in the website</p> : <p>Please confirm the display of this review in the website</p>}
                    </div>
                    <div className='flex justify-end gap-2'>
                        <Button
                            className="text-[#3D4350] font-medium text-lg h-[40px]  flex-1 border border-borderColor"
                            onClick={() => setCheckValue(null)}>
                            Cancel
                        </Button>
                        <Button
                            onClick={() => {
                                if (checkValue?.reviewVisibilty) {
                                    agencyReviewVisibilityApi(dispatch, {
                                        "reviewVisibilty": false
                                    }, onSuccess, checkValue?.id)
                                } else {
                                    agencyReviewVisibilityApi(dispatch, {
                                        "reviewVisibilty": true
                                    }, onSuccess, checkValue?.id)
                                }
                            }
                            }
                            loading={agencyReviewVisibility.loading}
                            className={checkValue?.reviewVisibilty ? "text-[#E23442] font-medium text-lg h-[40px]  flex-1 border border-[#E23442]" : "text-primary font-medium text-lg h-[40px]  flex-1 border border-primary"}
                        >
                            Confirm
                        </Button>
                    </div>
                </Col>
            </Row>
        </Modal>
    )
}
export default ReviewShowAddHideModal