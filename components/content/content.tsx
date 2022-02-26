import styled from "styled-components";
import { CardsResultType } from "../../types/fetchedData-types";
import Cards from "./cards/cards";


const ContentContainer = styled.div`
width: 100%;
overflow: hidden;

display: grid;
grid-template: 100% / 200px 1fr 200px;
gap: 20px;

@media(max-width: 1000px){
  grid-template: 100% / 100px 1fr 100px;
}

@media(max-width: 650px){
  grid-template: 100% / 0px 1fr;
  gap: 0;
}
`;

const Container = styled.div`
  padding: 40px 20px;
  overflow-y: scroll;
  `
  
  const AsideContainer = styled.aside``;
  
  const Header = styled.h2`
  text-align: center;
  text-transform: capitalize;
  `;
  
  const CardsContainer = styled.div`

`;

type PropsType = {
  cards: CardsResultType[];
  category: string;
};

const Content = ({ cards, category }: PropsType) => {
  return (
    <ContentContainer>
      <AsideContainer></AsideContainer>
      <Container>
        <CardsContainer>
          <Header>{category}</Header>
          <Cards cards={cards} />
        </CardsContainer>
      </Container>
    </ContentContainer>
  );
};

export default Content;
