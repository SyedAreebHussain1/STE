import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TopSection from "./components/TopSection/TopSection";
import AllTeamMembers from "./components/AllTeamMembers/AllTeamMembers";

const MeetOurTeamPage = () => {
  return (
    <div>
      <Header />
      <TopSection />
      <AllTeamMembers />
      <Footer />
    </div>
  );
};

export default MeetOurTeamPage;
