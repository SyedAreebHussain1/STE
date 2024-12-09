import React, { useState } from "react";
import { CheckCircle, FlagRounded } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";

const MilesStoneDesktopView = ({ milestones, userCurrentCommission }) => {
  const milestoneCommissionEarned = milestones
    .map((item) => Number(item.commission_earned))
    .sort((a, b) => b - a);
  const userCurrentPercentage =
    (userCurrentCommission / milestoneCommissionEarned[0]) * 100;
  const [activeHoveredMilestone, setActiveHoveredMilestone] = useState(null);
  return (
    <div style={{ height: 200, marginTop: 90 }}>
      <div
        style={{
          width: "90%",
          backgroundColor: "#0000004a",
          height: 10,
          margin: "auto",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${
              userCurrentPercentage > 100 ? 100 : userCurrentPercentage
            }%`,
            backgroundColor: "green",
            position: "absolute",
            left: 0,
            top: 0,
            borderRadius: "8px 0 0 8px",
            height: 10,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: `0`,
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
              width: 80,
              height: 80,
            }}
          >
            {/* <FlagRounded
              style={{ width: "50px", height: "50px", fill: "green" }}
            /> */}
            <img
              src={require("./../../../../api/icons/start.png")}
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        </div>
        {milestones.map((item, i) => {
          return (
            <div
              style={{
                position: "absolute",
                left: `${(item.commission_earned /
                  milestoneCommissionEarned[0]) *
                  100}%`,
                transform: `translateY(-50%) translateX(-50%)`,
                zIndex: 2,
                cursor: "pointer",
              }}
              onMouseEnter={() => {
                if (
                  Number(userCurrentCommission) >=
                  Number(item.commission_earned)
                ) {
                  return;
                }
                setActiveHoveredMilestone(i);
              }}
              onMouseLeave={() => {
                if (
                  Number(userCurrentCommission) >=
                  Number(item.commission_earned)
                ) {
                  return;
                }
                setActiveHoveredMilestone(null);
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  boxShadow: "0 0 1px 0px #000",
                  padding: "10px 10px",
                  width: 80,
                  height: 80,
                }}
              >
                <img src={item.iconUrl} style={{ width: "100%" }} alt="" />
              </div>
            </div>
          );
        })}
        {milestones.map((item) => {
          return (
            <div
              style={{
                position: "absolute",
                left: `${(item.commission_earned /
                  milestoneCommissionEarned[0]) *
                  100}%`,
                transform: `translateY(-50%) translateX(-50%)`,
                top: 70,
                zIndex: 1,
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
                left: `${(item.commission_earned /
                  milestoneCommissionEarned[0]) *
                  100}%`,
                transition: "all .5s ease",
                backgroundColor: "#1aaca3",
                padding: 10,
              }}
              className={
                activeHoveredMilestone !== null &&
                activeHoveredMilestone === i && activeHoveredMilestone === i
                  ? `milestone-details-container-hovered${i === milestones.length - 1 ? '-last': ''}`
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
              left: `${(userCurrentCommission / milestoneCommissionEarned[0]) *
                100}%`,
              transform: `translateX(-50%)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: 1, height: 135, backgroundColor: "green" }} />
            <h2 style={{ whiteSpace: "nowrap", marginTop: 6 }}>
              {userCurrentCommission ? userCurrentCommission : 0}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MilesStoneDesktopView;
