import React from 'react';
import { Modal, Button } from 'antd';
import { Light, thumb } from '../../../../assets/ideaPlan';
import { useNavigate } from 'react-router-dom';

interface ValidationScoreModalProps {
  data: any;
  onCancel: () => void;
}

const ValidationScoreModal: React.FC<ValidationScoreModalProps> = ({ data, onCancel }) => {

  const navigate = useNavigate()
  const answerResposne = data?.ideaValidationUpdated


  const getScoreMessage = (score: number) => {
    if (score === null) return "-"
    if (score < 50) return "Needs Improvement";
    if (score >= 50 && score < 70) return "Average";
    return "Great";
  };

  const handleContinue = ()=>{
    navigate(`/idea-evaluation/${answerResposne?.id}`)
  }

  return (
    <Modal
      open={data !== null}
      onCancel={onCancel}
      footer={null}
      centered
      width={700}
      bodyStyle={{ padding: '20px', textAlign: 'start' }}
    >
      <h2 className="text-xl text-[#212838] font-medium mb-2">See Validation Score for Your Idea</h2>
      <p className="text-[#4A5366] mb-6">Uncover the Potential of Innovative Concepts with Real-Time Validation Scores</p>

      <div className='p-3 border border-gray-300 rounded-md'>
        <div className='bg-gray-50 rounded-md items-start w-[50%] flex flex-col mb-4 p-5'>

          <div className="flex justify-center items-center p-4">
            <img src={Light} />
          </div>

          <h3 className="text-xl font-semibold flex items-start justify-start pl-4">{answerResposne?.title}</h3>
          <div className='flex gap-2 p-4'>

            <div className="text-5xl font-bold text-gray-800 ">{answerResposne?.score}%</div>
            <div className="text-md font-semibold text-[#212838] bg-orange-100 rounded-full px-5 py-1 flex justify-center items-center" ><img src={thumb} alt="thumb" className='h-5 w-12' /><span className='flex items-center text-center'>{answerResposne?.score !== undefined ? getScoreMessage(answerResposne?.score) : "-"}</span></div>
          </div>
        </div>

        <div className="text-left">
          <p>Looking to enhance your idea?</p>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
            <li>Clarify your core concept to ensure it’s easy to understand.</li>
            <li>Gather feedback from peers or potential users.</li>
            <li>Research similar solutions for fresh inspiration.</li>
            <li>Simplify where possible to boost impact.</li>
            <li>Iterate and refine as your idea evolves.</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between mt-6'>
        <div className="flex items-start ">
          <Button onClick={handleContinue} className="rounded-full" >
            Continue
          </Button>
        </div>
        <div className="flex items-end justify-end">
          <Button onClick={onCancel} className="rounded-full" >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ValidationScoreModal;
