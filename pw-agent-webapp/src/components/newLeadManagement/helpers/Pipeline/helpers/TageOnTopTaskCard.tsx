import React from "react";

type Props = {
  title: string;
  color: string;
};

const TageOnTopTaskCard = ({ title, color }: Props) => {
  return (
    <div
      style={{
        fontSize: "0.813rem",
        fontFamily: "500",
        color: color,
        background: `${color}10`,
        borderRadius: "10px",
        padding: "3px 10px",
      }}
    >
      {title}
    </div>
  );
};

export default TageOnTopTaskCard;
