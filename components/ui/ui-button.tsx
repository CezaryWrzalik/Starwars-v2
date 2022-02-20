import styled from "styled-components";

type PropsType = {
  children: string;
};

const UiButtonContainer = styled.button`
  background: inherit;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 0 20px;
  width: 100%;
  border-radius: var(--default-radius);
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  // transition: 0.3s;
  height: 100%;

  :hover {
    opacity: 0.5;
  }
`;

const UiButton = ({ children }: PropsType) => {
  return <UiButtonContainer>{children}</UiButtonContainer>;
};

export default UiButton;
