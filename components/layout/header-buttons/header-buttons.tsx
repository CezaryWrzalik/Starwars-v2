import styled from "styled-components";
import LogginButton from "./loggin-button";
import ThemeButton from "./theme-button";

const HeaderButtonsContainer = styled.div`
  align-self: center;

  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  grid-area: right;

  @media (max-width: 650px) {
    gap: 10px;
  }

  @media (max-height: 500px) {
    flex-direction: column;
    grid-area: bottom;
    align-items: center;
  }
`;

const HeaderButtons = () => {
  return (
    <HeaderButtonsContainer>
      <ThemeButton />
      <LogginButton />
    </HeaderButtonsContainer>
  );
};

export default HeaderButtons;
