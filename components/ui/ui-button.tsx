import styled from "styled-components";

type PropsType = {
  children: string;
};

const UiButtonContainer = styled.button`
  background: inherit;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 0 10px;
  width: 100%;
  border-radius: var(--default-radius);
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: opacity .3s;
  height: 100%;
f
  :hover {
    opacity: 0.5;
  }
`;

const UiButton = ({ children }: PropsType) => {
  return <UiButtonContainer>{children}</UiButtonContainer>;
};

export default UiButton;
