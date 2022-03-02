import { useEffect, useState } from "react";
import { CardsType } from "../../../types/fetchedData-types";
import CardDetails from "./card-details";
import styled from "styled-components";

type PropsType = {
  cards: CardsType[];
  category: string;
};

const CardsList = styled.ul`
  display: grid;
  list-style: none;
`;

const CardItem = styled.li`
  padding: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  display: grid;
  grid-template: 1fr / repeat(1, 1fr);
  height: 50px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.hovered};
  }

  @media (hover: hover) {
    :hover {
      height: 110px;
    }
  }

  @media (hover: none) {
    height: min-content;
  }
`;

const Cards = ({ cards, category }: PropsType) => {
  const [objectKeys, setObjectKeys] = useState<string[]>([]);

  const getFirstKeys = () => {
    const cardsKeys = [];
    for (let i = 0; i < 3; i++) {
      const key = Object.keys(cards[0])[i];
      cardsKeys.push(key);
    }

    setObjectKeys(cardsKeys);
  };

  useEffect(() => {
    if (cards[0]) {
      getFirstKeys();
    }
  }, [cards]);

  return (
    <CardsList>
      {cards.map((card, i) => (
        <CardItem key={i}>
          {objectKeys.map((objectKey, i) => (
            <CardDetails
              key={i}
              category={category}
              objectKey={objectKey}
              card={card}
            />
          ))}
        </CardItem>
      ))}
    </CardsList>
  );
};

export default Cards;
