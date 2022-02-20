import styled from "styled-components";
import StarWarsIcon from "../icons/starwars-icon";
import HeaderButtons from "./header-buttons/header-buttons";

const HeaderContainer = styled.div`
  display: grid;
	grid-template: 100% / 200px 1fr 200px;
  grid-template-areas: "left middle right";
  place-items: center;
	padding: 10px;
  border-bottom: 1px solid ${({theme}) => theme.text};

  @media (max-width: 650px) {
		grid-template: 100% / 1fr 1fr;
		grid-template-areas: "left right";
    padding: 10px 0;
	}
`;
const IconContainer = styled.div`
  grid-area: middle;
	display: grid;

  svg{
    height: 85%;
  }

	@media (max-width: 650px) {
		grid-area: left;

		svg{
			width: 80%;
		}
	}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <StarWarsIcon />
      </IconContainer>
      <HeaderButtons />
    </HeaderContainer>
  );
};

export default Header;
