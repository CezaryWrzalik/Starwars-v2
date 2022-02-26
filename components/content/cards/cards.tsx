import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardsResultType } from "../../../types/fetchedData-types";

type PropsType = {
  cards: CardsResultType[];
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

const Data = styled.p`
  text-transform: capitalize;
  margin-bottom: 10px;
`;

const Cards = ({ cards }: PropsType) => {
  const [keys, setKeys] = useState<string[]>([]);

  const getFirstKeys = () => {
    const cardsKeys = [];
    for (let i = 0; i < 3; i++) {
      const key = Object.keys(cards[0])[i];

      cardsKeys.push(key);
    }

    setKeys(cardsKeys);
  };

  useEffect(() => {
    getFirstKeys();
  }, []);

  return (
    <CardsList>
      {cards.map((card, i) => (
        <CardItem key={i}>
          {keys.map((key, i) => (
            <Data key={i}>
              {key}: <b>{card[key as keyof typeof card]}</b>
            </Data>
          ))}
        </CardItem>
      ))}
    </CardsList>
  );
};

export default Cards;
