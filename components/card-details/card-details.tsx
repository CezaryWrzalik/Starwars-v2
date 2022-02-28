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

 h3{
	 text-transform: capitalize;
 }
`;

const CardDetails = ({ card }: PropsType) => {
  const keys = Object.keys(card);

  return (
    <CardDetailsContainer>
      {keys.map((c) => {
        return (
          <ValueCotnainer>
            <h3>{c}:</h3>
						<p>{card[c as keyof typeof card]}</p>
          </ValueCotnainer>
        );
      })}
    </CardDetailsContainer>
  );
};

export default CardDetails;
