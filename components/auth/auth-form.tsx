import { useRef } from "react";
import UiButton from "../ui/ui-button";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { UiInputContainer } from "../ui/ui-input";
import styled from "styled-components";

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

const AuthForm = () => {
  const dispatch = useDispatch();
  const { updateResponse } = bindActionCreators(actionCreators, dispatch);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const createUser = async (email: string, password: string) => {
    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  };

  const subbmitHandler = async (e: React.MouseEvent<HTMLElement>, submitter: string) => {
    e.preventDefault();

    if (!emailInputRef.current || !passwordInputRef.current) {
      return;
    }

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (submitter === "login") {
      updateResponse("pending", "pending", submitter);
      const result = await signIn<'credentials'>("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if(!result){
        throw new Error ("Something went wrong");
      }

      if (result.error) {
        updateResponse("error", result.error, submitter);
      }

      if (!result.error) {
        updateResponse("success", "Logged", submitter);
      }
    }

    if (submitter === "register") {
      updateResponse("pending", "pending", submitter);
      
      try {
        const result = await createUser(enteredEmail, enteredPassword);

        updateResponse("success", result.message, submitter);
      } catch (error) {
        if (error instanceof Error) {
          updateResponse("error", error.message, submitter);
        }
      }
    }
  };

  return (
    <FormContainer>
      <InputContainer>
        <Label htmlFor="Email">Email: </Label>
        <RefInput
          placeholder="Email"
          type="email"
          id="email"
          ref={emailInputRef}
        ></RefInput>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="Password">Password</Label>
        <RefInput
          placeholder="Password"
          type="password"
          id="pass"
          ref={passwordInputRef}
        ></RefInput>
      </InputContainer>
      <UiButton name="login" value="login">
        <div onClick={(e) => subbmitHandler(e, "login")}>Zaloguj</div>
      </UiButton>
      <UiButton name="login" value="register">
        <div onClick={(e) => subbmitHandler(e, "register")}>Zarejestuj</div>
      </UiButton>
    </FormContainer>
  );
};

export default AuthForm;
