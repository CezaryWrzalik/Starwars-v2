import styled from "styled-components";
import { CardsType } from "../../types/fetchedData-types";
import POrLink from "./p-or-link";

type PropsType = {
  card: CardsType;
};

const CardDetailsContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  padding: 15px;
  overflow-y: scroll;
  max-height: 100%;
  width: 100%;
`;

const ValueCotnainer = styled.div`
  overflow: hidden;
  padding: 5px;

  h3 {
    text-transform: capitalize;
  }
`;

const CardDetails = ({ card }: PropsType) => {
  const objectKeys = Object.keys(card);

  return (
    <CardDetailsContainer>
      <div>
        {objectKeys.map((objectKey, i) => {
          return (
            <ValueCotnainer key={i}>
              <h3>{objectKey}:</h3>
              <POrLink data={card[objectKey as keyof typeof card]} />
            </ValueCotnainer>
          );
        })}
      </div>
    </CardDetailsContainer>
  );
};

export default CardDetails;
