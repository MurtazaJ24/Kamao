import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div id="profileContainer">
    <UserProfile path="/profile"  />
  </div>
);

export default UserProfilePage;
