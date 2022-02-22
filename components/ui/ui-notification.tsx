import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { actionCreators, State } from "../../redux";

type NotificationContainerProps = {
  activeNotification: boolean;
  status: string;
};

const NotificationContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 5rem;
  width: 100%;
  background-color: #1b1b1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.5rem 10%;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s;
  opacity: ${({ activeNotification }: NotificationContainerProps) =>
    activeNotification ? "1" : "0"};
  background: ${({ status }) =>
    status === "pending"
      ? "#177cbe"
      : status === "error"
      ? "#e65035"
      : status === "success"
      ? "green"
      : null};
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: white;
  padding-right: 10px;
`;

const Status = styled.p`
  color: white;
`;

const UiNotification = () => {
  const dispatch = useDispatch();
  const { updateResponse } = bindActionCreators(actionCreators, dispatch);
  const { status, title, message } = useSelector(
    (state: State) => state.response
  );

  const [activeNotification, setActiveNotification] = useState(false);

  useEffect(() => {
    if (status) {
      setActiveNotification(true);
    }
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        updateResponse("", "", "");
        setActiveNotification(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status, updateResponse]);

  return (
    <NotificationContainer
      activeNotification={activeNotification}
      status={status}
    >
      <Title>{title}</Title>
      <Status>{message}</Status>
    </NotificationContainer>
  );
};

export default UiNotification;
