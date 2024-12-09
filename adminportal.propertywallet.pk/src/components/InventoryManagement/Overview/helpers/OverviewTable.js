import React from 'react'
import on_board from '../../../../components/assest/icon/overview/0.1.png'
import './Overview.css'

const OverviewTable = () => {
  const thArrray = [
    {
      inventory: 'Inventory',
      project: 'Project',
      location: 'Location',
      city: 'City',
      area: 'Area Size',
      agency: 'Agency',
      soldAgency: 'Sold Amount',
    },
  ]
  const tdArray = [
    {
      inventory: ' Contrary to popular belief, ',
      img: on_board,
      project: 'Contemporary Oasis',
      location: '11a North Karachi',
      city: 'KARACHI',
      area: '270 Sq. Ft',
      agency: 'Pakistan Estate Builders',
      soldAgency: '$750,000',
    },
    {
      inventory: 'Contrary to popular belief, ',
      img: on_board,
      project: 'Contemporary Oasis',
      location: '11a North Karachi ',
      city: 'MULTAN',
      area: '270 Sq. Ft',
      agency: 'Pakistan Estate Builders',
      soldAgency: '$750,000',
    },
    {
      inventory: 'Contrary to popular belief,i',
      img: on_board,
      project: 'Contemporary Oasis',
      location: '11a North Karachi',
      city: 'KARACHI',
      area: '270 Sq. Ft',
      agency: 'Pakistan Estate Builders',
      soldAgency: '$750,000',
    },
    {
      inventory: 'WorContrary to popular belief, ild',
      img: on_board,
      project: 'Contemporary Oasis',
      location: '11a North Karachi',
      city: 'KARACHI',
      area: '270 Sq. Ft',
      agency: 'Pakistan Estate Builders',
      soldAgency: '$750,000',
    },
    {
      inventory: 'Contrary to popular belief, i',
      img: on_board,
      project: 'Contemporary Oasis',
      location: '11a North Karachi ',
      city: 'KARACHI',
      area: '270 Sq. Ft',
      agency: 'Pakistan Estate Builders',
      soldAgency: '$750,000',
    },
    {
      inventory: 'WContrary to popular iordl',
      img: on_board,
      project: 'Contemporary Oasis',
      location: '11a North Karachi',
      city: 'KARACHI',
      area: '270 Sq. Ft',
      agency: 'Pakistan Estate Builders',
      soldAgency: '$750,000',
    },
    {
      inventory: 'WContrary to popular iordl',
      img: on_board,
      project: 'Contemporary Oasis',
      location: '11a North Karachi',
      city: 'KARACHI',
      area: '270 Sq. Ft',
      agency: 'Pakistan Estate Builders',
      soldAgency: '$750,000',
    },
    {
      inventory: 'WContrary to popular iordl',
      img: on_board,
      project: 'Contemporary Oasis',
      location: '11a North Karachi',
      city: 'KARACHI',
      area: '270 Sq. Ft',
      agency: 'Pakistan Estate Builders',
      soldAgency: '$750,000',
    },
    {
      inventory: 'WContrary to popular iordl',
      img: on_board,
      project: 'Contemporary Oasis',
      location: '11a North Karachi',
      city: 'KARACHI',
      area: '270 Sq. Ft',
      agency: 'Pakistan Estate Builders',
      soldAgency: '$750,000',
    },
  ]
  return (
    <>
      <div className="sc" style={{}}>
        <table id="customers" style={{ fontFamily: 'Poppins' }}>
          {thArrray.map((val, i) => {
            return (
              <tr
                className="font-semibold text-[12px]"
                key={i}
                style={{
                  fontSize: '0.7rem',
                  color: '#667085',
                  background: ' rgba(102, 112, 133, 0.04)',
                  border: '',
                }}
              >
                <th>{val.inventory}</th>
                <th>{val.project}</th>
                <th>{val.location}</th>
                <th>{val.city}</th>
                <th>{val.area}</th>
                <th>{val.agency}</th>
                <th>{val.soldAgency}</th>
              </tr>
            )
          })}
          {tdArray.map((val, i) => {
            return (
              <tr key={i} style={{ border: 'none' }}>
                <td
                  className="font-medium text-[12px]"
                  style={{ display: 'flex', color: '#444B54', fontWeight: '' }}
                >
                  <img src={val.img} alt="" /> {val.inventory}
                </td>
                <td
                  className="font-medium text-[12px]"
                  style={{ color: '#444B54', fontWeight: '' }}
                >
                  {val.project}
                </td>
                <td
                  className="font-medium text-[12px]"
                  style={{ color: '#444B54', fontWeight: '' }}
                >
                  {val.location}
                </td>
                <td
                  className="font-semibold text-[12px]"
                  style={{ color: '#667085', fontWeight: '' }}
                >
                  {val.city}
                </td>
                <td
                  className="font-medium text-[12px]"
                  style={{ color: '#444B54', fontWeight: '' }}
                >
                  {val.area}
                </td>
                <td
                  className="font-medium text-[12px]"
                  style={{ color: '#444B54', fontWeight: '' }}
                >
                  {' '}
                  {val.agency}
                </td>
                <td
                  className="font-medium text-[12px]"
                  style={{ color: '#444B54', fontWeight: '' }}
                >
                  {val.soldAgency}
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}
export default OverviewTable
