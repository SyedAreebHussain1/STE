import { Button, Fab, Grid, Icon } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "../../../../../node_modules/react-alice-carousel/lib/alice-carousel.css";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import "../../Packages/helper/style.css";
import ModalWhatsNewVideo from "./ModalAddVideo";

const HowToUse = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoID, setVideoID] = useState("");

  const [data, setData] = useState([1]);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  useEffect(() => {
    setData([
      {
        url:
          "https://i.ytimg.com/vi/tb6Wtns9axM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTc5HnNKDyvjG_-oZS57LLaLz6YQ",
        videoID: "hFsXHune4-A",
      },
      {
        url:
          "https://i.ytimg.com/vi/uPH9SVBdzuo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-gQhQVR-CQ3iz6g6WyAGuNQsGmQ",
        videoID: "uPH9SVBdzuo",
      },
      {
        url:
          "https://i.ytimg.com/vi/Kj5WBKMj7dk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA1XQTRpgj8ntBSZSLaOxV-5M_vSA",
        videoID: "Kj5WBKMj7dk",
      },
    ]);
  }, []);
  useEffect(() => {
    if (isOpen == false) {
      setVideoID("");
    }
  }, isOpen);
  return (
    <>
      <ModalWhatsNewVideo isOpen={isOpen} setOpen={setOpen} video={videoID} />

      <div style={{ marginLeft: "1%", marginRight: "1%" }}>
        <div style={{ position: "relative" }}>
          {data !== null && data.length > 0 && (
            <AliceCarousel
              autoPlayControls={false}
              animationDuration={2000}
              items={
                data !== null &&
                data.length > 0 &&
                data.map((item, i) => {
                  return (
                    <Grid
                      item
                      key={i}
                      style={{ margin: "10px 5px", marginTop: "34px" }}
                    >
                      <div style={{ position: "relative" }}>
                        <img
                          src={item.url}
                          style={{
                            width: "100%",
                            borderRadius: "20px",
                            filter: "brightness(70%)",
                          }}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                          onClick={() => {
                            setVideoID(item.videoID);
                            return setOpen(true);
                          }}
                        >
                          <Icon>play_arrow</Icon>
                          Watch Video
                        </Button>
                      </div>
                    </Grid>
                  );
                })
              }
              responsive={responsive}
              autoPlay={false}
              infinite
              renderPrevButton={() => {
                return (
                  <h2
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translate(0%, -50%)",
                    }}
                  >
                    <Fab
                      color="primary"
                      aria-label="add"
                      style={{ width: "36px", height: " 30px" }}
                    >
                      <ArrowBack
                        style={{
                          fontSize: "20px",
                          cursor: "pointer",
                          position: "absolute",
                        }}
                      />
                    </Fab>
                  </h2>
                );
              }}
              renderNextButton={() => {
                return (
                  <h2
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translate(0%, -50%)",
                    }}
                  >
                    <Fab
                      color="primary"
                      aria-label="add"
                      style={{ width: "36px", height: " 30px" }}
                    >
                      {/* <AddIcon />  */}
                      <ArrowForward
                        style={{
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      />
                    </Fab>
                  </h2>
                );
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HowToUse;
