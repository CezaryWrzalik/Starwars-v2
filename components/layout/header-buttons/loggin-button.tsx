import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../../redux";
import PersonIcon from "../../icons/person-icon";
import UiButton from "../../ui/ui-button";
import LoginPopup from "../modals/login-modal";
import ProfileMenu from "../modals/profile-menu";

const LogginButtonContainer = styled.div``;

const DesktopButton = styled.div`
  height: 50px;
  width: 80px;

  @media (max-width: 650px) {
    display: none;
  }
`;

const MobileButton = styled.button`
  padding: 8px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: var(--default-radius);
  background: inherit;
  cursor: pointer;
  width: 50px;

  @media (min-width: 650px){
    display: none;
  }
`;

const LogginButton = () => {
  const { data: session } = useSession();
  const { status } = useSelector((state: State) => state.response);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const toggleLoginVisible = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    if (status === "success") {
      setIsPopupVisible(false);
    }
  }, [status]);

  return (
    <LogginButtonContainer>
      <DesktopButton onClick={toggleLoginVisible}>
        <UiButton>{session ? <div>Profile</div> : <div>Login</div>}</UiButton>
      </DesktopButton>
      <MobileButton onClick={toggleLoginVisible}>
        <PersonIcon />
      </MobileButton>
      {session ? (
        <ProfileMenu isPopupVisible={isPopupVisible}
        />
      ) : (
        <LoginPopup
          isPopupVisible={isPopupVisible}
          toggleLoginVisible={toggleLoginVisible}
        />
      )}
    </LogginButtonContainer>
  );
};

export default LogginButton;
