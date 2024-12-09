import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import topicCompleteGIF from "../../../../assets/question/topicComplete.gif"
import { useNavigate } from 'react-router-dom';

const FinalStageModal = ({ toggleOpen, open, bpType, no, yes, opt }: any) => {
    return (
        <React.Fragment>
            <Modal
                centered
                open={open}
                footer={null}
                width={500}
                bodyStyle={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
                <div>
                    <div className='flex justify-center mt-10'>
                        <img src={topicCompleteGIF} alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className="font-semibold text-[#014043] text-[1.8125rem]">Want to add a new {bpType}?</h2>
                </div>
                <div>
                    <div className='text-center'>
                        <div className='flex justify-center mb-3 gap-3 '>
                            <Button
                                onClick={no} className=' text-[#FFFFFF] font-semibold' shape="round" size='large'>
                                <span>
                                    {opt}
                                </span>
                            </Button>
                            <Button
                                onClick={yes}
                                className='bg-[#016A70] text-[#FFFFFF] font-semibold' shape="round" size='large'
                            >
                                <span>
                                    Yes
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>

            </Modal>
        </React.Fragment>
    );
};

export default FinalStageModal;