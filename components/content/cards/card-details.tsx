import Link from "next/link";
import styled from "styled-components";
import { removeSpace } from "../../../lib/removeSpace";
import { CardsType } from "../../../types/fetchedData-types";

type PropsType = {
  category: string;
  objectKey: string;
  card: CardsType;
};

const Data = styled.p`
  text-transform: capitalize;
  margin-bottom: 10px;
`;

const CardDetails = ({ category, objectKey, card }: PropsType) => {
  const firstObjVal = Object.values(card)[0];

  const ValueWithNoSpaces = removeSpace(firstObjVal as string);

  return (
    <Link href={`/${category}/${ValueWithNoSpaces}`}>
      <Data>
        {objectKey}: <b>{card[objectKey as keyof typeof card]}</b>
      </Data>
    </Link>
  );
};

export default CardDetails;
