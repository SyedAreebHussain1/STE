import React, { useEffect, useState } from 'react'
import smartPoint from '../images/smartVideov1.mp4'
import modileViewVideoBanner from '../images/modileViewVideoBanner.mp4'
import "./videobanner.css"

const MainVideoBanner = () => {
    const [isMobile, setIsMobile] = useState(false)
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    return (
        <>
            <div style={{ borderRadius: '25px',
                padding: "10px",
                overflow: 'hidden',
                width: '100%'
            }} className='mobile-view'>
                <video style={iOS || isAndroid ? {
                    outline: 'none', borderRadius: '25px',
                    zIndex: "-999999",
                    position: 'relative',
                    left: '0',
                    top: '0',
                    opacity: '1',
                    width: '100%'
                } : {
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                    borderRadius: '32px',
                    outline: 'none',
                    zIndex: "-999999",
                    left: '0',
                    top: '0',
                }} className='' playsInline autoPlay muted loop>
                    <source src={modileViewVideoBanner} type='video/mp4' />
                </video>
            </div>  <div className='screen-view' style={{
                marginLeft: "5%", marginRight: "5%", borderRadius: '32px', height: "95%",
                overflow: 'hidden',
                position: 'relative',
            }}>
                <video style={iOS || isAndroid ? {
                    outline: 'none', borderRadius: '32px',
                    zIndex: "-999999",
                    height: 'auto',
                    position: 'relative',
                    left: '0',
                    top: '0',
                    opacity: '1'
                } : {
                    width: '100%',
                    height: 'auto',
                    position: 'relative', borderRadius: '32px',
                    outline: 'none',
                    zIndex: "-999999",
                    left: '0',
                    top: '0',
                }} className='' playsInline autoPlay muted loop>
                    <source src={smartPoint} type='video/mp4' />
                </video>
            </div>

        </>
    )
}

export default MainVideoBanner