import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import BusinessToolkitLayout from "../BusinessToolkitLayout";
import PitchDeckSlides from "./helpers/PitchDeckSlides";

interface Props {}

const PitchDeck = (props: Props) => {
  return (
    <PageContainer>
      <BusinessToolkitLayout />
      {/* <NoContent /> */}
      <PitchDeckSlides />
    </PageContainer>
  );
};

export default PitchDeck;
