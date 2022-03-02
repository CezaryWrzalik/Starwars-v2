import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { removeSpace } from "../../../lib/removeSpace";
import { State } from "../../../redux";
import Link from "next/link";
import CardDetails from "../../../components/card-details/card-details";
import { getCardByName } from "../../../lib/starwars";
import styled from "styled-components";

const CardPageContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template: 1fr 100px / 1fr;
`;

const NotFoundContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

const Button = styled.button`
  height: 50px;
  width: 200px;
  background: inherit;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 15px;
`;

const CardPage: NextPage = () => {
  const { data } = useSelector((state: State) => state.data);
  const [selectedCard, setSelectedCard] = useState<Object>({loading: 'loading'});
  const [category, setCategory] = useState("");
  const nameRef = useRef("");

  const getCard = () => {
    let name = nameRef.current;

    const params = window.location.href.split("/");
    setCategory(params[3]);
    name = params[4];

    async function fetchCard() {
      const data = await getCardByName(category, name);

      setSelectedCard(data);
    }

    if (category) {
      const dataCategory = data[category as keyof typeof data];

      if (dataCategory.length > 0) {
        const firstKey = Object.keys(
          dataCategory[0]
        )[0] as keyof typeof dataCategory[0];

        const currentCardData = dataCategory.filter(
          (d) => removeSpace(String(d[firstKey])) == name
        );

        setSelectedCard(currentCardData[0]);
      } else {
        fetchCard();
      }
    }
  };

  useEffect(() => {
    getCard();
  }, [data, category]);

  if (!selectedCard || Object.keys(selectedCard).length === 0) {
    return (
      <NotFoundContainer>
        PAGE NOT FOUND{" "}
        <Button>
          <Link href={`/${category}`}>Return</Link>
        </Button>
      </NotFoundContainer>
    );
  }

  if (category) {
    return (
      <CardPageContainer>
        <CardDetails card={selectedCard} />
        <Button>
          <Link href={`/${category}`}>Return</Link>
        </Button>
      </CardPageContainer>
    );
  }

  return <div>Loading...</div>;
};

export default CardPage;
