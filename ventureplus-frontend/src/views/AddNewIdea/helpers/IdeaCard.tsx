import { idea, Card } from '../../../assets/ideaPlan'

const IdeaCard = () => {
    return (
        <div className="relative">
            <img src={Card} alt="Card" className="w-full h-[400px]" />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
                <div className='flex justify-center mb-4'>
                    <img src={idea} alt="Idea Plan"  />
                </div>
                <div className='flex flex-col justify-start gap-2 font-medium text-[#4A5366] text-start'>
                    <li>Clearly state the specific problem or pain point the product or service addresses.</li>
                    <li>Describe how the product or service provides a solution or improvement over current options.</li>
                    <li>Share any data, feedback, or case studies that demonstrate the effectiveness of the solution.</li>
                </div>
            </div>
        </div>
    )
}

export default IdeaCard
