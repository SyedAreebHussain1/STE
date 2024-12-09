import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import AccountSettingsLayout from "../AccountSettingsLayout";
import ProfileForm from "./helpers/ProfileForm";

const Profile = () => {
  return (
    <PageContainer>
      <AccountSettingsLayout
        headerTitle="Profile"
        headerDescription="Manage your plan details and billing information"
        headerTagTitle="Personal Info"
        selectedCard="profile"
      >
        <ProfileForm />
      </AccountSettingsLayout>
    </PageContainer>
  );
};

export default Profile;
