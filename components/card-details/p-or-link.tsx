import styled from "styled-components";

type PropsType = {
  data: string | Array<string>;
};

const Alist = styled.a`
  display: block;
  margin-top: 5px;
`;

const POrLink = ({ data }: PropsType) => {
  if (typeof data == "object") {
    return (
      <>
        {data.map((text, i) => {
          const isLink = text.slice(0, 5);
          if (isLink === "https") {
            return (
              <Alist key={i} href={text}>
                {text}
              </Alist>
            );
          } else {
            return <p key={i}>{text}</p>;
          }
        })}
      </>
    );
  }

  if (typeof data === "string") {
    const isLink = data.slice(0, 5);
    if (isLink === "https") {
      return <a href={data}>{data}</a>;
    } else {
      return <p>{data}</p>;
    }
  }

  return <p></p>;
};

export default POrLink;
