import { FormEvent, useDebugValue, useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { actionCreators } from "../../redux";
import UiButton from "../ui/ui-button";
import { UiInputContainer } from "../ui/ui-input";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  padding: 20px 40px;

  button {
    height: 40px;
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 5px;
  width: 100%;

  input {
    height: 30px;
    padding: 5px 10px;
    width: 100%;
  }
`;

const RefInput = styled(UiInputContainer)``;

interface SubmitEvent extends Event {
  submitter: {
    value: string;
  };
}

const AuthForm = () => {
  const dispatch = useDispatch();
  const { updateResponse } = bindActionCreators(actionCreators, dispatch);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const createUser = async (email: string, password: string) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  };

  const subbmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const { submitter } = e.nativeEvent as SubmitEvent;
    const formSubbmiter = submitter.value;

    if (!emailInputRef.current || !passwordInputRef.current) {
      return;
    }

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (formSubbmiter === "register") {
      try {
        updateResponse("pending", "pending", formSubbmiter);
        const result = await createUser(enteredEmail, enteredPassword);
        updateResponse("success", result.message, formSubbmiter);
      } catch (error) {
        if (error instanceof Error) {
          updateResponse("error", error.message, formSubbmiter);
        }
      }
    }
  };

  return (
    <FormContainer onSubmit={subbmitHandler}>
      <InputContainer>
        <Label htmlFor="email">Email: </Label>
        <RefInput
          placeholder="email"
          type="email"
          id="email"
          ref={emailInputRef}
        ></RefInput>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="pass">Password</Label>
        <RefInput
          placeholder="password"
          type="password"
          id="pass"
          ref={passwordInputRef}
        ></RefInput>
      </InputContainer>
      <UiButton name="login" value="login">
        Zaloguj
      </UiButton>
      <UiButton name="login" value="register">
        Zarejestuj
      </UiButton>
    </FormContainer>
  );
};

export default AuthForm;
