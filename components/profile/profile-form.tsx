import { useRef } from "react";
import styled from "styled-components";
import UiButton from "../ui/ui-button";
import { UiInputContainer } from "../ui/ui-input";

const ProfileFormContainer = styled.form`
  width: 200px;
`;

const InputContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 10px;
  width: 100%;
  text-align: center;

  input {
    height: 30px;
    padding: 5px 10px;
    width: 100%;
  }
`;

const RefInput = styled(UiInputContainer)``;

const ButtonContainer = styled.div`
  margin-top: 30px;
  height: 30px;
`;

const ProfileForm = (props) => {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function subbmitHandler(e) {
    e.preventDefault();

    const oldPassword = oldPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;

    props.onChangePassword({
      oldPassword: oldPassword,
      newPassword: newPassword,
    });

		console.log('Maja to fajna dziewczyna')
  }

  return (
    <ProfileFormContainer onSubmit={subbmitHandler}>
      <InputContainer>
        <label htmlFor="new-password">New Password</label>
        <RefInput type="password" id="new-password" ref={newPasswordRef} />
      </InputContainer>
      <InputContainer>
        <label htmlFor="old-password">Old Password</label>
        <RefInput type="password" id="old-password" ref={oldPasswordRef} />
      </InputContainer>
      <ButtonContainer>
        <UiButton>
          <div>Zmień hasło</div>
        </UiButton>
      </ButtonContainer>
    </ProfileFormContainer>
  );
};

export default ProfileForm;