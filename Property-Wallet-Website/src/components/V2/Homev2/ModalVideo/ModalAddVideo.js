import React, { useState } from 'react'
// import ModalVideo from 'react-modal-video'

import "./PlayButton.css";

const ModalAddVideo = ({ cName }) => {
//   const [isOpen, setOpen] = useState(false);
    // const handleClick = () => {
    //     setOpen(true);
    //     // window.fbq("track", "Video-watched");
    // };
    return (
        <div>
            <div>
                {/* <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="9IIZpI4FQyw"
                    onClose={() => setOpen(false)}
                /> */}
                {cName === "balloting" ? (
                    <div className=" animated">
                        <a 
                        //  className=" play-btn"  allow='autoplay'  href="https://www.youtube.com/embed/9IIZpI4FQyw?autoplay=1&showinfo=0"  data-rel="lightcase"  
                                    
                                     ></a>
                    </div>
                ) : (
                    <div className=" animated">
                        <a 
                        // className="  play-btn"  allow='autoplay'
                        //             href="https://www.youtube.com/embed/9IIZpI4FQyw?autoplay=1&showinfo=0"
                        //             data-rel="lightcase" 
                                  
                                     ></a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ModalAddVideo
