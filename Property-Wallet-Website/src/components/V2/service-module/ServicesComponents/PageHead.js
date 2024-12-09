import React, { useEffect } from "react"
import commissionVideo from '../../../images/CommissionVideo.m4v'
import AOS from "aos";
import '../service_module.css'
import "aos/dist/aos.css";
const PageHead = ({title,content,video}) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

    return (
        <>
            <div className="main-head-div"
            >
                <div id="example1 " className="keyframe-animate">
                    <div
                        className="freature-link-hover marginAuto"
                        style={{
                            width: '70%',
                        }}
                    >
                        <h1 className="text-white ">
                          {title}
                        </h1>
                        <p className=" text-white text-font-10px_media" style={{}}>{content}</p>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <video style={iOS || isAndroid ? { width: "" } : { width: '' }} className='video-class'  autoPlay playsInline muted >
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
            </div>
        </>
    )
}
export default PageHead