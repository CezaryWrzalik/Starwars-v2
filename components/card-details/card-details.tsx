import styled from "styled-components";

type PropsType = {
  card: {};
};

const CardDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;
  overflow-y: scroll;
  max-height: 100%;
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
      {objectKeys.map((objectKey, i) => {
        return (
          <ValueCotnainer key={i}>
            <h3>{objectKey}:</h3>
            <p>{card[objectKey as keyof typeof card]}</p>
          </ValueCotnainer>
        );
      })}
    </CardDetailsContainer>
  );
};

export default CardDetails;
