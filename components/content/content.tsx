import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { filterCards } from "../../lib/filters";
import { State } from "../../redux";
import { CardsResultType, CardsType } from "../../types/fetchedData-types";
import Aside from "./aside";
import Cards from "./cards/cards";

const ContentContainer = styled.div`
width: 100%;
overflow: hidden;
display: grid;
grid-template: 100% / 200px 1fr 200px;
grid-template-areas:  "aside center right"
gap: 20px;

@media(max-width: 1000px){
  grid-template: 100% / 200px 1fr;
}

@media(max-width: 650px){
  grid-template: 100px 1fr / 1fr;
  gap: 0;
}
`;

const Container = styled.div`
  padding: 40px 20px;
  overflow-y: scroll;
`;

const AsideContainer = styled.aside`
  border-right: 1px solid ${({ theme }) => theme.text};

  @media(max-width: 650px){
    border-right: 0px;
  }
`;

const Header = styled.h2`
  text-align: center;
  text-transform: capitalize;
`;

const CardsContainer = styled.div``;

type PropsType = {
  cards: CardsType[];
  category: string;
};

type FiltersType = {
  state: {};
};

const Content = ({ cards, category }: PropsType) => {
  const filters = useSelector((state: State) => state.filter);

  const [filteredCards, setFilteredCards] = useState<Array<CardsType>>([]);

  useEffect(() => {
    const data = filterCards(filters as FiltersType, cards);

    setFilteredCards(data as CardsType[]);
  }, [filters, cards]);

  return (
    <ContentContainer>
      <AsideContainer>
        <Aside cards={cards} />
      </AsideContainer>
      <Container>
        <CardsContainer>
          <Header>{category}</Header>
          <Cards cards={filteredCards} category={category} />
        </CardsContainer>
      </Container>
    </ContentContainer>
  );
};

export default Content;
