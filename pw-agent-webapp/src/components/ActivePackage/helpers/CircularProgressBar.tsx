const CircularProgressBar = ({ total, obtain }: any) => {
  return (
    <div style={{ width: "160px ", height: "160px", position: "relative" }}>
      <div style={{ width: "160px", height: "160px" }}>
        <div
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            padding: "20px",
            boxShadow:
              "6px 6px 10px -1px rgba(0,0,0,0.15),-6px -6px 10px -1px rgba(255,255,255,0.7)",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "inset 4px 4px 6px -1px rgba(0,0,0,0.2),inset -4px -4px 6px -1px rgba(255,255,255,0.7),-0.5px -0.5px 0px  rgba(255,255,255,1),0.5px 0.5px 0px  rgba(0,0,0,0.15),0px 12px 10px -10px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{ fontSize: "1.2rem", fontWeight: "600", color: "#555" }}
            >
              {obtain}/{total}
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs> */}
        <circle
          cx="80"
          cy="80"
          r="70"
          strokeLinecap="round"
          fill="none"
          stroke="#27A3A3"
          strokeWidth="20px"
          strokeDasharray="472"
          strokeDashoffset={total > 0 ? 472 - 472 * (obtain / total) : 472}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
