import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MeetOurTeamPage from "./pages/MeetOurTeamPage/MeetOurTeamPage";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage";
import SingleInventoryPage from "./pages/SingleInventoryPage/SingleInventoryPage";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/:id" element={<HomePage />} />
        <Route exact path="/meet-our-team/:id" element={<MeetOurTeamPage />} />
        <Route
          exact
          path="/:id/inventories/:inventoryId"
          element={<SingleInventoryPage />}
        />
        <Route exact path="/:id/inventories" element={<InventoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
