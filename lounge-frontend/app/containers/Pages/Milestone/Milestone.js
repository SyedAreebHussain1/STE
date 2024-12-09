import React from "react";
import "./milestone.css";

const milestones = [
  {
    name: "milestone1",
    commission_earned: "1000",
    certificate: "beginner",
  },
  {
    name: "milestone2",
    commission_earned: "2000",
    certificate: "intermediate",
  },
  {
    name: "milestone3",
    commission_earned: "3000",
    certificate: "advance",
  },
  {
    name: "milestone4",
    commission_earned: "5000",
    certificate: "pro",
  },
];

const userCurrentCommission = 3500;

const MilestoneTimeline = () => {
  let currentMilestoneIndex = -1;

  return (
    <div className="milestone-timeline">
      <div className="milestones">
        {milestones.map((milestone, index) => {
          const commissionRequired = parseInt(milestone.commission_earned, 10);
          const isAchieved = userCurrentCommission >= commissionRequired;

          if (isAchieved) {
            currentMilestoneIndex = index;
          }

          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <div
                  className="progress-bar"
                  style={{
                    backgroundColor: isAchieved ? "green" : "grey",
                    borderColor: isAchieved ? "green" : "grey",
                  }}
                />
              )}
              <div
                className={`milestone ${isAchieved ? "achieved" : "pending"}`}
              >
                <div className="milestone-icon">
                  {isAchieved ? "✅" : index + 1}
                </div>
                <div className="milestone-details">
                  <div className="milestone-name">{milestone.name}</div>
                  <div className="milestone-certificate">
                    {milestone.commission_earned}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="current-commission-tag">
        Current: {userCurrentCommission}
      </div>
    </div>
  );
};

export default MilestoneTimeline;
