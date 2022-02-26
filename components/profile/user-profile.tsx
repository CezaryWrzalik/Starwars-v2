import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { actionCreators } from "../../redux";
import { PassType } from "../../types/profile-types";
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
  const dispatch = useDispatch();
  const { updateResponse } = bindActionCreators(actionCreators, dispatch);
  
	const {data: session} = useSession();

	async function changePasswordHandler(passwordData: PassType) {
    updateResponse("pending", "pending", "Change Password");

    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if(response.ok){
      updateResponse("success", data.message, "Change Password");
    } else {
      updateResponse("error", data.message, "Change Password");
      
    }
  }

	return(
		<ProfilePageContainer>
      <h1>Your email {session?.user.email}</h1>
			<ProfileForm onChangePassword={changePasswordHandler} />
    </ProfilePageContainer>
	)
}

export default UserProfile;