import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MeetOurTeamPage from "./pages/MeetOurTeamPage/MeetOurTeamPage";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage";
import SingleInventoryPage from "./pages/SingleInventoryPage/SingleInventoryPage";
import Chat from "./components/Chat/Chat";
import { useSelector } from "react-redux";
import "react-phone-number-input/style.css";
import PwSingleInventoryPage from "./pages/PwSingleInventoryPage/PwSingleInventoryPage";
import TailwindWrapper from "./../TailwindWrapper";
import { useEffect } from "react";
function AgencyCatalogue({ setIsChatBot }) {
  const chat = useSelector((state) => state.chat);
  useEffect(() => {
    setIsChatBot(false);
  }, []);
  return (
    <TailwindWrapper>
      {/* {chat.available && <Chat />} */}
      <Route
        exact
        path="/:name/:id"
        render={(props) => <HomePage {...props} />}
      />
      <Route
        exact
        path="/:name/:id/meet-our-team"
        render={(props) => <MeetOurTeamPage {...props} />}
      />
      <Route
        exact
        path="/:name/:id/inventories/:inventoryId"
        render={(props) => <SingleInventoryPage {...props} />}
      />
      <Route
        exact
        path="/:name/:id/pw-inventories/:projectId"
        render={(props) => <PwSingleInventoryPage {...props} />}
      />
      <Route
        exact
        path="/:name/:id/inventories"
        render={(props) => <InventoriesPage {...props} />}
      />
    </TailwindWrapper>
  );
}

export default AgencyCatalogue;
