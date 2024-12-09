import { Progress } from 'antd'
import { Fragment } from 'react'
const ProgressRating = () => {
  const array = [
    {
      city: 'Karachi',
      per: '70',
    },
    {
      city: 'Lahore',
      per: '50',
    },
    {
      city: 'Multan',
      per: '10',
    },
    {
      city: 'Islamabad',
      per: '27',
    },
    {
      city: 'Hydrabad',
      per: '60',
    },
    {
      city: 'Rawalpindi',
      per: '40',
    },
  ]
  return (
    <>
      <div className="font-semibold text-[28px]">10.8K Users</div>
      {array.map((val, i) => {
        return (
          <Fragment key={i}>
            <div className="text-[#667085] font-medium text-[15px]">
              {val.city}
            </div>
            <Progress strokeColor={['#27A3A3']} percent={val.per} />
          </Fragment>
        )
      })}
    </>
  )
}
export default ProgressRating
