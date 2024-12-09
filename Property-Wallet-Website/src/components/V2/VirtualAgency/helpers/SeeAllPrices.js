import React from "react";
import { Link } from "react-router-dom";

const SeeAllPrices = () => {
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <Link
      to="/pricing"
      onClick={handleScrollTop}
      className="btn btn-primary rounded-pill mt-2 "
    >
      See All Prices
    </Link>
  );
};

export default SeeAllPrices;
