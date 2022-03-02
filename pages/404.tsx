import styled from "styled-components";

const ErrorContainer = styled.div`
  display: grid;
  place-items: center;
	font-size: 30px;
	text-align: center;
`;

const ErrorPage = () => {
  return <ErrorContainer>404 | Page doesnt exist</ErrorContainer>;
};

export default ErrorPage;
