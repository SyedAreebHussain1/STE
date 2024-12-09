import { useState } from "react";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import BusinessSettingsCards from "./helpers/BusinessSettingsCards";
import Overview from "./helpers/Overview";
import Localisation from "./helpers/Localisation";
import Users from "./helpers/Users";
import Plans from "./helpers/Plans";

export type SelectedCardType =
  | "Overview"
  | "Localization"
  | "Users"
  | "Plans"
  | "";

enum BusinessCardsEnum {
  "Overview" = "Overview",
  "Localization" = "Localization",
  "Users" = "Users",
  "Plans" = "Plans",
}

const BusinessSettings = () => {
  const [selectedCard, setSelectedCard] = useState<SelectedCardType>("");
  return (
    <>
      {selectedCard ? (
        selectedCard === BusinessCardsEnum.Overview ? (
          <Overview
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        ) : selectedCard === BusinessCardsEnum.Localization ? (
          <Localisation
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        ) : selectedCard === BusinessCardsEnum.Users ? (
          <Users
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        ) : (
          <Plans
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )
      ) : (
        <PageContainer>
          <div className="flex justify-center items-center gap-4 flex-col">
            <h1 className="heading-l text-title font-medium">
              Business Settings
            </h1>
            <p className="body-s text-para leading-[16.32px]">
              Modify the fundamental details about Your Business, such as name,
              location, and languages
            </p>
            <BusinessSettingsCards
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          </div>
        </PageContainer>
      )}{" "}
    </>
  );
};
export default BusinessSettings;
