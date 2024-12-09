import React from "react";
import FilterSection from "./components/FilterSection/FilterSection";
import InventoriesSection from "./components/InventoriesSection/InventoriesSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const InventoriesPage = () => {
  return (
    <div>
      <Header />
      <FilterSection />
      <InventoriesSection />
      <Footer />
    </div>
  );
};

export default InventoriesPage;
