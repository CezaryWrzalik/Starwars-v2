import { useSession } from "next-auth/react";
import styled from "styled-components";
import ProfileForm from "./profile-form";

const ProfilePageContainer = styled.div`
  height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
	text-align: center;
`;

const UserProfile = () => {
	const {data: session} = useSession();

	async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

	return(
		<ProfilePageContainer>
      <h1>Your email {session.user.email}</h1>
			<ProfileForm onChangePassword={changePasswordHandler} />
    </ProfilePageContainer>
	)
}

export default UserProfile;