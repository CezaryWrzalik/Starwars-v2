import styled from "styled-components";
import LogginButton from "./loggin-button";
import ThemeButton from "./theme-button";

const HeaderButtonsContainer = styled.div`
  align-self: center;

  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  grid-area: right;

  @media (max-width: 650px) {
  }
`;

const HeaderButtons = () => {
  return (
    <HeaderButtonsContainer>
      <LogginButton />
      <ThemeButton />
    </HeaderButtonsContainer>
  );
};

export default HeaderButtons;
