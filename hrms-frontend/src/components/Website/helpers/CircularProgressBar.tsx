const CircularProgressBar = ({ total, obtain }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="w-[122px] h-[122px] serviceWeProvideProgressBarcircle"
      style={{
        position: "absolute",
        top: -4,
        left: -6,
        background: "transparent",
      }}
    >
      <circle
        cx="61"
        cy="60"
        r="58"
        strokeLinecap="round"
        fill="none"
        stroke="#fff"
        strokeWidth="5px"
        strokeDasharray="472"
        strokeDashoffset="472"
      />
    </svg>
  );
};

export default CircularProgressBar;
