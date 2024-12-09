import React, { useState } from "react";
import { CheckCircle, FlagRounded } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";

const MilesStoneMobileView = ({ milestones, userCurrentCommission }) => {
  const milestoneCommissionEarned = milestones
    .map((item) => Number(item.commission_earned))
    .sort((a, b) => b - a);
  const userCurrentPercentage =
    (userCurrentCommission / milestoneCommissionEarned[0]) * 100;
    const [activeHoveredMilestone, setActiveHoveredMilestone] = useState(null);
  return (
    <div style={{ height: 800 }}>
      <div
        style={{
          width: "10px",
          backgroundColor: "#0000004a",
          height: "90%",
          margin: "auto",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 10,
            backgroundColor: "green",
            position: "absolute",
            left: 0,
            top: 0,
            borderRadius: "8px",
            height: `${userCurrentPercentage > 100 ? 100 : userCurrentPercentage}%`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: `50%`,
            transform: `translateY(-50%) translateX(-50%)`,
            zIndex: 1,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 0 1px 0px #000",
              padding: "10px 10px",
              zIndex: 1,
              width: 70,
              height: 70
            }}
          >
            <img src={require("./../../../../api/icons/start.png")} width={50} height={50} alt="" />
          </div>
        </div>
        {milestones.map((item, i) => {
          return (
            <div
              style={{
                position: "absolute",
                top: `${(item.commission_earned /
                  milestoneCommissionEarned[0]) *
                  100}%`,
                transform: `translateY(-50%) translateX(-50%)`,
                left: "50%",
                zIndex: 2
              }}
              onClick={() => {
                if(activeHoveredMilestone !== null){
                  setActiveHoveredMilestone(null)
                  return
                }
                if (
                  Number(userCurrentCommission) >=
                  Number(item.commission_earned)
                ) {
                  return;
                }
                setActiveHoveredMilestone(i);
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  boxShadow: "0 0 1px 0px #000",
                  padding: "10px 10px",
                  width: 70,
                  height: 70
                }}
              >
                <img src={item.iconUrl} style={{ width: '50px', height: '50px' }} alt="" />
                {/* {Number(userCurrentCommission) >=
                Number(item.commission_earned) ? (
                  <CheckCircle
                    style={{
                      width: "50px",
                      height: "50px",
                      fill:
                        Number(userCurrentCommission) >=
                        Number(item.commission_earned)
                          ? "green"
                          : "grey",
                    }}
                  />
                ) : (
                  <Tooltip
                    title={`${Number(item.commission_earned) -
                      Number(userCurrentCommission)} to reach ${item.name}`}
                    placement="top"
                  >
                    <CheckCircle
                      style={{
                        width: "50px",
                        height: "50px",
                        fill:
                          Number(userCurrentCommission) >=
                          Number(item.commission_earned)
                            ? "green"
                            : "grey",
                        cursor: "pointer",
                      }}
                    />
                  </Tooltip>
                )} */}
              </div>
            </div>
          );
        })}
        {milestones.map((item, i) => {
          return (
            <div
              style={{
                position: "absolute",
                top: `${(item.commission_earned /
                  milestoneCommissionEarned[0]) *
                  100}%`,
                transform: `translateY(-50%) translateX(-50%)`,
                left: -80,
              }}
            >
              <h2
                style={{
                  whiteSpace: "nowrap",
                  textTransform: "capitalize",
                  marginBottom: 0,
                  textAlign: "center",
                }}
              >
                {item.commission_earned}
              </h2>
              <span style={{ textAlign: "center", whiteSpace: "nowrap" }}>
                {item.name}
              </span>
            </div>
          );
        })}
        {milestones.map((item, i) => {
          return (
            <div
              style={{
                position: "absolute",
                top: `${(item.commission_earned /
                  milestoneCommissionEarned[0]) *
                  100}%`, 
                transition: "all .5s ease",
                backgroundColor: "#1aaca3",
                padding: 10,
              }}
              className={
                activeHoveredMilestone !== null &&
                activeHoveredMilestone === i
                  ? `milestone-details-container-hovered`
                  : "milestone-details-container"
              }
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textTransform: "capitalize",
                  marginBottom: 0,
                  textAlign: "center",
                  visibility: "hidden",
                  color: "#fff",
                  display: "block",
                }}
              >
                {`PKR ${Number(item.commission_earned) -
                  Number(userCurrentCommission)} to reach ${item.name}`}
              </span>
              <span style={{
                  whiteSpace: "nowrap",
                  textTransform: "capitalize",
                  marginBottom: 0,
                  textAlign: "center",
                  visibility: "hidden",
                  color: "#fff",
                  display: "block",
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>Rewards</span>
              <span
                style={{
                  whiteSpace: "nowrap",
                  textTransform: "capitalize",
                  marginBottom: 0,
                  textAlign: "center",
                  visibility: "hidden",
                  color: "#fff",
                  display: "block",
                }}
              >
                {`You will get PKR ${item.milestoneComission} extra commission`}
              </span>
              <span
                style={{
                  whiteSpace: "nowrap",
                  textTransform: "capitalize",
                  marginBottom: 0,
                  textAlign: "center",
                  visibility: "hidden",
                  color: "#fff",
                  display: "block",
                }}
              >
                {`You will get ${item.certificate} Certificate`}
              </span>
            </div>
          );
        })}
        {(userCurrentCommission / milestoneCommissionEarned[0]) * 100 <=
          100 && (
          <div
            style={{
              position: "absolute",
              top: `${(userCurrentCommission / milestoneCommissionEarned[0]) *
                100}%`,
              transform: `translateY(-50%)`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: 70, height: 1, backgroundColor: "green" }} />
            <h2 style={{ whiteSpace: "nowrap", marginBottom: 0, marginLeft: 15 }}>
              {userCurrentCommission ? userCurrentCommission : 0}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MilesStoneMobileView;
