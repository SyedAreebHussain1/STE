import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import icondummy from '../../components/images/P-w icon/commission.png'

function OffCanvas({ activeMenu, data1, setActiveMenu, ...props }) {
    let linkSolution = [
        {
            name: 'Real Estate Agents',
            linkTo: '/',
        },
        {
            name: 'Builders',
            linkTo: '/',
        },
        {
            name: 'Freelancers',
            linkTo: '/',
        },
        {
            name: 'Smart Selling Point',
            linkTo: '/',
        }
    ]
    let linkFeatures = [
        {
            name: 'Customer Verification App',
            linkTo: '/',
        },
        {
            name: 'Property Wallet CRM',
            linkTo: '/crm',
        },
        {
            name: 'Property Wallet App',
            linkTo: '/',
        }
    ]
    return (
        <>
            <Offcanvas show={activeMenu} {...props} style={{ position: "absolute", height: "130px", top: "50px", border: "2px solid green" }}>
                <div style={{ marginTop: "10px" }}>
                    <Offcanvas.Header style={{ justifyContent: "center", gap: '4px', backgroundColor: "#fff" }}>
                        {data1 === 'product' ? linkFeatures?.map((item, i) => {
                            return <Link to={item?.linkTo} className='canvas-btn flex' key={i} style={{ padding: "10px" }}>
                                <div>
                                    <img src={icondummy} />
                                </div>
                                <div key={i}>
                                    <button to={item?.linkTo} className='canvas-link-btn'> {item.name}</button>
                                </div>
                            </Link>
                        })
                            : linkSolution?.map((item, i) => {
                                return <Link to={item?.linkTo} className='canvas-btn flex' key={i} style={{ padding: "10px" }}>
                                    <div>
                                        <img src={icondummy} />
                                    </div>
                                    <div key={i} className='canvas-upper-link'>
                                        <button to={item?.linkTo} className='canvas-link-btn'> {item.name}</button>
                                    </div>
                                </Link>
                            })}</Offcanvas.Header>
                </div>
            </Offcanvas>
        </>
    );
}
export default OffCanvas